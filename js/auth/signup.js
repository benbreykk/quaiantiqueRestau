// Implémentation JS pour la page d'inscription
const inputNom = document.getElementById('NomInput');
const inputPrenom = document.getElementById('PrenomInput');
const inputEmail = document.getElementById('EmailInput');
const inputPassword = document.getElementById('PasswordInput');
const inputConfirmPassword = document.getElementById('ValidatePasswordInput');
const validationButton = document.getElementById('btn-validation');

inputNom.addEventListener('keyup', validateForm);
inputPrenom.addEventListener('keyup', validateForm);
inputEmail.addEventListener('keyup', validateForm);

function validateForm() {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const emailOk = validateEmail(inputEmail);
    const passwordOk = validatePassword(inputPassword);
    const confirmPasswordOk = validateConfirmPassword(inputPassword, inputConfirmPassword);

    if (nomOk && prenomOk && emailOk, passwordOk && confirmPasswordOk) {
        validationButton.disabled = false;
    } else {
        validationButton.disabled = true;
    }
}


function validateConfirmPassword(inputPwd, inputConfirmPwd) {
    if (inputPwd.value === inputConfirmPwd.value) {
        // Si les mots de passe sont identiques, on valide
        inputConfirmPwd.classList.add('is-valid');
        inputConfirmPwd.classList.remove('is-invalid');
        return true;
    }
    else {
        // Sinon, on affiche une erreur
        inputConfirmPwd.classList.add('is-invalid');
        inputConfirmPwd.classList.remove('is-valid');
        return false;
    }

}

function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    passwordUser = input.value;
    if (passwordUser.match(passwordRegex)) {
        // Si l'email est valide, on le valide
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }
    else {
        // Sinon, on affiche une erreur
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
    }
}

function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(emailRegex)) {
        // Si l'email est valide, on le valide
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }
    else {
        // Sinon, on affiche une erreur
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
    }
}

function validateRequired(input) {
    if (input.value != '') {
        // Si le champ n'est pas vide, on le valide
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }
    else {
        // Sinon, on affiche une erreur
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        return false;
    }
}

