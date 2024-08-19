# framework function

* spl_autoload_register  

```php

spl_autoload_register(array('ComposerAutoloaderInit483d3695e25d8d6e93e2e4bc8a9bff1f', 'loadClassLoader'), true, true);

```

* call_user_func

```php

function hello($val){
    echo "hello ".$val;
}

call_user_func('hello','world');


class Demo{
    static public function test(){
        echo "hello demo";
    }
}

$class = 'Demo';
call_user_func([$class,'test']);

```
