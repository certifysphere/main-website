"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:7,id:"working-with-external-libraries-and-apis",title:"Working with External Libraries and APIs",tags:["Python","External Libraries"]},o=void 0,s={unversionedId:"tuts/tutorials/programming/python/working-with-external-libraries-and-apis",id:"tuts/tutorials/programming/python/working-with-external-libraries-and-apis",title:"Working with External Libraries and APIs",description:"Python provides a vast ecosystem of external libraries and APIs that extend the functionality of the language. These libraries allow you to perform a wide range of tasks, such as data manipulation, web scraping, machine learning, and more. In this section, we'll explore how to work with external libraries and interact with APIs in Python.",source:"@site/docs/tuts/tutorials/programming/python/7-external-libs.md",sourceDirName:"tuts/tutorials/programming/python",slug:"/tuts/tutorials/programming/python/working-with-external-libraries-and-apis",permalink:"/docs/tuts/tutorials/programming/python/working-with-external-libraries-and-apis",draft:!1,tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"External Libraries",permalink:"/docs/tags/external-libraries"}],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,id:"working-with-external-libraries-and-apis",title:"Working with External Libraries and APIs",tags:["Python","External Libraries"]},sidebar:"tutorialSidebar",previous:{title:"Error Handling and Exception Handling",permalink:"/docs/tuts/tutorials/programming/python/error-handling-and-exception-handling"},next:{title:"Data Manipulation and Analysis",permalink:"/docs/tuts/tutorials/programming/python/data-manipulation-and-analysis"}},l={},p=[{value:"Installing External Libraries",id:"installing-external-libraries",level:3},{value:"Importing External Libraries",id:"importing-external-libraries",level:3},{value:"Using APIs",id:"using-apis",level:3},{value:"Exploring Library Documentation",id:"exploring-library-documentation",level:3},{value:"Summary",id:"summary",level:3},{value:"Github Repo",id:"github-repo",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Python provides a vast ecosystem of external libraries and APIs that extend the functionality of the language. These libraries allow you to perform a wide range of tasks, such as data manipulation, web scraping, machine learning, and more. In this section, we'll explore how to work with external libraries and interact with APIs in Python."),(0,a.kt)("h3",{id:"installing-external-libraries"},"Installing External Libraries"),(0,a.kt)("p",null,"Before you can use an external library in your Python code, you need to install it. Python's package manager, ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),", makes it easy to install and manage external libraries. You can install a library using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install library_name\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"library_name")," with the name of the library you want to install. For example, to install the popular ",(0,a.kt)("inlineCode",{parentName:"p"},"requests")," library, you would run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install requests\n")),(0,a.kt)("h3",{id:"importing-external-libraries"},"Importing External Libraries"),(0,a.kt)("p",null,"Once you have installed a library, you can import it into your Python code using the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statement. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nresponse = requests.get('https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json')\nprint(response.status_code)\n")),(0,a.kt)("p",null,"In the above code, we import the ",(0,a.kt)("inlineCode",{parentName:"p"},"requests")," library, which allows us to send HTTP requests. We use the ",(0,a.kt)("inlineCode",{parentName:"p"},"get()")," function from the ",(0,a.kt)("inlineCode",{parentName:"p"},"requests")," module to send a GET request to an API endpoint and retrieve the response. We then print the status code of the response."),(0,a.kt)("h3",{id:"using-apis"},"Using APIs"),(0,a.kt)("p",null,"APIs (Application Programming Interfaces) allow different software applications to communicate with each other. Python makes it easy to interact with APIs using external libraries like ",(0,a.kt)("inlineCode",{parentName:"p"},"requests"),". Let's take a look at an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import requests\n\nresponse = requests.get('https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json')\ndata = response.json()\n\nprint(data)\n")),(0,a.kt)("p",null,"In the above code, we send a GET request to an API endpoint using the ",(0,a.kt)("inlineCode",{parentName:"p"},"requests")," library. We retrieve the response and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"json()")," method to convert the response data into a Python dictionary. We can then access specific values from the JSON response using the dictionary keys."),(0,a.kt)("h3",{id:"exploring-library-documentation"},"Exploring Library Documentation"),(0,a.kt)("p",null,"When working with external libraries, it's important to consult their documentation for usage instructions, available functions, and examples. Most libraries provide comprehensive documentation on their official websites or on platforms like GitHub. By referring to the documentation, you can make the most of the library's features and understand how to use it effectively."),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In this section, we covered the basics of working with external libraries and interacting with APIs in Python. We learned how to install external libraries using ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),", import them into our code, and use them to perform various tasks. Working with external libraries and APIs expands the capabilities of Python and allows you to leverage existing solutions to solve complex problems. In the next section, we'll explore the world of data manipulation and analysis in Python."),(0,a.kt)("h3",{id:"github-repo"},"Github Repo"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  You can refer to and clone the code samples for this tutorial from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/certifysphere/python-code-samples"},"GitHub repository"),"."),(0,a.kt)("p",{parentName:"admonition"},"  To clone the repository, you can use the following command:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/certifysphere/python-code-samples.git\n")),(0,a.kt)("p",{parentName:"admonition"},"  You can then navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/src")," directory to access all the code samples given in this tutorial. ")))}m.isMDXComponent=!0}}]);