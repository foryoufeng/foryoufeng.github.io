# pest教程

## 安装

```
composer remove phpunit/phpunit
composer require pestphp/pest --dev --with-all-dependencies
```

## 初始化pest

```sh
./vendor/bin/pest --init
```

## 运行pest

```sh
./vendor/bin/pest
```

## 编写第一个测试

在test/Unit/创建FunctionTest.php，放入以下内容

```php
test('sum', function () {
   $result = sum(1, 2);
 
   expect($result)->toBe(3);
});
```

## 添加描述

在方法前面加 `describe()` 可以显示描述

```php
describe('sum', function () {
   it('may sum integers', function () {
       $result = sum(1, 2);
 
       expect($result)->toBe(3);
    });
 
    it('may sum floats', function () {
       $result = sum(1.5, 2.5);
 
       expect($result)->toBe(4.0);
    });
});
```

## 常用断言

### toBe()

```php
expect(1)->toBe(1);
expect('1')->not->toBe(1);
expect(new StdClass())->not->toBe(new StdClass());
```

### toBeBetween()

```php
expect(2)->toBeBetween(1, 3);
expect(1.5)->toBeBetween(1, 2);
 
$expectationDate = new DateTime('2023-09-22');
$oldestDate = new DateTime('2023-09-21');
$latestDate = new DateTime('2023-09-23');
 
expect($expectationDate)->toBeBetween($oldestDate, $latestDate);
```

### toBeTrue()

```php
expect($isPublished)->toBeTrue();
```

### toBeEmpty()

```php
expect('')->toBeEmpty();
expect([])->toBeEmpty();
expect(null)->toBeEmpty();
```

### toEqual($expected)

```php
expect($title)->toEqual('Hello World');
expect('1')->toEqual(1);
expect(new StdClass())->toEqual(new StdClass());
```

### toBeFile()

```php
expect('/tmp/some-file.tmp')->toBeFile();
```
