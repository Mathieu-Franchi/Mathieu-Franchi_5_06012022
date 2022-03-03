//on récupère les données du localstorage
let basket = localStorage.getItem("basket");

let kanap = JSON.parse(basket);

function getBasket() {
    //si le localstorage est vide
    if (basket == null){
        return [];
        
    }
    //sinon on retourne sous format JSON le localstorage
    else {
        return JSON.parse(basket);
        
    }
}





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
img.src = kanap.kanapImg;
img.alt = kanap.kanapAlt;
colorP.textContent = kanap.kanapColor;
nameH2.textContent = kanap.kanapName;
deleteItemP.textContent = 'Supprimer';
quantityP.textContent = 'Qté : ' + kanap.quantity;

//récupération plus sécurisée du prix du kanap par l'api
fetch('http://localhost:3000/api/products/'+ kanap.kanapId)
//requete de type get sur l'url correspondant au produit choisis

.then (function response(res)
{    //récupérer le résultat de la requête
           return res.json(); //résultat au format json
})
.then (function(idPrice){
    priceP.textContent = idPrice.price + ' €';
})
.catch (function error(){
    priceP.textContent = "Erreur : impossible d'accéder au serveur";
    priceP.style.color = 'rgb(201, 40, 43)';
    priceP.style.fontSize = '23px';
    
})
let kanapQuantity = kanap.quantity;

//Si même ID + même couleur kanap la quantitée augmente
function sameIdColor()
{
    if(kanapId == kanapId && kanapColor == kanapColor )
    {
        kanapQuantity++;
    }
};
//bouton supprimer au click
/*deleteItemP.addEventListener("click", function(){
    removeItem(basket);
});*/
    
//fonction calcul total de la quantitée des articles dans le panier



//fonction calcul total du prix des articles dans le panier

    
    //selection des balise html
    let totalPrice = kanap.kanapPrice * kanap.quantity;
    document.getElementById('totalPrice').textContent = totalPrice;

    itemQuantity.addEventListener("change", function() {
        itemQuantity = this.value;
    });
    let totalQuantity = document.getElementById("totalQuantity").textContent = kanap.quantity;






