# easyFetchJson
Library for making HTTP requests using fetch API.

<h2>Files to include in your project -</h2><br>

```html
  <script src="easyFetchJson.js"></script>
```

<h2>How to Use </h2>

<p> Firstly, instantiate an object of the easyFetchJSON class as shown below -</p>

```javascript
const http = new easyFetchJSON();
```
<p> Then make either a GET, POST, PUT, or DELETE request as shown below - </p>

<h2>Sample GET Request </h2>

```javascript
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(error => console.log(error));
```

<h2>Sample POST Request </h2>


```javascript
const data = {
    name: "Salmon",
    email: "test@test.com"
};
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
```


<h2>Sample PUT Request </h2>


```javascript
const data = {
    name: "Salmon",
    email: "test@test.com"
};
http.put('https://jsonplaceholder.typicode.com/users/2', data)
        .then(data => console.log(data))
        .catch(error => console.log(error));
```
<h2>Sample DELETE Request </h2>


```javascript
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

