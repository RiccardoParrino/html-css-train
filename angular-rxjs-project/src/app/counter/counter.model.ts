import { OnInit } from "@angular/core";

export class Counter implements OnInit {

    value:number;

    constructor() {
        this.value = 0;
    }

    ngOnInit(): void {
    }

}