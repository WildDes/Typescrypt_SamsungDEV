"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(clase, email) {
        this.clase = clase;
        this.email = email;
    }
    Mail.prototype.getClase = function () {
        return this.clase;
    };
    Mail.prototype.getEmail = function () {
        return this.email;
    };
    return Mail;
}());
exports.Mail = Mail;
