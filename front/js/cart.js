function getBasket() //fonction : récupérer le contenu du localstorage
{
    let getItem = localStorage.getItem("basket");
    let json = JSON.parse(getItem);
    //si le localstorage est vide ou contient un tableau vide
    
    if (getItem == null || getItem.length == 0 || json.length == 0)
    {
        
        document.getElementById("cart__items");
        noBasket = document.createElement("h2");
        cart__items.appendChild(noBasket);

        noBasket.textContent = "Votre panier est vide !";
        noBasket.setAttribute("style","display: flex; justify-content: center;")
        document.querySelector('#totalQuantity').textContent = 0;
        document.querySelector('#totalPrice').textContent = 0;
        return [];
        
    }
    //sinon on retourne sous format JSON le localstorage
    else 
    {
        
        return json;
        
    }
}

//Mon panier 
let myBasket = getBasket();

function createCards(kanap,kanapApi) //fonction : creation des elements html dynamiques
{
    //selection de la section "cart__items"
    document.getElementById("cart__items");


    //creation des elements  html dynamiques + ajouts des classes
    article = document.createElement("article");
    article.classList.add('cart__item');
    article.setAttribute("data-id", kanap.kanapId);
    article.setAttribute("data-color", kanap.kanapColor);
    article.setAttribute("data-price", kanapApi.price);

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
    itemQuantity.setAttribute('type', 'number');
    itemQuantity.value = 0;
    itemQuantity.min = 1;
    itemQuantity.max = 100;
    itemQuantity.name = 'itemQuantity';


    cartItemContentSettingsDelete = document.createElement("div")
    cartItemContentSettingsDelete.classList.add('cart__item__content__settings__delete');

    deleteItemP = document.createElement("p")
    deleteItemP.classList.add('deleteItem');

    //on injecte les balises enfant dans les balises parents
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

    //attribution dynamique sur html des valeurs des kanap du localstorage et API
    //API 
    nameH2.textContent = kanapApi.name;
    img.src = kanapApi.imageUrl;
    img.alt = kanapApi.altTxt;
    priceP.textContent = kanapApi.price + ' €';
    
    //localstorage
    colorP.textContent = kanap.kanapColor;
    itemQuantity.value = kanap.quantity;
    
    //statique
    quantityP.textContent = 'Qté : ';
    deleteItemP.textContent = 'Supprimer';
    
    //Bouton supprimer
    function removeItem(e) //fonction supprimer un produit
    {
        
        let deleteItemConfirm = confirm("Voulez-vous supprimer ce produit ?");
        if (deleteItemConfirm == true) 
        {
            //pour supprimer la div
            let dataItem = e.target.closest('.cart__item');
            dataItem.remove();
            
            //on garde tout les produits différents de l'id et la couleur correspondant du produit selectionner
            myBasket = myBasket.filter(supp => supp.kanapId != kanap.kanapId || supp.kanapColor != kanap.kanapColor);
            
            localStorage.setItem("basket",JSON.stringify(myBasket));//envoie du nouveau tableau dans localstorage
            
            // si on supprime celà modifie la quantitée donc on actualise le total quantitée et totalprice
            totalPriceQuantity();
            
            if(myBasket.length == 0)
            {
                return myBasket = getBasket();
            }
           
        }
        
    };
    deleteItemP.addEventListener("click", removeItem);
    
    //modification utilisateur
    itemQuantity.addEventListener("change", function (event) {

        let dataSetId = event.target.closest('article').dataset.id;
        let dataSetColor = event.target.closest('article').dataset.color;
        
        if (kanap.kanapId === dataSetId && kanap.kanapColor === dataSetColor) 
        {
           
            let modifyQuantity = parseInt(event.target.value);
            if (modifyQuantity === 0)
            {
                return removeItem(event);
            }
            
            parseInt(kanap.quantity);
            kanap.quantity = JSON.stringify(modifyQuantity);
            
            localStorage.setItem("basket",JSON.stringify(myBasket));//envoie du nouveau tableau
            
            
        }
        
        // si on modifie la quantitée on actualise le total quantitée et totalprice
        totalPriceQuantity();
        
    });
    
    //Calcul total price et total quantity
    function totalPriceQuantity()
    {
        let totalPriceItem = 0;
        let totalPrice = 0;
        let totalNumberItem = 0;
        myBasket.forEach(kanap => {
    
            //récupération des données des kanap par l'api
            fetch('http://localhost:3000/api/products/'+ kanap.kanapId)
            //requete de type get sur l'url correspondant aux kanaps choisis
        
        
                .then (function response(res)
                {    //récupérer le résultat de la requête
                    if(res.ok)
                    {
                        return res.json(); //résultat au format json
                    }
                    
                })
                //valeurs des kanap recupérées et appliqués grace au paramètre  
                .then (function getData(kanapApi)
                {
                   
                    totalNumberItem += parseInt(kanap.quantity);
                    totalPriceItem = parseInt(kanap.quantity) * kanapApi.price;
                    totalPrice += totalPriceItem;
                    document.querySelector('#totalQuantity').textContent = totalNumberItem;
                    document.querySelector('#totalPrice').textContent = totalPrice;
                })
            });
    }
    //appel de la fonction total prix et quantitée au chargement de la page
    totalPriceQuantity();



};//fin fonction createCards


