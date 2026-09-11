import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\GeneratePasskeyAuthenticationOptionsController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/GeneratePasskeyAuthenticationOptionsController.php:11
 * @route '/admin/passkeys/authentication-options'
 */
const GeneratePasskeyAuthenticationOptionsController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneratePasskeyAuthenticationOptionsController.url(options),
    method: 'get',
})

GeneratePasskeyAuthenticationOptionsController.definition = {
    methods: ["get","head"],
    url: '/admin/passkeys/authentication-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\GeneratePasskeyAuthenticationOptionsController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/GeneratePasskeyAuthenticationOptionsController.php:11
 * @route '/admin/passkeys/authentication-options'
 */
GeneratePasskeyAuthenticationOptionsController.url = (options?: RouteQueryOptions) => {
    return GeneratePasskeyAuthenticationOptionsController.definition.url + queryParams(options)
}

/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\GeneratePasskeyAuthenticationOptionsController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/GeneratePasskeyAuthenticationOptionsController.php:11
 * @route '/admin/passkeys/authentication-options'
 */
GeneratePasskeyAuthenticationOptionsController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: GeneratePasskeyAuthenticationOptionsController.url(options),
    method: 'get',
})
/**
* @see \Spatie\LaravelPasskeys\Http\Controllers\GeneratePasskeyAuthenticationOptionsController::__invoke
 * @see vendor/spatie/laravel-passkeys/src/Http/Controllers/GeneratePasskeyAuthenticationOptionsController.php:11
 * @route '/admin/passkeys/authentication-options'
 */
GeneratePasskeyAuthenticationOptionsController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: GeneratePasskeyAuthenticationOptionsController.url(options),
    method: 'head',
})
export default GeneratePasskeyAuthenticationOptionsController