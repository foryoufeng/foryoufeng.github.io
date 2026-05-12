# properities

use

```sh
class Demo
{
   
    public static void Main(string[] args)
    {
        Person person = new Person("jim", 12);
        Console.WriteLine(person.Name);
        Console.WriteLine(person.Age);
    }
    
}

class Person
{
    public String Name { get; set; }
    public int Age { get; set; }

    public Person()
    {
        Console.WriteLine("Person");
    }

    public Person(String name, int age)
    {
        Name = name;
        Age = age;
    }
}
```