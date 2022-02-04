const dataApi = fetch('http://localhost:3000/api/products');
//requete de type get sur l'ensemble des produits 
     
dataApi.then (function(res)
{  //récupérer le résultat de la requête
    {
      return res.json(); //résultat au format json
    }
})

.then(function(products)
{ //products objet renvoyé, promise a result
  for (prod of products)
    {
      const section = document.getElementById("items");
      a = document.createElement('a');
      article = document.createElement('article');
            article.classList.add("productCard");
      img = document.createElement('img');
            img.classList.add('productImage');
      h3 = document.createElement('h3');
            h3.classList.add("productName");
      p = document.createElement('p');
            p.classList.add("productDescription");

            
            items.appendChild(a);
            a.appendChild(article);
            article.appendChild(img);
            article.appendChild(h3);
            article.appendChild(p);

            
            
            a.href = "./product.html?id=" + prod._id;
            img.src = prod.imageUrl;
            h3.innerHTML = prod.name;
            img.alt = prod.altTxt;
            p.innerHTML = prod.description;
    }

})



