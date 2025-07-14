import { OnInit } from "@angular/core";

export class Counter implements OnInit {

    value:number;

    constructor(public counter?: number) {
        this.value = counter || 0;
    }

    ngOnInit(): void {
    }

}