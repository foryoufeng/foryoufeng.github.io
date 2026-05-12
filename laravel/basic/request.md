# Request

laravel `Illuminate\Http\Request` deal with all http request

get request path

```php
<?php
$uri = $request->path();
```

check url

```php
<?php
if ($request->is('admin/*')) {
    // ...
}
```