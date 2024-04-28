## BookStore

## Steps to configure the Server ( Instructions )

---

To run the application you need to have Node JS installed.

1. Install all node-modules

```
npm i
```

2. Create .env file
`````
1. DB_URI = 'provide your mongo uri'
``````
//PORT = 5000

2. //CLIENT_URL = http://localhost:3000

3. run the backend Server

```
npm start
```
4. API ENDPOINTS

1. USER API
Using Passport js for Authentication Process

##EndPoint User

1. Register:- /api/users/register, Method:- POST
   Perameter:- First Register the User using this API
    EX:-{
    "userFullName": " ",
    "userAge": " ",
    "userEmail": " ",
    "userPassword": " ",
    "userDateOfBirth": "DD-MM-YYYY"
}


2. Login:-  /api/users/login, Method:-POST
   Parameter:- You can login using this API
   EX:- {
    "userEmail": " ",
    "userPassword": " "
} 


//BOOK API

##EndPoint Book

1. FetchAllBook:- /api/book/getAllBooks, Method:- GET
   Perameter:- You can get all the books in single API

2. DeleteBook:- /api/book/deletebook, Method:- POST 
   perameter:- Post method just because of taking some perameter in body to delete the book
                Ex:- {"Author": "","Title": "","Price": ""}

3. Pubish Book:- /api/book/publishbook, Method:- POST
   Perameter:-  Taking some perameter in body to Publish the book
                Ex:- {
    "info": {
        "booktittle": " ",
        "Price" : " ",
        "nop":"DD-MM-YYYY",
        "Author" : " "
    }
}

4. FetchSingleRecord:- /api/book/singlebookrecord, Method:- POST
   Perameter:- Post beacuse of taking the Parameter in body as a ID of user
   Ex:-{ "Author": "6629ed22d1d6e758b98f9536" }