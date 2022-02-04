const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');


fetch('http://localhost:3000/api/products/'+ id)
//requete de type get sur l'url correspondant au produit choisis

.then (function(res)
     {    //récupérer le résultat de la requête
           return res.json(); //résultat au format json
     })
     
.then (function(product)
     {//products objet renvoyé, promise a result
         const itemImg = document.querySelector(".item__img");
         const img = document.createElement('img');
         img.setAttribute('src',product.imageUrl);
         itemImg.appendChild(img);

         document.getElementById("price").textContent = product.price;
         document.getElementById("description").textContent = product.description;
         
          let select  = document.getElementById("colors");
			// recup couleurs differentes selon kanap
          const colors = product.colors;
                 
                  
		     //add color from specific kanap in combolist  
		for (let i = 0; i < colors.length; i += 1) 
          {
               let selectOption = document.createElement('option');
                 	
               selectOption.value = colors[i];
               selectOption.text = colors[i];
                      
                      
			select.add(selectOption);
               
          }
          
          let quantityChoose = 0;
				document.getElementById("quantity").addEventListener("change", function() {
  					quantityChoose = this.value;
  				});
				
				console.log(quantityChoose); //mode debug
          
          const btnAddCart = document.getElementById("addToCart");
          btnAddCart.addEventListener
			     (  "click", function()
				{
					//add in basket but do not redirect in panier.html to redirect click on link in header
					let productInBasket = 
				     {
			        	kanapName: product.name,
			          kanapId: product._id,
			          kanapPrice: product.price,
					kanapImg: product.imageUrl,
					kanapColor: select.value,
			          quantity: quantityChoose
			          };
			      	
                         addBasket(productInBasket);
                         localStorage.setItem("basket",JSON.stringify(basket));
			     }
                    );
         
     });
