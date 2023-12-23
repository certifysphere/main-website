---
sidebar_position: 9
id: web-scraping-with-python
title:  Web Scraping with Python
tags:
  - Python
  - Web Scraping
---

Web scraping is the process of extracting data from websites. Python provides several libraries and tools that make web scraping easy and efficient. In this section, we'll explore how to scrape websites and extract data using Python.

### Requests and Beautiful Soup

To start web scraping, we need to retrieve the HTML content of a web page. The `requests` library allows us to send HTTP requests and retrieve the HTML content of a web page. Here's an example:

```python
import requests

url = 'https://www.example.com'
response = requests.get(url)
html_content = response.text

print(html_content)
```

In the above code, we import the `requests` library and use the `get()` function to send a GET request to a URL. We retrieve the HTML content of the web page using the `text` attribute of the response object.

Once we have the HTML content, we can use the `Beautiful Soup` library to parse and extract data from it. Beautiful Soup provides convenient functions and methods to navigate and search the HTML structure. Here's an example:

```python
from bs4 import BeautifulSoup

# Assuming we have retrieved the HTML content in the variable 'html_content'
soup = BeautifulSoup(html_content, 'html.parser')

# Extracting data
title = soup.title.text
paragraphs = soup.find_all('p')

print("Title:", title)
print("Paragraphs:")
for p in paragraphs:
    print(p.text)
```

In the above code, we import the `BeautifulSoup` class from the `bs4` module. We create a `BeautifulSoup` object by passing the HTML content and the parser type. We can then use various methods and functions to extract data from the HTML, such as retrieving the page title and finding all paragraphs.

### Handling Dynamic Websites

Some websites use JavaScript to load content dynamically, making it challenging to scrape using only requests and Beautiful Soup. In such cases, you can use additional libraries like `Selenium` or `Scrapy`.

Selenium is a powerful library for automating web browsers, and it allows you to interact with dynamic web pages. Here's an example of using Selenium to scrape a dynamic website:

```python
from selenium import webdriver

# Set up the Chrome driver
driver = webdriver.Chrome('/path/to/chromedriver')

# Navigate to the web page
url = 'https://www.example.com'
driver.get(url)

# Extracting data
title = driver.title
paragraphs = driver.find_elements_by_tag_name('p')

print("Title:", title)
print("Paragraphs:")
for p in paragraphs:
    print(p.text)

# Close the browser
driver.quit()
```

In the above code, we import the `webdriver` class from the `selenium` module. We set up the Chrome driver, navigate to a web page, and then use the driver's methods to interact with the dynamic content and extract data.

### Be Mindful of Web Scraping Ethics

When performing web scraping, it's important to be mindful of the ethics and legality of scraping specific websites. Make sure to check the website's terms of service and adhere to any restrictions or guidelines they have in place. Additionally, be respectful of the website's server resources and avoid overwhelming it with excessive requests.

### Summary

In this section, we explored web scraping with Python. We learned how to retrieve the HTML content of a web page using the `requests` library and parse and extract data from it using `Beautiful Soup`. We also touched on handling dynamic websites using libraries like `Selenium`. Web scraping opens up possibilities for collecting data from various sources, but it's essential to scrape responsibly and respect the websites you are scraping. 

  ### Github Repo
:::info
  You can refer to and clone the code samples for this tutorial from the [GitHub repository](https://github.com/certifysphere/python-code-samples).

  To clone the repository, you can use the following command:

  ```bash
  git clone https://github.com/certifysphere/python-code-samples.git
  ```

  You can then navigate to the `/src` directory to access all the code samples given in this tutorial. 
:::