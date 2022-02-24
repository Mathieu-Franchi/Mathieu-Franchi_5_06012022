//on récupère les données du localstorage
let basket = localStorage.getItem("basket");
let kanap = JSON.parse(basket);
getBasket();

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

//attribution dynamique sur le html des valeurs des canapés du localstorage
img.src = kanap.kanapImg;
img.alt = kanap.kanapAlt;
priceP.textContent = kanap.kanapPrice + ' €';
colorP.textContent = kanap.kanapColor;
nameH2.textContent = kanap.kanapName;
deleteItemP.textContent = 'Supprimer';
quantityP.textContent = 'Qté : ' + kanap.quantity;


//bouton supprimer
deleteItemP.addEventListener("click", function(){
    function removeFromBasket(productId, productColor){
        let monpanier = getBasket();
        
        for (i = 0; i < monpanier.length; i++) 
          {
            if(productColor == monpanier[i].kanapColor && productId ==  monpanier[i].kanapId  )
            {//si  couleurs et id  sont identiques supression	
                monpanier.splice(i,1);
            }
        }	
     
        saveBasket(monpanier);
    }
})
//fonction calcul total de la quantitée des articles dans le panier
function totalQ(){

};


//fonction calcul total du prix des articles dans le panier

    
    //selection des balise html
    let totalPrice = kanap.kanapPrice * kanap.quantity;
    document.getElementById('totalPrice').textContent = totalPrice;

    itemQuantity.addEventListener("change", function() {
        itemQuantity = this.value;
    });
    let totalQuantity = document.getElementById("totalQuantity").textContent = kanap.quantity;








