export default class Cl_persona{
    constructor(e){
        this.edad = +e;
    }

    set edad(e){
        this._edad = +e;
    }

    get edad(){
        return this._edad;
    }
}