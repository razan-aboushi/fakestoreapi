// Here we create the constructor function to create product objects
function Product(title, price, description, image) //assign 4 parameters to the constructor
 {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
  
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(prodData => 
        {

      let products = [];


      for (let r = 0; r < 20; r++)
       {
        let productData = prodData[r];
        // create 6 objects
        const product = new Product //create object
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
    .catch(error => console.log(error));
  