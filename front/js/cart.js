//on récupère les données du localstorage

//getBasket();
let basket = localStorage.getItem("basket");
let kanap = JSON.parse(basket);


//selection de la section "cart__items"
document.getElementById("cart__items");
//creation des elements html dynamiques
article = document.createElement("article");
cartItemImg = document.createElement("cartItemImg");
img = document.createElement("img");
cartItemContent = document.createElement("cartItemContent");
cartItemContentDescription = document.createElement("cartItemContentDescription");
nameH2 = document.createElement("nameh2");
colorP = document.createElement("colorP");
priceP = document.createElement("priceP");
cartItemContentSettings = document.createElement("cartItemContentSettings");
cartItemContentSettingsQuantity = document.createElement("cartItemContentSettingsQuantity");
quantityP = document.createElement("quantityP");
itemQuantity = document.createElement("itemQuantity");
cartItemContentSettingsDelete = document.createElement("cartItemContentSettingsDelete")
deleteItemP = document.createElement("deleteItemP")

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