//boucle pour chaque kanap dans localstorage
myBasket.forEach(kanap => {
    
    //récupération des données des kanap par l'api
    fetch('http://localhost:3000/api/products/'+ kanap.kanapId)
    //requete de type get sur l'url correspondant aux kanaps choisis


        .then (function response(res)
        {    //récupérer le résultat de la requête
            if(res.ok)
            {
                return res.json(); //résultat au format json
            }
            
        })
        //valeurs des kanap recupérées et appliqués grace au paramètre  
        .then (function getData(kanapApi)
        {
           
            createCards(kanap,kanapApi);
            
            
        })
        .catch (function()
        {
            document.getElementById("cart__items");
                
            noApi = document.createElement("h2");
            cart__items.appendChild(noApi);

            noApi.textContent = "Problème de connexion au serveur, veuillez réessayer ultérieurement";
            noApi.setAttribute("style", "color: black;");
        })
        
});


// ------------- FORMULAIRE--------------
//     Recuperation des éléments + regex

let firstName = document.getElementById('firstName');
let regexName = /^[a-z ,.'-]+$/i;
let errorFirstName = document.getElementById('firstNameErrorMsg');

let lastName = document.getElementById('lastName');
let errorLastName = document.getElementById('lastNameErrorMsg');

let address = document.getElementById('address');
let regexAddress = /^[a-zA-Z0-9\s,'-]*$/;
let errorAddress = document.getElementById('addressErrorMsg');

let city = document.getElementById('city');
let regexCity = /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/;
let errorCity = document.getElementById('cityErrorMsg');

let email = document.getElementById('email');
let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let errorEmail = document.getElementById('emailErrorMsg');



//Erreur en cas de non respect du regex

firstName.addEventListener('input', (e) => {
    e.preventDefault();
    if (regexName.test(firstName.value) == false) {
        errorFirstName.innerHTML = "Veuillez saisir votre prénom";
    } else {
        errorFirstName.innerHTML = "";
    }
});

lastName.addEventListener('input', (e) => {
    e.preventDefault();
    if (regexName.test(lastName.value) == false) {
        errorLastName.innerHTML = "Veuillez saisir votre nom";
    } else {
        errorLastName.innerHTML = "";
    }
});

address.addEventListener('input', (e) => {
    e.preventDefault();
    if (regexAddress.test(address.value) == false) {
        errorAddress.innerHTML = "Veuillez saisir une vraie adresse";
    } else {
        errorAddress.innerHTML = "";
    }
});

city.addEventListener('input', (e) => {
    e.preventDefault();
    if (regexCity.test(city.value) == false) {
        errorCity.innerHTML = "Veuillez saisir une vraie ville";
    } else {
        errorCity.innerHTML = "";
    }
});

email.addEventListener('input', (e) => {
    e.preventDefault();
    if (regexEmail.test(email.value) == false) {
        errorEmail.innerHTML = "Email incorrect";
    } else {
        errorEmail.innerHTML = "";
    }
});


let products = [];
// je met dans mon tableau "products" chaque kanapID de mon panier
myBasket.forEach(kanap => {

    products.push(kanap.kanapId)
    
});


//je recup l'id du bouton pour faire un event
let order = document.getElementById('order');
order.addEventListener('click', (event) => {
    event.preventDefault();
    let contact = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
    }
    //ici je met les deux tableaux dans un objet "dataClient"
    let dataClient = {
        products,
        contact
    };
    
    
    // si le client n'a pas bien rempli les champs alors on affiche un message d'erreur
    if (firstName.value === "" || lastName.value === "" || address.value === "" || city.value === "" || email.value === "") {
        alert("Vous n'avez pas bien rempli le formulaire")
        // sinon, j'envoi mon tableau     
    }
    if (myBasket.length == 0){
        alert("Veuillez ajouter un article à votre panier")
    }
     else {
        fetch('http://localhost:3000/api/products/order', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dataClient),
        })
            .then(res => {
                return res.json();
            })
            .then(confirm => {
                window.location.href = `confirmation.html?orderId=${confirm.orderId}`;
                localStorage.clear();
            })
            .catch(error => {
                return error
            })
    }
});