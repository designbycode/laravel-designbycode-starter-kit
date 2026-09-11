import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Challenge::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Challenge.php:7
 * @route '/admin/two-factor-challenge'
 */
const Challenge = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Challenge.url(options),
    method: 'get',
})

Challenge.definition = {
    methods: ["get","head"],
    url: '/admin/two-factor-challenge',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Challenge::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Challenge.php:7
 * @route '/admin/two-factor-challenge'
 */
Challenge.url = (options?: RouteQueryOptions) => {
    return Challenge.definition.url + queryParams(options)
}

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Challenge::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Challenge.php:7
 * @route '/admin/two-factor-challenge'
 */
Challenge.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Challenge.url(options),
    method: 'get',
})
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Challenge::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Challenge.php:7
 * @route '/admin/two-factor-challenge'
 */
Challenge.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Challenge.url(options),
    method: 'head',
})
export default Challenge