---
slug: enabling-cors-in-an-express-node.js-app
title: Enabling CORS in an Express Node.js app
authors:
  name: Vishal
tags: [CORS, node, express]
---

`CORS (Cross-Origin Resource Sharing)` is a security feature implemented by web browsers to restrict web pages from making requests to a different domain (origin) than the one the page was served from. It is a fundamental part of the `Same-Origin Policy`, which is designed to prevent malicious websites from accessing sensitive data from other websites.

The Same-Origin Policy applies to requests made using XMLHttpRequest and the Fetch API in JavaScript. When a web page tries to make a cross-origin request, the browser blocks the request by default. However, there are legitimate use cases where cross-origin requests are necessary, such as when a frontend application needs to access data from an API hosted on a different domain.

In such cases, you need to enable CORS on the server-side to allow cross-origin requests. Enabling CORS involves adding specific HTTP headers to the server's response, which inform the browser that the server allows requests from specific origins.

Here's why you might need to enable CORS:

1. Frontend-Backend Separation: When your frontend application is running on a different domain or port than your backend API, you need to enable CORS to allow communication between them.

2. API Access from Different Origins: If you want to make your API publicly accessible and allow other domains or applications to consume its data, you need to enable CORS to authorize cross-origin requests.

Best practices for enabling CORS in a production environment:

1. **Restrict Allowed Origins**: Only allow specific origins (domains) that you trust to access your API. Avoid using the wildcard (`*`) in the [Access-Control-Allow-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) header, as it allows any domain to access your API, potentially exposing sensitive data.

2. **Use Specific Methods**: Explicitly specify the allowed HTTP methods in the [Access-Control-Allow-Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) header. Limiting the methods to those required by your API reduces the risk of unauthorized actions.

3. **Handle Preflight Requests**: For complex requests (e.g., those that use custom headers or methods other than GET, POST, or HEAD), the browser sends a preflight OPTIONS request to check if the server supports CORS. Make sure your server responds to these preflight requests with the appropriate headers.

4. **Secure Cookies**: If your API uses cookies for authentication or session management, set the [Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) header to `true`. However, be cautious when allowing credentials with cross-origin requests, as it can pose security risks.

Here's an example of enabling CORS in an Express Node.js app using the `cors` middleware:

First, you'll need to install the `cors` package:

```bash
npm install cors
```

```javascript
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Or enable CORS for specific routes
// app.get('/api/data', cors(), (req, res) => { ... });

// Your other route handlers here...

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

By adding `app.use(cors())`, you are enabling CORS for all routes in your Express app. This will allow requests from any domain to access your backend API.

You can also use it selectively for specific routes, as shown in the commented line. 
If you want to restrict CORS to specific origins, you can pass an options object to the `cors` middleware. For example, to allow requests from `http://example.com` and `http://localhost:3000`, you can use the following code:

```javascript
app.use(cors({
  origin: ['http://example.com', 'http://localhost:3000'],
}));
```

This way, requests from other domains will be blocked, and only requests from the specified origins will be allowed.

The middleware will add the necessary CORS headers to the server's response, allowing cross-origin requests from any domain by default. To restrict the allowed origins, you can pass an options object to the `cors()` function with a `origin` property specifying the allowed origins.