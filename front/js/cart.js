//on récupère les données du localstorage
function getBasket() 
{
    let getItem = localStorage.getItem("basket");
    let kanap = JSON.parse(getItem);
    //si le localstorage est vide
    if (getItem == null || getItem.length == 0){
        document.querySelector("#cart__items").innerHTML = `
    <p>Votre panier est vide !</p>`
        return [];
        
    }
    //sinon on retourne sous format JSON le localstorage
    else {
        return kanap;
        
    }
}
let monPanier = getBasket();

for (k = 0; k < monPanier.length; k++) //boucle pour chaque objet dans le panier
{

    //selection de la section "cart__items"
    document.getElementById("cart__items");

    //creation des elements  html dynamiques + ajouts des classes
    article = document.createElement("article");
    article.classList.add('cart__item');

    cartItemImg = document.createElement("div");
    cartItemImg.classList.add('cart__item__img');

    img = document.createElement("img");

    cartItemContent = document.createElement("div");
    cartItemContent.classList.add('cart__item__content');

    cartItemContentDescription = document.createElement("div");
    cartItemContentDescription.classList.add('cart__item__content__description');

    nameH2 = document.createElement("h2");
    colorP = document.createElement("p");
    priceP = document.createElement("p");

    cartItemContentSettings = document.createElement("div");
    cartItemContentSettings.classList.add('cart__item__content__settings');

    cartItemContentSettingsQuantity = document.createElement("div");
    cartItemContentSettingsQuantity.classList.add('cart__item__content__settings__quantity');

    quantityP = document.createElement("p");

    itemQuantity = document.createElement("input");
    itemQuantity.classList.add('itemQuantity');
    itemQuantity.setAttribute('type','number');
    itemQuantity.value = 0;
    itemQuantity.min = 1;
    itemQuantity.max = 100;
    itemQuantity.name = 'itemQuantity';


    cartItemContentSettingsDelete = document.createElement("div")
    cartItemContentSettingsDelete.classList.add('cart__item__content__settings__delete');

    deleteItemP = document.createElement("p")
    deleteItemP.classList.add('deleteItem');

    //on injecte les elements (balises) enfant dans les balises parents
    cart__items.appendChild(article);
    article.appendChild(cartItemImg);
    cartItemImg.appendChild(img);
    article.appendChild(cartItemContent);
    cartItemContent.appendChild(cartItemContentDescription);
    cartItemContentDescription.appendChild(nameH2);
    cartItemContentDescription.appendChild(colorP);
    cartItemContentDescription.appendChild(priceP);
    cartItemContent.appendChild(cartItemContentSettings);
    cartItemContentSettings.appendChild(cartItemContentSettingsQuantity);
    cartItemContentSettingsQuantity.appendChild(quantityP);
    cartItemContentSettingsQuantity.appendChild(itemQuantity);
    cartItemContentSettings.appendChild(cartItemContentSettingsDelete);
    cartItemContentSettingsDelete.appendChild(deleteItemP);

    //attribution dynamique sur le html des valeurs des kanap du localstorage
    img.src = monPanier[k].kanapImg;
    img.alt = monPanier[k].kanapAlt;
    colorP.textContent = monPanier[k].kanapColor;
    nameH2.textContent = monPanier[k].kanapName;
    deleteItemP.textContent = 'Supprimer';
    quantityP.textContent = 'Qté : ' + monPanier[k].quantity;


    // //récupération du prix du kanap par l'api
    // function idPrice()
    // {
    //     fetch('http://localhost:3000/api/products/'+ monPanier[k].kanapId)
    //     //requete de type get sur l'url correspondant au produit choisis


    //     .then (function response(res)
    //     {    //récupérer le résultat de la requête
    //         if(res.ok)
    //         {
            
    //             return res.json(); //résultat au format json
            
    //         }
        
    //     })
    //     .then (function idPrice(data){
        
    //     let price = data.price;
    //     })


    //     .catch (function error(){
    //     priceP.textContent = "Erreur : impossible d'accéder au serveur";
    //     priceP.style.color = 'rgb(201, 40, 43)';
    //     priceP.style.fontSize = '23px';
        
    //     });
    // };
    // idPrice();


        
        
    //priceP.textContent = price + ' €';
        
        
        
    //     //prix total des articles
    //     let totalPrice = price * monPanier[k].quantity;
    //     document.getElementById('totalPrice').textContent = totalPrice;
    //     let kanapQuantity = monPanier[k].quantity;

    //     //Si même ID + même couleur kanap la quantitée augmente
    //     function sameIdColor()
    //     {
    //         if(kanapId == kanapId && kanapColor == kanapColor )
    //         {
    //             this.kanapQuantity++;
    //         }
    //     };
    //     //bouton supprimer au click
    //     deleteItemP.addEventListener("click", function(){
    //         let supp = localstorage.removeItem(basket[0]);
    //         console.log(supp);
    //     });

    //     itemQuantity.addEventListener("change", function() {
    //         itemQuantity = this.value;
    //     });
    //     let totalQuantity = document.getElementById("totalQuantity").textContent = monPanier[k].quantity;
    
    
}// FIN boucle pour chaque objet dans le panier







