---
sidebar_position: 5
id: modules-and-packages.
title: Modules and Packages
tags:
  - Python
  - Modules and Packages
---

In Python, modules and packages are used to organize and reuse code. A module is a file containing Python definitions and statements, while a package is a directory that contains multiple modules. In this section, we'll explore how to create and use modules and packages effectively.

### Creating and Importing Modules

To create a module, you simply create a Python file with the desired functions, classes, or variables. Let's say we have a module called `math_operations.py` with some mathematical operations:

```python
# math_operations.py

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    return x / y
```

To use the functions from this module in another Python file, you need to import it. Here's an example of importing and using the module:

```python
# main.py

import math_operations

result = math_operations.add(5, 3)
print(result)  # Output: 8
```

In the above code, we import the `math_operations` module using the `import` statement. We can then access the functions from the module using the module name followed by the function name.

### Importing Specific Functions or Variables

Sometimes you may only need to import specific functions or variables from a module instead of importing the entire module. You can do this using the `from` statement. Here's an example:

```python
# main.py

from math_operations import add, subtract

result = add(5, 3)
print(result)  # Output: 8

result = subtract(5, 3)
print(result)  # Output: 2
```

In the above code, we import only the `add` and `subtract` functions from the `math_operations` module using the `from` statement. We can directly use these functions without referencing the module name.

### Creating and Importing Packages

A package is a directory that contains multiple Python modules. It allows you to organize related modules into a hierarchical structure. To create a package, you simply create a directory with an empty file called `__init__.py`. Here's an example of a package structure:

```
my_package/
    __init__.py
    module1.py
    module2.py
```

In the above example, `my_package` is the package directory, and `module1.py` and `module2.py` are the module files within the package.

To import modules from a package, you can use the `import` statement. Here's an example:

```python
# main.py

import my_package.module1
import my_package.module2

result = my_package.module1.add(5, 3)
print(result)  # Output: 8

result = my_package.module2.subtract(5, 3)
print(result)  # Output: 2
```

In the above code, we import the modules `module1` and `module2` from the `my_package` package. We can then access the functions from these modules using the package name followed by the module name and the function name.

### Summary

In this section, we covered modules and packages in Python. Modules are used to organize code within a single file, while packages allow you to organize related modules into a directory structure. We learned how to create and import modules, as well as create and import packages. This knowledge is crucial for code reuse and maintaining a well-structured project. In the next section, we'll explore error handling and exception handling in Python.

