//je récupère en string le contenu de l'url
const queryString = window.location.search;
//je parse le contenu de l'url
const urlParams = new URLSearchParams(queryString);
//on récupère l'orderId dans l'url trouvé grâce à URLSearchParams
const orderId = urlParams.get('orderId');
document.getElementById("orderId").textContent = orderId;
