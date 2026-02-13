const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const submitBtn = document.getElementById("btnSignin");

submitBtn.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Appel API pour vérifier les identifiants en BDD

    if (mailInput.value === "test@mail.com" && passwordInput.value === "test") {
        alert("Connexion réussie !");
        const token = "zdadazzaddz"; // Simuler un token d'authentification
        setToken(token);
        // Stocker le token en tant que cookie
        setCookie(EoleCookieName, "admin", 7); // Simuler un rôle d'utilisateur

        window.location.href = "/account";
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

function isConnected() {
    if (getToken() === null || getToken() === undefined) {
        return false;
    }
    else {
        return true;
    }
}

if (isConnected()) {
    window.location.href = "/account";
} else {
    console.log("pas connecté");
}