# AWS Cloud Hosting

## Access Machine

1. Open browser
2. Paste your machine IP into the browser url
3. Command line based web browser will be opened

### First steps - verify installations

Run the following commands in your command powershell

1. Run `node -v`
2. Run `npm -v`
3. Run `docker -help`
4. Run `git -v`

### Create Node.jd Api

1. Run `mkdir node-server`
2. Run `cd node-server/`
3. Create your module - `npm init -y`
4. Run `ls` - verify your package.jso
5. Run `cat package.json` - watch `package.json` content
6. Run `vim package.json` - edit
7. go to description key
8. press `i` insert mode
9. insert your description `this is my first app`
10. press `Esc`
11. Press `:wq!` and Enter
12. validate your content change by using step 5.

#### Application

1. `npm install express`
2. Run `vim index.js`
3. paste into the file the following code

```javascript
const express = require("express");

const app = express();
const port = 3000;

let products = [];

app.get("/hello", (req, res) => {
  res.send("Hello Api");
});
// THIS IS POST!
app.get("/add-product", (req, res) => {
  const product = req.query.product;
  products.push(product);
  res.send("Added!");
});
app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
```

#### Run The Application

1. Run `node index.js` inside the project folder
2. open your browser on your local machine
3. paste into the URl the following: `http://<YOUR_MACHINE_IP>/hello`
4. Now you can access your API from any machine that connected to the open web.

#### Database

TBD

#### Client

TBD
