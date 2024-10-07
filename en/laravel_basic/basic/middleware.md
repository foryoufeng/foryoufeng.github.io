# Middleware

create a new middleware

```sh
php artisan make:middleware AccessMiddleware
```

this will generate a new class `AccessMiddleware` in the `app/Http/Middleware`

```php
<?php
    namespace App\Http\Middleware;

    use Closure;
    use Illuminate\Http\Request;
    use Symfony\Component\HttpFoundation\Response;

    class AccessMiddleware
    {
        /**
         * deal request
         *
         * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
         */
        public function handle(Request $request, Closure $next): Response
        {
            //Perform action 
            if ($request->input('token') !== 'my-secret-token') {
                return redirect('home');
            }

            return $next($request);
        }
    }

```

after middleware deal 

```php
    <?php

    namespace App\Http\Middleware;

    use Closure;
    use Illuminate\Http\Request;
    use Symfony\Component\HttpFoundation\Response;

    class AfterMiddleware
    {
        public function handle(Request $request, Closure $next): Response
        {
            $response = $next($request);

            // Perform action

            return $response;
        }
    }
```

add global middleware in `bootstrap/app.php`

```php
<?php
    use App\Http\Middleware\AccessMiddleware;

    ->withMiddleware(function (Middleware $middleware) {
         $middleware->append(AccessMiddleware::class);
    })
```

route bind middleware

```php
<?php

    Route::get('/profile', function () {
        // ...
    })->middleware(AccessMiddleware::class);

    Route::get('/', function () {
        // ...
    })->middleware([First::class, Second::class]);
```

add middleware to `web` and `api` group

```php
<?php
    use App\Http\Middleware\AccessMiddleware;

    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            AccessMiddleware::class,
        ]);

        $middleware->api(prepend: [
            AccessMiddleware::class,
        ]);
    })
```

default middleware is define in `Illuminate\Foundation\Configuration\Middleware`

```php
<?php

public function getMiddlewareGroups()
{
        $middleware = [
            'web' => array_values(array_filter([
                \Illuminate\Cookie\Middleware\EncryptCookies::class,
                \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
                \Illuminate\Session\Middleware\StartSession::class,
                \Illuminate\View\Middleware\ShareErrorsFromSession::class,
                \Illuminate\Foundation\Http\Middleware\ValidateCsrfToken::class,
                \Illuminate\Routing\Middleware\SubstituteBindings::class,
                $this->authenticatedSessions ? 'auth.session' : null,
            ])),

            'api' => array_values(array_filter([
                $this->statefulApi ? \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class : null,
                $this->apiLimiter ? 'throttle:'.$this->apiLimiter : null,
                \Illuminate\Routing\Middleware\SubstituteBindings::class,
            ])),
        ];

        $middleware = array_merge($middleware, $this->groups);

        foreach ($middleware as $group => $groupedMiddleware) {
            foreach ($groupedMiddleware as $index => $groupMiddleware) {
                if (isset($this->groupReplacements[$group][$groupMiddleware])) {
                    $middleware[$group][$index] = $this->groupReplacements[$group][$groupMiddleware];
                }
            }
        }

        foreach ($this->groupRemovals as $group => $removals) {
            $middleware[$group] = array_values(array_filter(
                array_diff($middleware[$group] ?? [], $removals)
            ));
        }

        foreach ($this->groupPrepends as $group => $prepends) {
            $middleware[$group] = array_values(array_filter(
                array_unique(array_merge($prepends, $middleware[$group] ?? []))
            ));
        }

        foreach ($this->groupAppends as $group => $appends) {
            $middleware[$group] = array_values(array_filter(
                array_unique(array_merge($middleware[$group] ?? [], $appends))
            ));
        }

        return $middleware;
}
```