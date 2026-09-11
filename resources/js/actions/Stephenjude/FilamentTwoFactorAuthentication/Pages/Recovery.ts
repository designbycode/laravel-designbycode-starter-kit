import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Recovery::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Recovery.php:7
 * @route '/admin/two-factor-recovery'
 */
const Recovery = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Recovery.url(options),
    method: 'get',
})

Recovery.definition = {
    methods: ["get","head"],
    url: '/admin/two-factor-recovery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Recovery::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Recovery.php:7
 * @route '/admin/two-factor-recovery'
 */
Recovery.url = (options?: RouteQueryOptions) => {
    return Recovery.definition.url + queryParams(options)
}

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Recovery::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Recovery.php:7
 * @route '/admin/two-factor-recovery'
 */
Recovery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Recovery.url(options),
    method: 'get',
})
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Recovery::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Recovery.php:7
 * @route '/admin/two-factor-recovery'
 */
Recovery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Recovery.url(options),
    method: 'head',
})
export default Recovery