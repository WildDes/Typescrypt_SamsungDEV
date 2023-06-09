"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Telefono_1 = require("./Telefono");
var clientes = [
    new Persona_1.Persona('Desire', 'Ortega', 29, { nif: 77345697, letra: 'F' }, { dia: 23, guion: '-', mes: 7, guion2: '-', ano: 1993 }, 'Azul', 'Femenino', new Direccion_1.Direccion('Avenida Molier', 8, 1, 'A', 29004, 'Málaga', 'Málaga'), new Mail_1.Mail('electronico', 'desire27@gmail.com'), new Telefono_1.Telefono('Movil', 657483987)),
    new Persona_1.Persona('Ruben', 'Fernandez', 27, { nif: 89765142, letra: 'Q' }, { dia: 20, guion: '-', mes: 11, guion2: '-', ano: 1995 }, 'Verde', 'Masculino', new Direccion_1.Direccion('Gran Bretaña', 8, 3, 'A', 29004, 'Málaga', 'Málaga'), new Mail_1.Mail('electronico', 'rfernandez@gmail.com'), new Telefono_1.Telefono('Movil', 689765243)),
    new Persona_1.Persona('Pepe', 'Gutierrez', 23, { nif: 25432123, letra: 'M' }, { dia: 10, guion: '-', mes: 1, guion2: '-', ano: 2000 }, 'Negro', 'Masculino', new Direccion_1.Direccion('Av Juan Carlos I', 1, 4, 'C', 29740, 'Málaga', 'Málaga'), new Mail_1.Mail('electronico', 'pepeg@gmail.com'), new Telefono_1.Telefono('Movil', 654786987))
];
console.log(clientes);
function ClienteDni(dniBuscado) {
    return clientes.find(function (cliente) { return cliente.getDni() === dniBuscado; });
}
var dniBuscado = '77345697';
var clienteRequerido = ClienteDni(dniBuscado);
if (clienteRequerido) {
    clienteRequerido.setDireccion(new Direccion_1.Direccion('Quebrantatinaja', 52, 0, 'A', 29591, 'Málaga', 'Málaga'));
    clienteRequerido.setMail(new Mail_1.Mail('electrónico', 'dortega@gmail.com'));
    clienteRequerido.setTelefono(new Telefono_1.Telefono('Fijo', 952345645));
}
else {
    console.log('Cliente no encontrado');
}
console.log(clientes);
