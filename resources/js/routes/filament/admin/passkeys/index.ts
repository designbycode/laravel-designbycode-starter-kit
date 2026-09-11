import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\GeneratePasskeyAuthenticationOptionsController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/GeneratePasskeyAuthenticationOptionsController.php:11
 * @route '/admin/passkeys/authentication-options'
 */
export const authentication_options = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authentication_options.url(options),
    method: 'get',
})

authentication_options.definition = {
    methods: ["get","head"],
    url: '/admin/passkeys/authentication-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\GeneratePasskeyAuthenticationOptionsController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/GeneratePasskeyAuthenticationOptionsController.php:11
 * @route '/admin/passkeys/authentication-options'
 */
authentication_options.url = (options?: RouteQueryOptions) => {
    return authentication_options.definition.url + queryParams(options)
}

/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\GeneratePasskeyAuthenticationOptionsController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/GeneratePasskeyAuthenticationOptionsController.php:11
 * @route '/admin/passkeys/authentication-options'
 */
authentication_options.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: authentication_options.url(options),
    method: 'get',
})
/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\GeneratePasskeyAuthenticationOptionsController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/GeneratePasskeyAuthenticationOptionsController.php:11
 * @route '/admin/passkeys/authentication-options'
 */
authentication_options.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: authentication_options.url(options),
    method: 'head',
})

/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\AuthenticateUsingPasskeyController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/AuthenticateUsingPasskeyController.php:17
 * @route '/admin/passkeys/authenticate'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/admin/passkeys/authenticate',
} satisfies RouteDefinition<["post"]>

/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\AuthenticateUsingPasskeyController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/AuthenticateUsingPasskeyController.php:17
 * @route '/admin/passkeys/authenticate'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\AuthenticateUsingPasskeyController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/AuthenticateUsingPasskeyController.php:17
 * @route '/admin/passkeys/authenticate'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})
const passkeys = {
    authentication_options: Object.assign(authentication_options, authentication_options),
login: Object.assign(login, login),
}

export default passkeys