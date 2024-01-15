---
sidebar_position: 7
id: working-with-external-libraries-and-apis
title: Working with External Libraries and APIs
tags:
  - Python
  - External Libraries
---

Python provides a vast ecosystem of external libraries and APIs that extend the functionality of the language. These libraries allow you to perform a wide range of tasks, such as data manipulation, web scraping, machine learning, and more. In this section, we'll explore how to work with external libraries and interact with APIs in Python.

### Installing External Libraries

Before you can use an external library in your Python code, you need to install it. Python's package manager, `pip`, makes it easy to install and manage external libraries. You can install a library using the following command:

```bash
pip install library_name
```

Replace `library_name` with the name of the library you want to install. For example, to install the popular `requests` library, you would run:

```bash
pip install requests
```

### Importing External Libraries

Once you have installed a library, you can import it into your Python code using the `import` statement. Here's an example:

```python
import requests

response = requests.get('https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json')
print(response.status_code)
```

In the above code, we import the `requests` library, which allows us to send HTTP requests. We use the `get()` function from the `requests` module to send a GET request to an API endpoint and retrieve the response. We then print the status code of the response.

### Using APIs

APIs (Application Programming Interfaces) allow different software applications to communicate with each other. Python makes it easy to interact with APIs using external libraries like `requests`. Let's take a look at an example:

```python
import requests

response = requests.get('https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json')
data = response.json()

print(data)
```

In the above code, we send a GET request to an API endpoint using the `requests` library. We retrieve the response and use the `json()` method to convert the response data into a Python dictionary. We can then access specific values from the JSON response using the dictionary keys.

### Exploring Library Documentation

When working with external libraries, it's important to consult their documentation for usage instructions, available functions, and examples. Most libraries provide comprehensive documentation on their official websites or on platforms like GitHub. By referring to the documentation, you can make the most of the library's features and understand how to use it effectively.

### Summary

In this section, we covered the basics of working with external libraries and interacting with APIs in Python. We learned how to install external libraries using `pip`, import them into our code, and use them to perform various tasks. Working with external libraries and APIs expands the capabilities of Python and allows you to leverage existing solutions to solve complex problems. In the next section, we'll explore the world of data manipulation and analysis in Python.

### Github Repo
:::info
  You can refer to and clone the code samples for this tutorial from the [GitHub repository](https://github.com/certifysphere/python-code-samples).

  To clone the repository, you can use the following command:

  ```bash
  git clone https://github.com/certifysphere/python-code-samples.git
  ```

  You can then navigate to the `/src` directory to access all the code samples given in this tutorial. 
:::