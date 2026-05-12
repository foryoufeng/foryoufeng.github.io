# Attribute


| 常量                                 | 说明                |
| ---------------------------------- | ----------------- |
| `Attribute::TARGET_CLASS`          | 类上可以使用            |
| `Attribute::TARGET_METHOD`         | 方法上可以使用           |
| `Attribute::TARGET_FUNCTION`       | 函数上可以使用（PHP 全局函数） |
| `Attribute::TARGET_PROPERTY`       | 属性（类变量）上可用        |
| `Attribute::TARGET_PARAMETER`      | 构造函数/方法的参数上可用     |
| `Attribute::TARGET_CLASS_CONSTANT` | 类常量上可用            |
| `Attribute::TARGET_ALL`            | 任意地方都可以使用         |

use

```sh
use Attribute;

#[Attribute(Attribute::TARGET_PROPERTY)]
class MyAttr {
    public function __construct(public string $desc = '') {}
}
```