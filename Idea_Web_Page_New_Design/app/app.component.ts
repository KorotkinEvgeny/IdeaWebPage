import {Component} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';
import {Pipe, PipeTransform}  from '@angular/core';
import {FilterInfoClass} from './filter.pipe';
import {FilterCategoriesClass} from './filter-categories.pipes';
import {CATEGORIES} from './mock-categories';
import {CARDS} from './mock-cards';
import {CardFormComponent} from './new-card-form.component';


@Component({
    moduleId: module.id,
    selector: 'info-cards',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [[PolymerElement('app-drawer-layout'),
        PolymerElement('app-drawer'),
        PolymerElement('app-header-layout'),
        PolymerElement('app-toolbar'),
        PolymerElement('app-header'),
        CardFormComponent
    ]],
    pipes: [FilterInfoClass, FilterCategoriesClass]
})

export class AppComponent {
    public cards = CARDS;
    filterText = '';
    buttonsCategories = CATEGORIES;
    currentCategory = '';

    onClick(category: string) {
        if (category == this.buttonsCategories[0]) {
            this.currentCategory = '';
        } else {
            this.currentCategory = category;
        }
    }
}