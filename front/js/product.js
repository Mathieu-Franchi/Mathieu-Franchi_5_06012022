const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
//https://www.sitepoint.com/get-url-parameters-with-javascript/


fetch('http://localhost:3000/api/products/'+ id)
//requete de type get sur l'url correspondant au produit choisis

.then (function response(res)
{    //récupérer le résultat de la requête
           return res.json(); //résultat au format json
})
     
.then (function card(product) //product objet renvoyé, promise a result
{   
     //selection ,création et attribution des elements par l'api
     //image
     const itemImg = document.querySelector(".item__img");
     const img = document.createElement('img');
     img.setAttribute('src',product.imageUrl);
     img.setAttribute('alt',product.altTxt);
     itemImg.appendChild(img);
         
     //prix
     document.getElementById("price").textContent = product.price;
     document.getElementById("description").textContent = product.description;
         
     //couleur
     let select  = document.getElementById("colors");
	const colors = product.colors;
                 
     //boucle pour attribuer toutes les couleurs du tableau de l'api correspondant à l'id
	for (let i = 0; i < colors.length; i += 1) 
     {
          let selectOption = document.createElement('option');
                 	
          selectOption.value = colors[i];
          selectOption.text = colors[i];
               
          select.add(selectOption);
     }
     //quantitée
          
     let quantityChoose = 0;
	document.getElementById("quantity").addEventListener("change", function() 
     {
  		quantityChoose = this.value;
  	});
       
     //Si il existe déjà mon tableau je le récupère sinon j'en créé un nouveau
     let arrayInBasket = JSON.parse(localStorage.getItem("basket")) || [];
     
     //fonction au clic sur "ajouter au panier"	
	const btnAddCart = document.getElementById("addToCart");
     btnAddCart.addEventListener( "click", function()
      
     {
          //Creation de l'objet ici un kanap
          let kanapInArray = 
          {    
               kanapName: product.name,
               kanapId: product._id,
               kanapImg: product.imageUrl,
               kanapAlt: product.altTxt,
               kanapColor: select.value,
               quantity: quantityChoose
          };
          //condition choisir une quantitée et une couleur
          if (select.value == "" && quantityChoose == 0)
          {
               alert('Veuillez choisir une couleur et une quantitée');
          }
          else if (select.value == "" )
          {
               alert('Veuillez choisir une couleur');
                         
          }
          else if (quantityChoose == 0 || quantityChoose <= 0)
          {
               alert('Veuillez choisir une quantitée');
          }
          else 
          {
               //On injecte le kanap dans le tableau
		     arrayInBasket.push(kanapInArray);
               //On envoie le tableau convertis en string dans le localstorage
               localStorage.setItem("basket",JSON.stringify(arrayInBasket));
               alert('Produit(s) ajouté(s) au panier');
          }    
          
               
     }); //fin fonction onclick ajout panier

}) //fin fonction récuperation du produit
.catch (function error()
{  
  alert('Erreur lors du chargement des fichiers');
  titles = document.querySelector(".item__img");
    h1 = document.createElement('h1');
    titles.appendChild(h1);
    h1.textContent = "Erreur lors du chargement des fichiers";
  
});
