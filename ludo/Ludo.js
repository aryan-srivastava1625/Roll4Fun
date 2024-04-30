import { UI } from './UI.js'
export class Ludo{
    currentPositions={
        P1:[],
        P2:[]
    }

    _diceValue;
    get diceValue(){
        return this._diceValue;
    }
    set diceValue(value){
        this._diceValue=value;

        UI.setDiceValue(value);
    }

    constructor(){
        console.log("Dive into the world of Ludo!");
        this.diceValue=4;
        
    }
}

