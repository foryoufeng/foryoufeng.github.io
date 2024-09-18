# zend_types

* zend string

```c
struct _zend_string {
	zend_refcounted_h gc;
	zend_ulong        h;  
    # string length 
	size_t            len;
	char              val[1];
};
```