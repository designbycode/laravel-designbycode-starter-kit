import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Challenge::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Challenge.php:7
 * @route '/admin/two-factor-challenge'
 */
export const challenge = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: challenge.url(options),
    method: 'get',
})

challenge.definition = {
    methods: ["get","head"],
    url: '/admin/two-factor-challenge',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Challenge::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Challenge.php:7
 * @route '/admin/two-factor-challenge'
 */
challenge.url = (options?: RouteQueryOptions) => {
    return challenge.definition.url + queryParams(options)
}

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Challenge::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Challenge.php:7
 * @route '/admin/two-factor-challenge'
 */
challenge.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: challenge.url(options),
    method: 'get',
})
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Challenge::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Challenge.php:7
 * @route '/admin/two-factor-challenge'
 */
challenge.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: challenge.url(options),
    method: 'head',
})

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Recovery::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Recovery.php:7
 * @route '/admin/two-factor-recovery'
 */
export const recovery = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recovery.url(options),
    method: 'get',
})

recovery.definition = {
    methods: ["get","head"],
    url: '/admin/two-factor-recovery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Recovery::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Recovery.php:7
 * @route '/admin/two-factor-recovery'
 */
recovery.url = (options?: RouteQueryOptions) => {
    return recovery.definition.url + queryParams(options)
}

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Recovery::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Recovery.php:7
 * @route '/admin/two-factor-recovery'
 */
recovery.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recovery.url(options),
    method: 'get',
})
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Recovery::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Recovery.php:7
 * @route '/admin/two-factor-recovery'
 */
recovery.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recovery.url(options),
    method: 'head',
})

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Setup::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Setup.php:7
 * @route '/admin/two-factor-setup'
 */
export const setup = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setup.url(options),
    method: 'get',
})

setup.definition = {
    methods: ["get","head"],
    url: '/admin/two-factor-setup',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Setup::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Setup.php:7
 * @route '/admin/two-factor-setup'
 */
setup.url = (options?: RouteQueryOptions) => {
    return setup.definition.url + queryParams(options)
}

/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Setup::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Setup.php:7
 * @route '/admin/two-factor-setup'
 */
setup.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: setup.url(options),
    method: 'get',
})
/**
* @see \Stephenjude\FilamentTwoFactorAuthentication\Pages\Setup::__invoke
 * @see vendor/stephenjude/filament-two-factor-authentication/src/Pages/Setup.php:7
 * @route '/admin/two-factor-setup'
 */
setup.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: setup.url(options),
    method: 'head',
})
const twoFactor = {
    challenge: Object.assign(challenge, challenge),
recovery: Object.assign(recovery, recovery),
setup: Object.assign(setup, setup),
}

export default twoFactor