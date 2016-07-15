import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Card }    from './card';
import {CATEGORIES} from './mock-categories';
import {CARDS} from './mock-cards';

@Component({
  selector: 'new-card-form',
  templateUrl: 'app/new-card-form.component.html'
})

export class CardFormComponent {
  categoriesFields = CATEGORIES;
  model = new Card(1,'Swim','new swimming pool',this.categoriesFields[0]);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}