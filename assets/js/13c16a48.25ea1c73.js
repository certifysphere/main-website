"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2964],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),v=a,u=c["".concat(p,".").concat(v)]||c[v]||m[v]||o;return t?r.createElement(u,i(i({ref:n},d),{},{components:t})):r.createElement(u,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=v;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},6821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={slug:"dotenv-files-nodejs-expressjs",title:"dotEnv(.env) files in Express Node.js app",authors:{name:"Vishal"},tags:["dotenv","node","express"]},i=void 0,s={permalink:"/main-website/blog/dotenv-files-nodejs-expressjs",source:"@site/blog/2023-07-21-dotenv-file-nodejs.md",title:"dotEnv(.env) files in Express Node.js app",description:"Creating a .env file is a common practice in Node.js projects to store environment-specific configuration variables. These variables are typically sensitive data or settings that may change depending on the environment where the application is running, such as development, testing, staging, or production.",date:"2023-07-21T00:00:00.000Z",formattedDate:"July 21, 2023",tags:[{label:"dotenv",permalink:"/main-website/blog/tags/dotenv"},{label:"node",permalink:"/main-website/blog/tags/node"},{label:"express",permalink:"/main-website/blog/tags/express"}],readingTime:1.675,hasTruncateMarker:!1,authors:[{name:"Vishal"}],frontMatter:{slug:"dotenv-files-nodejs-expressjs",title:"dotEnv(.env) files in Express Node.js app",authors:{name:"Vishal"},tags:["dotenv","node","express"]},prevItem:{title:"Enabling CORS in an Express Node.js app",permalink:"/main-website/blog/enabling-cors-in-an-express-node.js-app"},nextItem:{title:"MDX Blog Post",permalink:"/main-website/blog/mdx-blog-post"}},p={authorsImageUrls:[void 0]},l=[],d={toc:l},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Creating a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file is a common practice in Node.js projects to store environment-specific configuration variables. These variables are typically sensitive data or settings that may change depending on the environment where the application is running, such as development, testing, staging, or production."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file should not be committed to version control systems like Git, as it may contain sensitive information. Instead, it is usually added to the ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file to prevent accidental commits."),(0,a.kt)("p",null,"Here's how you can set up different files for different environments:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file: This file will contain default values for your environment variables that are common across all environments.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".env.dev"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".env.staging"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},".env.prod"),": These files will contain environment-specific variables for local development, development environment, staging environment, and production environment, respectively.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Load environment-specific variables based on the running environment: Your application will read the appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file depending on the environment it is running in. For example, when running locally for development, it will use ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local"),", and when deployed to production, it will use ",(0,a.kt)("inlineCode",{parentName:"p"},".env.prod"),"."))),(0,a.kt)("p",null,"Here's an example of the content of these files:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".env")," (Default variables):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PORT=3002\nDB_HOST=localhost\nDB_PORT=5432\nDB_NAME=myappdb\nDB_USER=myappuser\nDB_PASSWORD=mypassword\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," (Local development variables):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DB_HOST=localhost\nDB_PORT=5432\nDB_NAME=myappdb_dev\nDB_USER=myappuser_dev\nDB_PASSWORD=mydevpassword\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".env.dev")," (Development environment variables):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DB_HOST=dev-db-host\nDB_PORT=5432\nDB_NAME=myappdb_dev\nDB_USER=myappuser_dev\nDB_PASSWORD=mydevpassword\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".env.staging")," (Staging environment variables):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DB_HOST=staging-db-host\nDB_PORT=5432\nDB_NAME=myappdb_staging\nDB_USER=myappuser_staging\nDB_PASSWORD=mystagingpassword\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".env.prod")," (Production environment variables):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DB_HOST=prod-db-host\nDB_PORT=5432\nDB_NAME=myappdb_prod\nDB_USER=myappuser_prod\nDB_PASSWORD=myprodpassword\n")),(0,a.kt)("p",null,"In your Node.js/Express app, you can use a package like ",(0,a.kt)("inlineCode",{parentName:"p"},"dotenv")," to read these environment variables and use them in your code. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const dotenv = require('dotenv');\ndotenv.config();\n\nconst port = process.env.PORT || 3002;\nconst dbHost = process.env.DB_HOST;\nconst dbPort = process.env.DB_PORT;\nconst dbName = process.env.DB_NAME;\nconst dbUser = process.env.DB_USER;\nconst dbPassword = process.env.DB_PASSWORD;\n\n// Use these variables in your application code...\n")),(0,a.kt)("p",null,"By setting up your environment variables in this way, you can easily switch between different environments without modifying your code, making it easier to manage configurations for various deployment scenarios."))}m.isMDXComponent=!0}}]);