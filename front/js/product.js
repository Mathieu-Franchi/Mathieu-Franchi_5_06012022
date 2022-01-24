const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

fetch('http://localhost:3000/api/products/'+ id) //requete de type get sur l'ensemble des produits 

.then (function(res)
     {  //récupérer le résultat de la requête
       
       
          return res.json();//résultat au format json
       
     })
     .then(function(product)
    {//products objet renvoyé, promise a result
      console.log(product.price)
    }
            );