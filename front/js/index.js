fetch('http://localhost:3000/api/products')//requete de type get sur l'ensemble des produits 
     .then (function(res)
     {  //récupérer le résultat de la requête
       if (res.ok)
       {
          return res.json();//résultat au format json
       }
     })
     .then(function(products)
    {//products objet renvoyé, promise a result
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

            // On inject le a dans le targetContainer

    //fin boucle
    console.log(products._id);
    // a.innerHTML =(value);

    a.href = "./product.html?id=" + prod._id;
    img.src= prod.imageUrl;
    h3.innerHTML = prod.name;
    img.alt = prod.altTxt;
    p.innerHTML = prod.description;
  }

})


