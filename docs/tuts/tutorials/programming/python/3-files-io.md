---
sidebar_position: 3
id: working-with-files-and-input-output
title: Working with Files and Input/Output
tags:
  - Python
  - Files
  - Input/Output
---

In this section, we'll explore how to read and write files in Python and handle input/output operations. These skills are crucial for interacting with external data sources and building more advanced programs.

### Reading and Writing Text Files

Python provides built-in functions for reading and writing text files. Let's start with reading a file:

```python
# Reading a file
file_path = "example.txt"

# Method 1: Using the `open()` function and `read()` method
file = open(file_path, "r")
content = file.read()
file.close()
print(content)

# Method 2: Using the `with` statement (recommended)
with open(file_path, "r") as file:
    content = file.read()
    print(content)
```

In the above code, we first define the path to the file we want to read. Then, we have two methods for reading the file:

- Method 1 uses the `open()` function to open the file, followed by the `read()` method to read its contents. Finally, we close the file using the `close()` method.

- Method 2 is more recommended and uses the `with` statement. It automatically handles file closing, even if an exception occurs.

Now, let's see how to write to a file:

```python
# Writing to a file
file_path = "output.txt"

# Method 1: Using the `open()` function and `write()` method
file = open(file_path, "w")
file.write("Hello, Python!")
file.close()

# Method 2: Using the `with` statement (recommended)
with open(file_path, "w") as file:
    file.write("Hello, Python!")
```

Similar to reading, we define the file path and use two methods for writing:

- Method 1 uses the `open()` function with the file mode set to `"w"` (write), followed by the `write()` method to write the desired content. Finally, we close the file.

- Method 2 is the recommended approach using the `with` statement. We open the file in write mode (`"w"`), use the `write()` method to write the content, and the file is automatically closed when the `with` block is exited.

### Handling Exceptions and Error Messages

When working with files or performing input/output operations, errors can occur. Python provides mechanisms to handle exceptions gracefully. Let's take a look at an example:

```python
# Exception handling
file_path = "example.txt"

try:
    with open(file_path, "r") as file:
        content = file.read()
        print(content)
except FileNotFoundError:
    print("File not found!")
except IOError:
    print("An error occurred while reading the file!")
except Exception as e:
    print(f"An error occurred: {str(e)}")
```

In the above code, we use a `try-except` block to catch and handle exceptions. If the file specified by `file_path` does not exist, a `FileNotFoundError` will be raised. If an error occurs while reading the file, an `IOError` will be raised. The `Exception` class is a base class for all exceptions, and it will catch any other unexpected errors.

### Working with Standard Input and Output

Python allows you to interact with standard input (`stdin`) and standard output (`stdout`). This is useful for reading user input and displaying output. Here's an example:

```python
# Standard input and output
name = input("Enter your name: ")
age = input("Enter your age: ")

print(f"Hello, {name}! You are {age} years old.")
```

In the above code, we use the `input()` function to prompt the user for input. The user's name and age are stored in variables. Then, we use the `print()` function to display a message that includes the provided name and age.


These are the basics of working with files, input/output operations. In the next section, we'll dive into object-oriented programming (OOP) concepts.

### Github Repo
:::info
  You can refer to and clone the code samples for this tutorial from the [GitHub repository](https://github.com/certifysphere/python-code-samples).

  To clone the repository, you can use the following command:

  ```bash
  git clone https://github.com/certifysphere/python-code-samples.git
  ```

  You can then navigate to the `/src` directory to access all the code samples given in this tutorial. 
:::