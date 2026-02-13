export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.authorize = authorize;
    }
}

/*
[] => toutes les routes sont accessibles
["disconnected"] => les personnes non connectées peuvent accéder à la route
["admin"] => les personnes avec le rôle admin peuvent accéder à la route
["client"] => les personnes avec le rôle client peuvent accéder à la route
["client"]
*/