# CSRF

add csrf_token

```html
<form method="POST" action="/profile">
    @csrf

    <!-- 相当于... -->
    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
</form>
```

except CSRF on the `bootstrap/app.php` file `validateCsrfTokens` method to exclude routes

```php
<?php

    ->withMiddleware(function (Middleware $middleware) {
        $middleware->validateCsrfTokens(except: [
            'stripe/*',
            'http://example.com/foo/bar',
            'http://example.com/foo/*',
        ]);
    })
```

act validate token is in the `Illuminate\Foundation\Http\Middleware\VerifyCsrfToken`

```php
# handle to validate the token is match
public function handle($request, Closure $next)
{
        if (
            $this->isReading($request) ||
            $this->runningUnitTests() ||
            $this->inExceptArray($request) ||
            $this->tokensMatch($request)
        ) {
            return tap($next($request), function ($response) use ($request) {
                if ($this->shouldAddXsrfTokenCookie()) {
                    $this->addCookieToResponse($request, $response);
                }
            });
        }

        throw new TokenMismatchException('CSRF token mismatch.');
}

# get token from session and validate the token from the '_token' or header token 
protected function tokensMatch($request)
{
    $token = $this->getTokenFromRequest($request);

    return is_string($request->session()->token()) &&
           is_string($token) &&
           hash_equals($request->session()->token(), $token);
}
```