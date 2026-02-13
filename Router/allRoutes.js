import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", []),
    new Route("/signin", "Se connecter", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "S'inscrire", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"]),
    new Route("/forgotpassword", "Modifier le mot de passe", "/pages/auth/forgotpassword.html", ["client", "admin"]),
    new Route("/reservations", "Réservations", "/pages/reserve/allResa.html", ["client"]),
    new Route("/reserver", "Nouvelle réservation", "/pages/reserve/reserver.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";