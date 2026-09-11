import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\AuthenticateUsingPasskeyController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/AuthenticateUsingPasskeyController.php:17
 * @route '/admin/passkeys/authenticate'
 */
const AuthenticateUsingPasskeyController = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AuthenticateUsingPasskeyController.url(options),
    method: 'post',
})

AuthenticateUsingPasskeyController.definition = {
    methods: ["post"],
    url: '/admin/passkeys/authenticate',
} satisfies RouteDefinition<["post"]>

/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\AuthenticateUsingPasskeyController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/AuthenticateUsingPasskeyController.php:17
 * @route '/admin/passkeys/authenticate'
 */
AuthenticateUsingPasskeyController.url = (options?: RouteQueryOptions) => {
    return AuthenticateUsingPasskeyController.definition.url + queryParams(options)
}

/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\AuthenticateUsingPasskeyController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/AuthenticateUsingPasskeyController.php:17
 * @route '/admin/passkeys/authenticate'
 */
AuthenticateUsingPasskeyController.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: AuthenticateUsingPasskeyController.url(options),
    method: 'post',
})
export default AuthenticateUsingPasskeyController