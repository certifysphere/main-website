"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3,id:"working-with-files-and-input-output",title:"Working with Files and Input/Output",tags:["Python","Files","Input/Output"]},o=void 0,l={unversionedId:"tuts/tutorials/programming/python/working-with-files-and-input-output",id:"tuts/tutorials/programming/python/working-with-files-and-input-output",title:"Working with Files and Input/Output",description:"In this section, we'll explore how to read and write files in Python and handle input/output operations. These skills are crucial for interacting with external data sources and building more advanced programs.",source:"@site/docs/tuts/tutorials/programming/python/3-files-io.md",sourceDirName:"tuts/tutorials/programming/python",slug:"/tuts/tutorials/programming/python/working-with-files-and-input-output",permalink:"/main-website/docs/tuts/tutorials/programming/python/working-with-files-and-input-output",draft:!1,tags:[{label:"Python",permalink:"/main-website/docs/tags/python"},{label:"Files",permalink:"/main-website/docs/tags/files"},{label:"Input/Output",permalink:"/main-website/docs/tags/input-output"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"working-with-files-and-input-output",title:"Working with Files and Input/Output",tags:["Python","Files","Input/Output"]},sidebar:"tutorialSidebar",previous:{title:"Functions and Function Parameters",permalink:"/main-website/docs/tuts/tutorials/programming/python/python-functions"},next:{title:"Object-Oriented Programming (OOP)",permalink:"/main-website/docs/tuts/tutorials/programming/python/object-oriented-programming"}},p={},s=[{value:"Reading and Writing Text Files",id:"reading-and-writing-text-files",level:3},{value:"Handling Exceptions and Error Messages",id:"handling-exceptions-and-error-messages",level:3},{value:"Working with Standard Input and Output",id:"working-with-standard-input-and-output",level:3},{value:"Github Repo",id:"github-repo",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, we'll explore how to read and write files in Python and handle input/output operations. These skills are crucial for interacting with external data sources and building more advanced programs."),(0,a.kt)("h3",{id:"reading-and-writing-text-files"},"Reading and Writing Text Files"),(0,a.kt)("p",null,"Python provides built-in functions for reading and writing text files. Let's start with reading a file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Reading a file\nfile_path = "example.txt"\n\n# Method 1: Using the `open()` function and `read()` method\nfile = open(file_path, "r")\ncontent = file.read()\nfile.close()\nprint(content)\n\n# Method 2: Using the `with` statement (recommended)\nwith open(file_path, "r") as file:\n    content = file.read()\n    print(content)\n')),(0,a.kt)("p",null,"In the above code, we first define the path to the file we want to read. Then, we have two methods for reading the file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Method 1 uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"open()")," function to open the file, followed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"read()")," method to read its contents. Finally, we close the file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"close()")," method.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Method 2 is more recommended and uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"with")," statement. It automatically handles file closing, even if an exception occurs."))),(0,a.kt)("p",null,"Now, let's see how to write to a file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Writing to a file\nfile_path = "output.txt"\n\n# Method 1: Using the `open()` function and `write()` method\nfile = open(file_path, "w")\nfile.write("Hello, Python!")\nfile.close()\n\n# Method 2: Using the `with` statement (recommended)\nwith open(file_path, "w") as file:\n    file.write("Hello, Python!")\n')),(0,a.kt)("p",null,"Similar to reading, we define the file path and use two methods for writing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Method 1 uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"open()")," function with the file mode set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"w"')," (write), followed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")," method to write the desired content. Finally, we close the file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Method 2 is the recommended approach using the ",(0,a.kt)("inlineCode",{parentName:"p"},"with")," statement. We open the file in write mode (",(0,a.kt)("inlineCode",{parentName:"p"},'"w"'),"), use the ",(0,a.kt)("inlineCode",{parentName:"p"},"write()")," method to write the content, and the file is automatically closed when the ",(0,a.kt)("inlineCode",{parentName:"p"},"with")," block is exited."))),(0,a.kt)("h3",{id:"handling-exceptions-and-error-messages"},"Handling Exceptions and Error Messages"),(0,a.kt)("p",null,"When working with files or performing input/output operations, errors can occur. Python provides mechanisms to handle exceptions gracefully. Let's take a look at an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Exception handling\nfile_path = "example.txt"\n\ntry:\n    with open(file_path, "r") as file:\n        content = file.read()\n        print(content)\nexcept FileNotFoundError:\n    print("File not found!")\nexcept IOError:\n    print("An error occurred while reading the file!")\nexcept Exception as e:\n    print(f"An error occurred: {str(e)}")\n')),(0,a.kt)("p",null,"In the above code, we use a ",(0,a.kt)("inlineCode",{parentName:"p"},"try-except")," block to catch and handle exceptions. If the file specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"file_path")," does not exist, a ",(0,a.kt)("inlineCode",{parentName:"p"},"FileNotFoundError")," will be raised. If an error occurs while reading the file, an ",(0,a.kt)("inlineCode",{parentName:"p"},"IOError")," will be raised. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Exception")," class is a base class for all exceptions, and it will catch any other unexpected errors."),(0,a.kt)("h3",{id:"working-with-standard-input-and-output"},"Working with Standard Input and Output"),(0,a.kt)("p",null,"Python allows you to interact with standard input (",(0,a.kt)("inlineCode",{parentName:"p"},"stdin"),") and standard output (",(0,a.kt)("inlineCode",{parentName:"p"},"stdout"),"). This is useful for reading user input and displaying output. Here's an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Standard input and output\nname = input("Enter your name: ")\nage = input("Enter your age: ")\n\nprint(f"Hello, {name}! You are {age} years old.")\n')),(0,a.kt)("p",null,"In the above code, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"input()")," function to prompt the user for input. The user's name and age are stored in variables. Then, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"print()")," function to display a message that includes the provided name and age."),(0,a.kt)("p",null,"These are the basics of working with files, input/output operations. In the next section, we'll dive into object-oriented programming (OOP) concepts."),(0,a.kt)("h3",{id:"github-repo"},"Github Repo"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"  You can refer to and clone the code samples for this tutorial from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/certifysphere/python-code-samples"},"GitHub repository"),"."),(0,a.kt)("p",{parentName:"admonition"},"  To clone the repository, you can use the following command:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/certifysphere/python-code-samples.git\n")),(0,a.kt)("p",{parentName:"admonition"},"  You can then navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/src")," directory to access all the code samples given in this tutorial. ")))}c.isMDXComponent=!0}}]);