namespace app;

class Program
{
    static void Main(string[] args)
    {
        // general syntax
        Console.WriteLine("Hello, World!");
        int day = 4;
        switch (day)
        {
            case 6:
                Console.WriteLine("Today is Saturday.");
                break;
            case 7:
                Console.WriteLine("Today is Sunday");
                break;
            default:
                Console.WriteLine("Looking for something other than the Weeknd ;)");
                break;
        }

        // class
        MyReadOnlyValueClass mrovc = new MyReadOnlyValueClass();
        Console.WriteLine(mrovc.GetReadOnlyValue());

        // inheritance
        Vehicle v = new Vehicle("audi", "a1", 2020);
        Car c = new Car("audi", "a1", 2020);
        Console.WriteLine(c.ToString());
        Console.WriteLine(c.makeSound());
        Console.WriteLine(c.steering());
        Console.WriteLine(c.brake());

        // Shortcut object definition
        var person = new { Name = "Riccardo", Age = 30 };
        Console.WriteLine(person.Name);

        // collections 
        List<Car> cars = new List<Car>();
        Dictionary<string, string> dictionary = new Dictionary<string, string>();
        HashSet<string> hashSet = new HashSet<string>();
        Queue<string> queue = new Queue<string>();
        Stack<int> stack = new Stack<int>();
        LinkedList<string> ll = new LinkedList<string>();
        SortedList<string, int> sortedList = new SortedList<string, int>();
        SortedDictionary<string, int> sortedDictionary = new SortedDictionary<string, int>();

        // generics
        Pair<string, string> p = new Pair<string, string>("riccardo", "rossi");
        p.Print();

        // LINQ
        List<int> integers = new List<int>() { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        var evenNumbers = integers.Where(n => n % 2 == 0).ToList();
        Console.WriteLine(integers);

        // Functional Programming
        Func<int, int, int> add = (a, b) => a + b;
        Console.WriteLine(add(2, 3));

        MyFunctionalContainer mfc = new MyFunctionalContainer();
        Console.WriteLine(mfc.Square(10));

    }
}

class MyFunctionalContainer
{
    public int Square(int x) => x * x;
}

class Pair<K, V>
{
    private K Key;
    private V Value;

    public Pair(K Key, V Value)
    {
        this.Key = Key;
        this.Value = Value;
    }

    public void Print()
    {
        Console.WriteLine($"{Key} {Value}");
    }
}

class MyReadOnlyValueClass
{
    public readonly string ReadOnlyValue;

    public MyReadOnlyValueClass()
    {
        this.ReadOnlyValue = "ReadOnlyValue";
    }

    public string GetReadOnlyValue()
    {
        return this.ReadOnlyValue;
    }
}

interface ISound
{
    string makeSound();
}

class Car : Vehicle, ISound
{

    public Car(string industry, string model, int year) : base(industry, model, year)
    {
    }

    public override string ToString()
    {
        // return this.Industry;
        // but not return this.industry;
        return base.Industry;
    }

    public string makeSound()
    {
        return "bruum";
    }

    public override string steering()
    {
        return "It's steering car!!";
    }
    
    public new string brake()
    {
        return "Car is braking!";
    }

}

class Vehicle
{
    private string industry;
    private string model;
    private int year;

    public Vehicle(string industry, string model, int year)
    {
        this.industry = industry;
        this.model = model;
        this.year = year;
    }

    public string Industry
    {
        get { return industry; }
        set { industry = value; }
    }

    public string Model
    {
        get { return model; }
        set { model = value; }
    }

    public int Year
    {
        get { return year; }
        set { year = value; }
    }

    public virtual string steering()
    {
        return "It's steering!";
    }

    public string brake()
    {
        return "Vehicle is braking!";
    }

}

class Container
{
    public string Message => "I'm a lambda!";
}