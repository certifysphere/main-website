"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:9,id:"web-scraping-with-python",title:"Web Scraping with Python",tags:["Python","Web Scraping"]},o=void 0,s={unversionedId:"tuts/tutorials/programming/python/web-scraping-with-python",id:"tuts/tutorials/programming/python/web-scraping-with-python",title:"Web Scraping with Python",description:"Web scraping is the process of extracting data from websites. Python provides several libraries and tools that make web scraping easy and efficient. In this section, we'll explore how to scrape websites and extract data using Python.",source:"@site/docs/tuts/tutorials/programming/python/9-web-scraping.md",sourceDirName:"tuts/tutorials/programming/python",slug:"/tuts/tutorials/programming/python/web-scraping-with-python",permalink:"/docs/tuts/tutorials/programming/python/web-scraping-with-python",draft:!1,tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Web Scraping",permalink:"/docs/tags/web-scraping"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"web-scraping-with-python",title:"Web Scraping with Python",tags:["Python","Web Scraping"]},sidebar:"tutorialSidebar",previous:{title:"Data Manipulation and Analysis",permalink:"/docs/tuts/tutorials/programming/python/data-manipulation-and-analysis"},next:{title:"Advanced Topics",permalink:"/docs/tuts/tutorials/programming/python/python-advanced-topics"}},p={},l=[{value:"Requests and Beautiful Soup",id:"requests-and-beautiful-soup",level:3},{value:"Handling Dynamic Websites",id:"handling-dynamic-websites",level:3},{value:"Be Mindful of Web Scraping Ethics",id:"be-mindful-of-web-scraping-ethics",level:3},{value:"Summary",id:"summary",level:3},{value:"Github Repo",id:"github-repo",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Web scraping is the process of extracting data from websites. Python provides several libraries and tools that make web scraping easy and efficient. In this section, we'll explore how to scrape websites and extract data using Python."),(0,r.kt)("h3",{id:"requests-and-beautiful-soup"},"Requests and Beautiful Soup"),(0,r.kt)("p",null,"To start web scraping, we need to retrieve the HTML content of a web page. The ",(0,r.kt)("inlineCode",{parentName:"p"},"requests")," library allows us to send HTTP requests and retrieve the HTML content of a web page. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nurl = 'https://www.example.com'\nresponse = requests.get(url)\nhtml_content = response.text\n\nprint(html_content)\n")),(0,r.kt)("p",null,"In the above code, we import the ",(0,r.kt)("inlineCode",{parentName:"p"},"requests")," library and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"get()")," function to send a GET request to a URL. We retrieve the HTML content of the web page using the ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," attribute of the response object."),(0,r.kt)("p",null,"Once we have the HTML content, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Beautiful Soup")," library to parse and extract data from it. Beautiful Soup provides convenient functions and methods to navigate and search the HTML structure. Here's an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from bs4 import BeautifulSoup\n\n# Assuming we have retrieved the HTML content in the variable 'html_content'\nsoup = BeautifulSoup(html_content, 'html.parser')\n\n# Extracting data\ntitle = soup.title.text\nparagraphs = soup.find_all('p')\n\nprint(\"Title:\", title)\nprint(\"Paragraphs:\")\nfor p in paragraphs:\n    print(p.text)\n")),(0,r.kt)("p",null,"In the above code, we import the ",(0,r.kt)("inlineCode",{parentName:"p"},"BeautifulSoup")," class from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bs4")," module. We create a ",(0,r.kt)("inlineCode",{parentName:"p"},"BeautifulSoup")," object by passing the HTML content and the parser type. We can then use various methods and functions to extract data from the HTML, such as retrieving the page title and finding all paragraphs."),(0,r.kt)("h3",{id:"handling-dynamic-websites"},"Handling Dynamic Websites"),(0,r.kt)("p",null,"Some websites use JavaScript to load content dynamically, making it challenging to scrape using only requests and Beautiful Soup. In such cases, you can use additional libraries like ",(0,r.kt)("inlineCode",{parentName:"p"},"Selenium")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Scrapy"),"."),(0,r.kt)("p",null,"Selenium is a powerful library for automating web browsers, and it allows you to interact with dynamic web pages. Here's an example of using Selenium to scrape a dynamic website:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from selenium import webdriver\n\n# Set up the Chrome driver\ndriver = webdriver.Chrome('/path/to/chromedriver')\n\n# Navigate to the web page\nurl = 'https://www.example.com'\ndriver.get(url)\n\n# Extracting data\ntitle = driver.title\nparagraphs = driver.find_elements_by_tag_name('p')\n\nprint(\"Title:\", title)\nprint(\"Paragraphs:\")\nfor p in paragraphs:\n    print(p.text)\n\n# Close the browser\ndriver.quit()\n")),(0,r.kt)("p",null,"In the above code, we import the ",(0,r.kt)("inlineCode",{parentName:"p"},"webdriver")," class from the ",(0,r.kt)("inlineCode",{parentName:"p"},"selenium")," module. We set up the Chrome driver, navigate to a web page, and then use the driver's methods to interact with the dynamic content and extract data."),(0,r.kt)("h3",{id:"be-mindful-of-web-scraping-ethics"},"Be Mindful of Web Scraping Ethics"),(0,r.kt)("p",null,"When performing web scraping, it's important to be mindful of the ethics and legality of scraping specific websites. Make sure to check the website's terms of service and adhere to any restrictions or guidelines they have in place. Additionally, be respectful of the website's server resources and avoid overwhelming it with excessive requests."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this section, we explored web scraping with Python. We learned how to retrieve the HTML content of a web page using the ",(0,r.kt)("inlineCode",{parentName:"p"},"requests")," library and parse and extract data from it using ",(0,r.kt)("inlineCode",{parentName:"p"},"Beautiful Soup"),". We also touched on handling dynamic websites using libraries like ",(0,r.kt)("inlineCode",{parentName:"p"},"Selenium"),". Web scraping opens up possibilities for collecting data from various sources, but it's essential to scrape responsibly and respect the websites you are scraping. "),(0,r.kt)("h3",{id:"github-repo"},"Github Repo"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"  You can refer to and clone the code samples for this tutorial from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/certifysphere/python-code-samples"},"GitHub repository"),"."),(0,r.kt)("p",{parentName:"admonition"},"  To clone the repository, you can use the following command:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/certifysphere/python-code-samples.git\n")),(0,r.kt)("p",{parentName:"admonition"},"  You can then navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/src")," directory to access all the code samples given in this tutorial. ")))}d.isMDXComponent=!0}}]);