//on récupère les données du localstorage
function getBasket(){
    return localStorage.getItem("basket",JSON.stringify(basket));
}
//selection de la secion "cart__items"
document.getElementById("cart__items");
//creation des elements html dynamiques
article = document.getElementsByClassName("cart__item");
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



