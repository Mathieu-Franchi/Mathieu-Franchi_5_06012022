function saveBasket(basket){
    localStorage.setItem("basket", JSON.stringify(basket));
}


function getBasket() {
    //si le localstorage est vide
    let basket = localStorage.getItem("basket"); 
    if (basket == null){
        return [];
        
    }
    //sinon on retourne sous format JSON le localstorage
    else {
        return JSON.parse(basket);
        
    }
    
}
function addBasket(product){
    let basket = getBasket();
    basket.push(product);
    saveBasket(basket);
}



