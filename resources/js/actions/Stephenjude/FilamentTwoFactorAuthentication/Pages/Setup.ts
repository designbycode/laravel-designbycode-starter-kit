import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Setup::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Setup.php:7
 * @route '/admin/two-factor-setup'
 */
const Setup = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Setup.url(options),
    method: 'get',
})

Setup.definition = {
    methods: ["get","head"],
    url: '/admin/two-factor-setup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Setup::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Setup.php:7
 * @route '/admin/two-factor-setup'
 */
Setup.url = (options?: RouteQueryOptions) => {
    return Setup.definition.url + queryParams(options)
}

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Setup::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Setup.php:7
 * @route '/admin/two-factor-setup'
 */
Setup.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Setup.url(options),
    method: 'get',
})
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Setup::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Setup.php:7
 * @route '/admin/two-factor-setup'
 */
Setup.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Setup.url(options),
    method: 'head',
})
export default Setup