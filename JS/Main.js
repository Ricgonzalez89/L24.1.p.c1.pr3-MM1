/*3. Conociendo la edad de varias personas, indicar la edad promedio.
|*   Ej.: Edades de las personas es : 15, 14, 19, 20, 16 y 18.
|*   Salida: La edad promedio es 17.
*/
import Cl_persona from "./Cl_persona.js";
import Cl_admin from "./Cl_admin.js";

let persona1 = new Cl_persona(15);
let persona2 = new Cl_persona(14);
let persona3 = new Cl_persona(19);
let persona4 = new Cl_persona(20);
let persona5 = new Cl_persona(16);
let persona6 = new Cl_persona(18);
let admin = new Cl_admin();

admin.procesarPersona(persona1);
admin.procesarPersona(persona2);
admin.procesarPersona(persona3);
admin.procesarPersona(persona4);
admin.procesarPersona(persona5);
admin.procesarPersona(persona6);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br>La edad promedio es ${admin.calcPromedioEdad()}.
`;