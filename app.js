const http =  new easyFetchJSON();

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(error => console.log(error));

const data = {
    name: "Salmon",
    email: "test@test.com"
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//         .then(data => console.log(data))
//         .catch(error => console.log(error));

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));