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

### Python provided Modules and Libraries

Python provides a vast collection of modules and libraries that extend its functionality and make it easier to work with files, perform input/output operations, and more. Modules are Python files containing reusable code, while libraries are collections of modules that serve specific purposes.

To use a module or library in your Python code, you need to import it first. Here's an example of importing the `os` module, which provides functions for interacting with the operating system:

```python
import os

# Using functions from the os module
current_directory = os.getcwd()
print(current_directory)

file_exists = os.path.exists("myfile.txt")
print(file_exists)
```

In the above code, we import the `os` module using the `import` statement. We then use functions from the `os` module, such as `getcwd()` to get the current working directory and `path.exists()` to check if a file exists.

Python also allows you to import specific functions or classes from a module using the `from` keyword. Here's an example:

```python
from math import sqrt

result = sqrt(25)
print(result)
```

In the above code, we import only the `sqrt()` function from the `math` module. This allows us to use the `sqrt()` function directly without referencing the module name.

Besides the built-in modules, Python has a vast ecosystem of third-party libraries that provide additional functionality for various domains and purposes. Some popular libraries include:

- `NumPy`: A library for numerical computing with arrays and matrices.
- `Pandas`: A library for data manipulation and analysis.
- `Matplotlib`: A library for creating visualizations and plots.
- `Requests`: A library for making HTTP requests.
- `BeautifulSoup`: A library for web scraping and parsing HTML/XML documents.
- `Django`: A web framework for building web applications.
- `Flask`: A lightweight web framework for building web applications.

To use these libraries, you need to install them first using a package manager like `pip`. Once installed, you can import and utilize their functionalities in your Python code.

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
mean = np.mean(arr)
print(mean)
```

In the above code, we import the `numpy` library and use the `mean()` function from the `numpy` module to calculate the mean of an array.

By leveraging modules and libraries, you can tap into a wide range of pre-built functionality, save time, and enhance your Python programs' capabilities.


### Summary

In this section, we covered modules and packages in Python. Modules are used to organize code within a single file, while packages allow you to organize related modules into a directory structure. We learned how to create and import modules, as well as create and import packages. This knowledge is crucial for code reuse and maintaining a well-structured project. In the next section, we'll explore error handling and exception handling in Python.

### Github Repo
:::info
  You can refer to and clone the code samples for this tutorial from the [GitHub repository](https://github.com/certifysphere/python-code-samples).

  To clone the repository, you can use the following command:

  ```bash
  git clone https://github.com/certifysphere/python-code-samples.git
  ```

  You can then navigate to the `/src` directory to access all the code samples given in this tutorial. 
:::