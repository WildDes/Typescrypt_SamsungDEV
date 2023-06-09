import { Persona } from "./Persona";
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono }  from "./Telefono";

const clientes: Persona[] = [
  new Persona(
    'Desire',
    'Ortega',
    29,
    { nif: 77345697, letra: 'F' },
    { dia: 23, guion: '-', mes: 7, guion2: '-', ano: 1993 },
    'Azul',
    'Femenino',
    new Direccion(
      'Avenida Molier',
      8,
      1,
      'A',
      29004,
      'Málaga',
      'Málaga'
    ),
    new Mail(
      'electronico',
      'desire27@gmail.com'
    ),
    new Telefono(
      'Movil',
      657483987
    )
  ),
  new Persona(
    'Ruben',
    'Fernandez',
    27,
    { nif: 89765142, letra: 'Q' },
    { dia: 20, guion: '-', mes: 11, guion2: '-', ano: 1995 },
    'Verde',
    'Masculino',
    new Direccion(
      'Gran Bretaña',
      8,
      3,
      'A',
      29004,
      'Málaga',
      'Malaga'
    ),
    new Mail(
      'electronico',
      'rfernandez@gmail.com'
    ),
    new Telefono(
      'Movil',
      689765243
    )
  ),
  new Persona(
    'Pepe',
    'Gutierrez',
    23,
    { nif: 25432123, letra: 'M' },
    { dia: 10, guion: '-', mes: 1, guion2: '-', ano: 2000 },
    'Negro',
    'Masculino',
    new Direccion(
      'Av Juan Carlos I',
      1,
      4,
      'C',
      29740,
      'Málaga',
      'Malaga'
    ),
    new Mail(
      'electronico',
      'pepeg@gmail.com'
    ),
    new Telefono(
      'Movil',
      654786987
    )
  )
];

console.log(clientes);

function ClienteDni(dniBuscado: string) {
  return clientes.find((cliente) => cliente.getDni() === dniBuscado);
}

const dniBuscado = '77345697';
const clienteRequerido = ClienteDni(dniBuscado);

if (clienteRequerido) {
  clienteRequerido.setDireccion(
    new Direccion(
      'Quebrantatinaja',
      52,
      0,
      'A',
      29591,
      'Málaga',
      'Málaga'
    )
  );
  clienteRequerido.setMail(
    new Mail(
      'electrónico',
      'dortega@gmail.com'
    )
  );
  clienteRequerido.setTelefono(
    new Telefono(
      'Fijo',
      952345645
    )
  );
} else {
  console.log('Cliente no encontrado');
}

console.log(clientes);
