const tokenName = "accessToken";
const RoleCookieName = "role";

const signoutBtn = document.getElementById("signout-btn");


signoutBtn.addEventListener("click", signOut);

function getRole() {
    return getCookie(RoleCookieName);
}

function signOut() {
    eraseCookie(tokenName);
    eraseCookie(RoleCookieName);
    window.location.href = "/signin";
}

// Fonction pour vérifier si l'utilisateur est connecté
function setToken(token) {
    setCookie(tokenName, token, 7); // Stocker le token pendant 7 jours
}

function getToken() {
    return getCookie(tokenName);
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


/*
disconnected : afficher les éléments avec data-show="disconnected" et masquer les éléments avec data-show="connected"
connected : afficher les éléments avec data-show="connected" et masquer les éléments avec data-show="disconnected"

*/

function showAndHideElementsForRoles() {

    const userConnected = isConnected();
    const userRole = getRole();

    const allElementsToShowOrHide = document.querySelectorAll("[data-show]");

    allElementsToShowOrHide.forEach(element => {
        switch (element.datashow.show) {
            case "disconnected":
                if (userConnected) {
                    element.classList.add("d-none");
                }
                break;
            case "connected":
                if (!userConnected) {
                    element.classList.add("d-none");
                }
                break;
            case "admin":
                if (!userConnected || userRole !== "client") {
                    element.classList.add("d-none");
                }
                break;
            case "user":
                break;
        }
    })

}