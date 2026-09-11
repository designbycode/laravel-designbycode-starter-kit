<?php

namespace App\Filament\Pages\Auth;

use Filament\Auth\Pages\EditProfile as BaseEditProfile;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Schemas\Components\Livewire;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Stephenjude\FilamentTwoFactorAuthentication\Livewire\PasskeyAuthentication;
use Stephenjude\FilamentTwoFactorAuthentication\Livewire\TwoFactorAuthentication;

class EditProfile extends BaseEditProfile
{
    public static function isSimple(): bool
    {
        return false;
    }

    public function content(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('Settings')
                    ->tabs([
                        Tab::make('Profile')
                            ->id('profile')
                            ->schema([
                                $this->getFormContentComponent(),
                            ])
                            ->icon('heroicon-m-user'),
                        Tab::make('Security')
                            ->id('security')
                            ->schema([
                                Livewire::make(TwoFactorAuthentication::class),
                                Livewire::make(PasskeyAuthentication::class),
                            ])
                            ->icon('heroicon-m-shield-check'),
                    ])
                    ->persistTabInQueryString(),
            ]);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Avatar')
                    ->schema([
                        SpatieMediaLibraryFileUpload::make('avatar')
                            ->collection('avatars')
                            ->disk('public')
                            ->avatar()
                            ->image()
                            ->maxSize(2048)
                            ->helperText('Upload a profile picture. Max size: 2MB.')
                            ->columnSpanFull(),
                    ]),

                Section::make('Personal Information')
                    ->schema([
                        $this->getNameFormComponent(),
                        $this->getEmailFormComponent(),
                    ])->columns(2),

                Section::make('Change Password')
                    ->schema([
                        $this->getCurrentPasswordFormComponent()->columnSpanFull(),
                        $this->getPasswordFormComponent(),
                        $this->getPasswordConfirmationFormComponent(),
                    ])->columns(2),
            ]);
    }

    protected function afterSave(): void
    {
        $this->form->saveRelationships();
    }
}
