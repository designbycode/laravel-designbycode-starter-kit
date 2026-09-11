import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Filament\Pages\Auth\EditProfile::__invoke
 * @see app/Filament/Pages/Auth/EditProfile.php:7
 * @route '/admin/profile'
 */
const EditProfile = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditProfile.url(options),
    method: 'get',
})

EditProfile.definition = {
    methods: ["get","head"],
    url: '/admin/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Pages\Auth\EditProfile::__invoke
 * @see app/Filament/Pages/Auth/EditProfile.php:7
 * @route '/admin/profile'
 */
EditProfile.url = (options?: RouteQueryOptions) => {
    return EditProfile.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Pages\Auth\EditProfile::__invoke
 * @see app/Filament/Pages/Auth/EditProfile.php:7
 * @route '/admin/profile'
 */
EditProfile.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditProfile.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Pages\Auth\EditProfile::__invoke
 * @see app/Filament/Pages/Auth/EditProfile.php:7
 * @route '/admin/profile'
 */
EditProfile.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditProfile.url(options),
    method: 'head',
})
export default EditProfile