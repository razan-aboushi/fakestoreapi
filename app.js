// Here we create the constructor function to create product objects
function Product(title, price, description, image) //assign 4 parameters to the constructor
 {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
  
  fetch('https://fakestoreapi.com/products')    //A fetch request is made to the //fakestoreapi.com/products API
    .then(response => response.json())
    .then(prodData => 
        {

      let products = []; //creates an array of objects 


      for (let r = 0; r < 20; r++)        //For loop here is used to iterate over the first 20 items in the prodData array returned by the API
       {
        let productData = prodData[r];
        // create 6 objects
        const product = new Product //create object for each item using the data from the item
        (
          productData.title,
          productData.price,
          productData.description,
          productData.image
        );

        products.push(product); //push the object data to array
      }


      // Loop through the array using map() and create a card for each object to render in the main section
      let main = document.getElementById('mainSection');

      // Use the map() method to iterate over the products array and create a card for each object and render them in the main section
      main.innerHTML = products.map(product => 
        `
        <div class="card">
          <img src="${product.image}" alt="${product.title}">
           <div class="card-body">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
          </div>
        </div>
      `).join('');
    })
    .catch(error => console.log(error)); //Any errors that occur during the fetch request are caugh
    // and logged to the console using the catch() method.

  