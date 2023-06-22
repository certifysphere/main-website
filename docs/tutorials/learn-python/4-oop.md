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
```

In the above code, we define a `Car` class with attributes such as `make`, `model`, and `year`. We also define two methods: `drive()` and `stop()`.

An object is an instance of a class. You can create multiple objects based on the same class, each with its own data. Here's how to create objects from the `Car` class:

```python
# Creating objects
car1 = Car("Ford", "Mustang", 2022)
car2 = Car("Tesla", "Model S", 2023)
```

In the above code, we create two objects (`car1` and `car2`) from the `Car` class. We pass the respective values for the `make`, `model`, and `year` attributes.

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

Attributes or methods that are intended to be private are prefixed with an underscore `_`, indicating that they should not be accessed directly from outside the class. However, there are no strict restrictions in Python to prevent accessing these attributes. It's more of a convention to indicate that those members are intended for

 internal use.

### Summary

In this section, we explored the basics of Object-Oriented Programming in Python. We learned about classes, objects, inheritance, polymorphism, encapsulation, and data hiding. Understanding these concepts is crucial for building complex and scalable applications. In the next section, we'll delve into modules and packages in Python.