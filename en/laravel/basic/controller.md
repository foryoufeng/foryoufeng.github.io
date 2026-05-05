# Controller

create controller

```php
php artisan make:controller UserController
# get model resource and requests
php artisan make:controller PhotoController --model=Photo --resource --requests
```

dependency inject

```php
<?php
 
namespace App\Http\Controllers;
 
use App\Repositories\UserRepository;
 
class UserController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        protected UserRepository $users,
    ) {}
}
```

