import {Component} from '@angular/core';
import {Pipe, PipeTransform}  from '@angular/core';
import {FilterInfoClass} from './filter.pipe';
import {Card} from './card';

const CARDS: Card[] = [
    { id: 1, header: 'Swim', text: 'new swimming pool',category: 'Sport' },
    { id: 2, header: 'Ride', text: 'it is time to ride',category: 'Sport' },
    { id: 3, header: 'Bicycle', text: 'new bicycle allowed',category: 'Animals' },
    { id: 4, header: 'Running competition', text: 'coming soon',category: 'Transport' }
];

@Component({
    moduleId: module.id,
    selector: 'info-cards',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    pipes: [FilterInfoClass]
})

export class AppComponent {
    public cards = CARDS;
    filterText='';
}