---
sidebar_position: 2
id: python-basics
title: Python Basics
tags:
  - Python-basics
---

In this section, we'll cover the fundamental concepts of Python programming. We'll explore variables, data types, basic operations, control flow statements, and more.

### Variables and Data Types

In Python, variables are used to store values that can be accessed and manipulated throughout the program. Unlike some other programming languages, Python does not require explicit declaration of variables. You can simply assign a value to a variable, and Python will dynamically determine its data type. Here's an example:

```python
# Assigning values to variables
message = "Hello, Python!"
count = 10
pi = 3.14
is_valid = True
```

Python supports several data types, including:

- **Integers**: Whole numbers without a fractional part, such as 1, 10, -5, etc.
- **Floats**: Real numbers with a decimal point, such as 3.14, -0.5, 2.0, etc.
- **Strings**: Ordered sequences of characters, enclosed in single or double quotes, such as "Hello", 'Python', "42", etc.
- **Booleans**: Represents either `True` or `False`. Used for logical operations and control flow statements.
- **Lists**: Ordered collections of items. Items can be of any data type and are enclosed in square brackets, separated by commas.
- **Tuples**: Similar to lists but immutable, meaning their elements cannot be modified after creation. Enclosed in parentheses.
- **Dictionaries**: Unordered collections of key-value pairs. Keys are unique and used to access corresponding values.

### Basic Operations

Python provides a set of operators to perform basic operations on variables and values. Here are some commonly used operators:

- **Arithmetic Operators**: Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), Modulus (`%`), Exponentiation (`**`), Floor Division (`//`).

- **Comparison Operators**: Equal to (`==`), Not equal to (`!=`), Greater than (`>`), Less than (`<`), Greater than or equal to (`>=`), Less than or equal to (`<=`).

- **Logical Operators**: Logical AND (`and`), Logical OR (`or`), Logical NOT (`not`).

- **Assignment Operators**: Assigns a value to a variable. For example, `=` assigns a value, `+=` adds and assigns, `-=` subtracts and assigns, etc.

- **String Concatenation**: The `+` operator can be used to concatenate strings together.

### Control Flow Statements

Control flow statements allow you to control the execution flow of your program. They include conditional statements (`if`, `elif`, `else`) and loops (`for`, `while`). Let's look at some examples:

```python
# Conditional statements
x = 10
if x > 0:
    print("Positive")
elif x < 0:
    print("Negative")
else:
    print("Zero")

# Loops
for i in range(5):
    print(i)

while x > 0:
    print(x)
    x -= 1
```

In the above examples, the `if-elif-else` statement checks the value of `x` and prints the appropriate message. The `for` loop iterates over a range of numbers and prints them. The `while` loop continuously prints the value of `x` and decrements it until it becomes 0.

### Lists, Tuples, and Dictionaries

Lists, tuples, and dictionaries are used to store collections of values.

```python
# Lists
fruits = ["apple", "banana", "orange"]
print(fruits[0])  # Output: "apple"

# Tuples
point = (2, 3)
print(point[1])  # Output: 3

# Dictionaries
person = {"name": "John", "age": 25, "city": "New York"}
print(person["age"])  # Output: 25
```

Lists are mutable, meaning you can modify their elements. Tuples are immutable, so you cannot change their values after creation. Dictionaries store key-value pairs, allowing you to access values using their corresponding keys.

These are just the basics of Python programming. In the next section, we'll dive deeper into functions and explore more advanced concepts.

### Github Repo
:::info
  You can refer to and clone the code samples for this tutorial from the [GitHub repository](https://github.com/certifysphere/python-code-samples).

  To clone the repository, you can use the following command:

  ```bash
  git clone https://github.com/certifysphere/python-code-samples.git
  ```

  You can then navigate to the `/src` directory to access all the code samples given in this tutorial. 
:::