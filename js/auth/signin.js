const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const submitBtn = document.getElementById("btnSignin");

submitBtn.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Appel API pour vérifier les identifiants en BDD

    if (mailInput.value === "test@mail.com" && passwordInput.value === "test") {
        alert("Connexion réussie !");

        // récupérer le vrai token
        const token = "zddqdzqdqzdzqd"

        // Stocker le token en tant que cookie
        setToken(token);

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