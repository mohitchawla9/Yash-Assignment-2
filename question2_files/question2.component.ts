import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'question2 ',
    template: `You entered : {{hobbyInput}}`
})
export class Question2Component implements OnChanges{
    @Input() hobbyInput : string;

    ngOnChanges(changes : SimpleChanges){
        for (let hobbyName in changes){
            let change = changes[hobbyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(hobbyName + ': currentValue = ' + current + ', previpusValue = ' + previous)
        }
    }
}