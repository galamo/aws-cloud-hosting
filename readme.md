# AWS Cloud Hosting

## Access Machine
1. Open browser
2. Paste your machine details into the browser url
3. command line should opened


### Verify installations
1. node
2. docker
3. git
4. npm


### Create Node Api
#### Warmup
1. `mkdir node-server`
2. `cd node-server/`
3. `npm init -y`
4. `ls`
5. `cat package.json` - watch file content
6. `vim package.json` - edit 
7. go to description key
8. press `i` insert mode
9. insert your content `this is my first app`
10. press `Esc`
11. Press `:wq!` and Enter
12. validate your content change by using step 5.

#### Application
1. `npm install express`
2. run `vim index.js`
3. paste into the file the following code
```javascript

const express = require('express')

const app = express();
const port = 3000;

let products = []

app.get("/hello",(req, res) => {
    res.send("Hello Api")
} )
// THIS IS POST!
app.get('/add-product', (req, res) => {
        const product = req.query.product
        products.push(product)
        res.send("Added!")
});
app.get('/products', (req, res) => {
        res.json(products)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));


```

#### Run The Application
1. run `node index.js`