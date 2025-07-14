import { OnInit } from "@angular/core";

export class Counter implements OnInit {

    constructor(public value: number) {
        this.value = 0;
    }

    ngOnInit(): void {
    }

}