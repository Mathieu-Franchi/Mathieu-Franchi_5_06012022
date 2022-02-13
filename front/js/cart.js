//on récupère les données du localstorage

//getBasket();
let basket = localStorage.getItem("basket");
let kanap = JSON.parse(basket);


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

//attribution des produits du localstorage
img.src = kanap.kanapImg;
priceP.textContent = kanap.kanapPrice;
colorP.textContent = kanap.kanapColor;







