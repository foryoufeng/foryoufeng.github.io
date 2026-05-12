# route 

basic define route in `routes/web.php`

```php
<?php
use App\Http\Controllers\UserController;

Route::get('/user', [UserController::class, 'index']);
```

in `routes/api.php` define `/api` prefix routes , if you want to change this route prefix,you can change `bootstrap/app.php`

```php
<?php
->withRouting(
    api: __DIR__.'/../routes/api.php',
    apiPrefix: 'api/admin',
    // ...
)
```

route list

```sh
# see middleware and middleware name
php artisan route:list -v
# route only start with
php artisan route:list --path=api
# hidden vendor packages
php artisan route:list --except-vendor
```

route params,group,middle,and limit

```php
<?php
Route::controller(UserController::class)->name('user.')->group(function () {
    Route::get('/user/{id}', 'show')->whereNumber('id')->name('show');
    Route::get('/user/{search}', 'search')->where('search', '.*')->name('search');
})->middleware([UserAccess::class]);
```

route global limit,you should define in the file `App/Providers/AppServiceProvider` at `boot` method

```php
<?php
use Illuminate\Support\Facades\Route;

/**
 * Bootstrap any application services.
 */
public function boot(): void
{
    Route::pattern('id', '[0-9]+');
}
```

get route

```php
<?php
$url = route('user');

return redirect()->route('user.profile');

return to_route('user.profile',['id'=>1]);
```

check route

```php
<?php
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * deal request
 *
 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
 */
public function handle(Request $request, Closure $next): Response
{
    if ($request->route()->named('profile')) {
        // ...
    }

    return $next($request);
}
```

domain route

```php
<?php
Route::domain('{account}.example.com')->group(function () {
    Route::get('user/{id}', function (string $account, string $id) {
        // ...
    });
});
```

request limit,you should define in the file `App/Providers/AppServiceProvider` at `boot` method

```php
<?php
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;

/**
 * AppServiceProvider
 */
protected function boot(): void
{
    RateLimiter::for('api', function (Request $request) {
        return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
    });
}
```

cros config

```shell
php artisan config:publish cors
```

route cache

```sh
# route cache
php artisan route:cache
# clear cache
php artisan route:clear
```