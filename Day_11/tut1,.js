// . Create an object for a book (title, author, price)
// . Access properties using both dot and bracket
// . Write a nested object (user with address and location)
// . Destructure name and age from a student object
// . Loop through keys and values of an object
// . Convert object to array using Object.entries()
// . Copy an object using spread operator
// . Create a deep copy of an object with nested structure
// . Use optional chaining to safely access deep values
// . Use a variable as a key using computed properties


let book ={
  title : "The Success of Sourav",
  author : "Ramdhari Singh Dinkar",
  price : "6000",
  // adress: {
  //   state : "Madhya Pradesh",
  //   city : "Indore",
  //   location : {
  //     stree : "11 Sch. No. 51",
  //     owner : "Sourav Singh"
  //   }
  // }
};


// let address = (book.adress.location.owner); //object destructuring
// console.log(address);
// console.log(book["author"]);

// for (let key in book){
//   console.log(key);
// };
// console.log("----------------------------------------")

// for (let key in book){
//   console.log(key,book[key]);
// };

// let hk = Object.keys(book); // array of keys
// console.log(hk);

// let km = Object.entries(book);
// console.log(km);


// new_book = {
//   total_wt :"390gm",
// }
// let key = "rating";
// book[key] = 9.5;
let new_book = {...book};
// console.log(new_book);

// let deepcopy =JSON.parse(JSON.stringify(book));
let key = "rating";
book[key] = 9.5;
// let new_book = {...book};

// let deepcopy =JSON.parse(JSON.stringify(book));
// console.log(deepcopy);
console.log(book);
console.log(new_book);