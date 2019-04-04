export class Piloto {

    //atributos
    private _nombre:string;
    private _apellidos:string;
    private _escuderia:string;
    private _avatar:string;

    //propiedades
    get nombre():string{
        return this._nombre;
    }

    get apellidos():string{
        return this._apellidos;
    }

    get escuderia():string{
        return this._escuderia;
    }

    get avatar():string{
        return this._avatar;
    }

    get nombreCompleto():string {
        return `${this._nombre} ${this._apellidos}`;
    }

    set nombre(value:string){
        this._nombre = value;
    }

    set apellidos(value:string){
        this._apellidos = value;
    }

    set escuderia(value:string){
        this._escuderia= value;
    }

    set avatar(value:string){
        this._avatar= value;
    }

    //metodos
    constructor(nombre:string, apellidos:string, escuderia:string, avatar:string){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._escuderia = escuderia;
        this._avatar = avatar;
    }
}