function getBasket(){
    let basket = localStorage.getItem("basket");
    if (basket == null){
        return [];
    }
    else {
        return JSON.parse(basket);
    }
    
}

// On définit la fonction

function afficherDeuxValeurs(valeur1, valeur2) {
          console.log('Première valeur:' + valeur1);
          console.log('Deuxième valeur:' + valeur2);
    }
    
    // On exécute la fonction
    afficherDeuxValeurs(12, 'Bonjour');
    
    // On obtient dans la console
    // > Première valeur:12 
    // > Deuxième valeur:Bonjour 