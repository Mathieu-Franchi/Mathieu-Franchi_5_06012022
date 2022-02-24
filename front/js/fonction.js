
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



