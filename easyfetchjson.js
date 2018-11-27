/**
 * EasyFetchJson Library
 * Library for making http requests using fetch API.
 * 
 * @version 1.0.0
 * @author Mohd Faisal
 * @license MIT
 * 
 **/

 //Class for throwing HTTP Errors
 class httpError extends Error{
    constructor(response){
        super(`${response.status} for ${response.url}`);
        this.name = 'Http Error';
        this.response = response;
    }
 }

 // Class for making HTTP requests

 class easyFetchJSON{

    //Make an HTTP GET request
    get(url){
        return new Promise((resolve, reject)=>{
            fetch(url)
            .then(response => {
                if(response.status!=200){
                    throw new httpError(response);
                }
                else{
                    return response.json();
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
        })
    }

    //Make an HTTP POST request
    post(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method : 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response =>{
                if(response.status!=201){
                    throw new httpError(response);
                }
                else{
                    return response.json();
                }
            })
            .then((data)=> resolve(data))
            .catch(error => reject(error));
        })
    }

    //Make an HTTP PUT Request
    put(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: 'PUT',
                headers :{
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then((response) =>{
                if(response.status!=200){
                    throw new httpError(response);
                }
                else{
                    return response.json();
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(error))
        });
    }

    //Make an HTTP Delete Request
    delete(url){
        return  new Promise((resolve, reject)=>{
            fetch(url, {
                method: "DELETE"
            })
            .then((response)=> {
                if(response.status!=200){
                    throw new httpError(response);
                }
                else{
                    return response.json();
                }
            })
            .then(data => resolve(`Deletion Successful :)`))
            .catch(err => reject(error));
        })
    }

 }
