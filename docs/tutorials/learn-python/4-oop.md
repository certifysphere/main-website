---
sidebar_position: 4
id: object-oriented-programming
title: Object-Oriented Programming (OOP)
tags:
  - Python
  - OOP
  - Object-Oriented Programming
---

Object-Oriented Programming (OOP) is a programming paradigm that focuses on creating objects that contain both data and behavior. Python fully supports OOP and allows you to define classes and create objects based on those classes. In this section, we'll cover the basic concepts of OOP in Python.

### Classes and Objects

A class is a blueprint or template for creating objects. It defines the attributes (data) and methods (behavior) that the objects of the class will have. Here's an example:

```python
# Class definition
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def drive(self):
        print("The car is driving.")

    def stop(self):
        print("The car has stopped.")

    def display_info(self):
        print(f"Car: {self.make} {self.model}, Year: {self.year}")
```

In the above code, we define a `Car` class with attributes such as `make`, `model`, and `year`. We also define three methods: `drive()`, `stop()` and `display_info()`.

An object is an instance of a class. You can create multiple objects based on the same class, each with its own data. Here's how to create objects from the `Car` class:

```python
# Creating objects
car1 = Car("Ford", "Mustang", 2022)
car2 = Car("Tesla", "Model S", 2023)
```

In the above code, we create two objects (`car1` and `car2`) from the `Car` class. We pass the respective values for the `make`, `model`, and `year` attributes.

```python
# Accessing attributes and calling methods
print(car1.make)  # Output: Ford
print(car1.model)  # Output: Mustang
print(car1.year)  # Output: 2022
car2.display_info()  # Output: Car: Tesla Model S, Year: 2023
```
 we can access the attributes (`make`, `model`, `year`) using dot notation (`car1.make`, `car1.model`, `car1.year`). We can also call the `display_info()` method on the `car1` or `car2` objects to display information about the car.

### Constructor

In the above code (Class Car definition), the `def __init__(self, make, model, year)` method is called the constructor. It is a special method that gets executed when an object of the class is created. The `self` parameter represents the instance of the class being created.

The `__init__` method allows us to initialize the attributes of the class. In this case, the `make`, `model`, and `year` parameters are used to initialize the respective attributes of the `Car` class.

Inside the `__init__` method, we assign the parameter values to the instance variables using the `self` keyword. These instance variables (`self.make`, `self.model`, `self.year`) store the data specific to each instance of the class.

By defining the `__init__` method, we ensure that whenever a new `Car` object is created, it requires the `make`, `model`, and `year` values to be provided. This helps in ensuring that all `Car` objects are properly initialized with the necessary data.

Later in the code, after creating an instance of the `Car` class (`car1`), we can access the attributes (`make`, `model`, `year`) using dot notation (`car1.make`, `car1.model`, `car1.year`). We can also call the `display_info()` method on the `car1` or `car2` objects to display information about the car.

The `__init__` method is a fundamental part of defining classes and objects in Python. It allows us to initialize the state of objects and customize their creation process.

### Inheritance and Polymorphism

Inheritance is a fundamental concept in OOP that allows you to create new classes based on existing classes. The new class, called a subclass or derived class, inherits the attributes and methods of the existing class, called the superclass or base class. This promotes code reuse and allows for hierarchical relationships between classes.

Here's an example demonstrating inheritance:

```python
# Inheritance
class ElectricCar(Car):
    def __init__(self, make, model, year, battery_capacity):
        super().__init__(make, model, year)
        self.battery_capacity = battery_capacity

    def charge(self):
        print("The electric car is charging.")
```

In the above code, we define a new class `ElectricCar`, which is a subclass of `Car`. The `ElectricCar` class inherits the attributes and methods from `Car` using the `super()` function. Additionally, the `ElectricCar` class has its own attribute `battery_capacity` and a method `charge()`.

Polymorphism is the ability of an object to take different forms or behave differently based on the context. In Python, polymorphism is achieved through method overriding and method overloading. Method overriding allows a subclass to provide a different implementation of a method defined in its superclass. Method overloading, however, is not directly supported in Python.

### Encapsulation and Data Hiding

Encapsulation is the bundling of data and methods within a class, where the internal details are hidden from the outside. This is achieved by using access modifiers such as public, private, and protected. In Python, the concept of data hiding is achieved through naming conventions and conventions around attribute access.

Attributes or methods that are intended to be private are prefixed with an underscore `_`, indicating that they should not be accessed directly from outside the class. However, there are no strict restrictions in Python to prevent accessing these attributes. It's more of a convention to indicate that those members are intended for internal use.

### Class methods and instance methods
In Object-Oriented Programming (OOP), class methods and instance methods are two types of methods that can be defined within a class to perform specific tasks. 

#### Class Methods

Class methods are methods that are bound to the class itself rather than its instances. They are defined using the `@classmethod` decorator and take the class itself (`cls`) as the first parameter. Class methods can be used to access or modify class-level attributes and perform operations that are relevant to the entire class.

Here's an example that demonstrates the usage of a class method:

```python
class Circle:
    PI = 3.14159  # Class-level attribute

    def __init__(self, radius):
        self.radius = radius

    @classmethod
    def from_diameter(cls, diameter):
        radius = diameter / 2
        return cls(radius)

    def calculate_area(self):
        return self.PI * self.radius * self.radius

# Creating an instance using a class method
circle = Circle.from_diameter(10)

# Accessing instance attribute and invoking an instance method
print(circle.radius)  # Output: 5.0
print(circle.calculate_area())  # Output: 78.53975
```

In the above code, the `from_diameter()` method is a class method that creates a Circle object based on the diameter instead of the radius. It takes the class itself (`cls`) as the first parameter and returns a new instance of the class (`cls(radius)`).

By using the `@classmethod` decorator, we can define this method as a class method, allowing it to be called on the class itself (`Circle.from_diameter(10)`) rather than an instance.

#### Instance Methods

Instance methods are methods that are bound to the instances of a class. They are the most common type of methods in OOP. Instance methods have access to the instance itself (referred to as `self`) and can operate on instance attributes and perform actions specific to each instance.

Here's an example that demonstrates the usage of an instance method:

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        return self.width * self.height

# Creating instances of the Rectangle class
rectangle1 = Rectangle(5, 10)
rectangle2 = Rectangle(3, 6)

# Invoking the instance method on each instance
print(rectangle1.calculate_area())  # Output: 50
print(rectangle2.calculate_area())  # Output: 18
```

In the above code, the `calculate_area()` method is an instance method defined within the `Rectangle` class. It calculates the area of the rectangle based on the width and height attributes of the instance (`self`).

To invoke an instance method, we call it on an instance of the class (`rectangle1.calculate_area()`, `rectangle2.calculate_area()`). The instance (`self`) is automatically passed as the first parameter when calling the method.

Instance methods allow objects to perform actions and interact with their own data, providing a way to encapsulate behavior within each instance of a class.

Both class methods and instance methods play important roles in defining the behavior and functionality of classes in Object-Oriented Programming. By understanding and utilizing these methods effectively, you can create more flexible and powerful class designs.


### Summary

In this section, we explored the basics of Object-Oriented Programming in Python. We learned about classes, objects, inheritance, polymorphism, encapsulation, and data hiding. Understanding these concepts is crucial for building complex and scalable applications. In the next section, we'll delve into modules and packages in Python.