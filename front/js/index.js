fetch('http://localhost:3000/api/products')//requete de type get sur l'ensemble des produits 
     .then (function(res){  //récupérer le résultat de la requête
       if (res.ok){
          return res.json();//résultat au format json
       }
     })
     .then(function(products)
    {//products objet renvoyé, promise a result

        for (let prod of products) //la parcourir pour insérer chaque élément/produit dans la page d’accueil
		   {


            const section = document.getElementById('items');

            let anchor = document.createElement('a');
            anchor.href = "./product.html?id=" + prod._id;
            anchor.text = "salut";
            section.appendChild(anchor);

                    
            }

    })
