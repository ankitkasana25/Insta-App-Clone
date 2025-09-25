import { makeAutoObservable } from "mobx";

export class Count {

    count : number = 1;

    constructor() {
      makeAutoObservable(this)
    }


    
}