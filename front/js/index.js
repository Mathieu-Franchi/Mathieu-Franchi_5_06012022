fetch('http://localhost:3000/api/products')
//requete de type get sur l'ensemble des produits 
     
.then (function response(res)
{  //récupérer le résultat de la requête
  if (res.ok)
    {
      return res.json(); //résultat au format json
    }
 
})
.catch (function error()
{  
  alert('Erreur lors du chargement des fichiers');
  titles = document.querySelector(".titles");
      h1 = document.createElement('h1');
      titles.appendChild(h1);
      h1.textContent = "Erreur lors du chargement des fichiers";
  
})
.then (function cards(products)
{ //products objet renvoyé, promise a result
  for (prod of products) //création de la boucle pour incrémenter l'ensemble de l'api
    { //création des elements 
      document.getElementById("items"); //selection de la balise html
      a = document.createElement('a');
      article = document.createElement('article');
      img = document.createElement('img');
      h3 = document.createElement('h3');
      p = document.createElement('p');
            
      //on injecte les elements (balises) enfant dans les balises parents
      items.appendChild(a);
      a.appendChild(article);
      article.appendChild(img);
      article.appendChild(h3);
      article.appendChild(p);

      //attribution dynamique sur le html des valeurs des canapés de l'api 
      a.href = "./product.html?id=" + prod._id;
      img.src = prod.imageUrl;
      h3.textContent = prod.name;
      img.alt = prod.altTxt;
      p.textContent = prod.description;
    }
});




