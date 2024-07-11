export default class Cl_admin{
    constructor(){
        this.contPersona = 0;
        this.acumEdad = 0;
    }

    procesarPersona(p){
        //Contar personas totales
        this.contPersona++;

        //Acumular edad de las personas
        this.acumEdad += p.edad;
    }

    calcPromedioEdad(){
        if (this.contPersona > 0)
            return this.acumEdad / this.contPersona;
        else
            return 0;
        
    }
}