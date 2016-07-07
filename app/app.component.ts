import {Component} from '@angular/core';


export class Card {
    id:number;
    header:string;
    text:string;
}
const CARDS:Card[] = [
    {id: 1, header: 'Swim', text: 'new swimming pool'}
];

@Component({
    selector: 'info-cards',
    template: `<h1>My Angular 2 App</h1>
          <h2></h2>`
})

export class AppComponent {
}