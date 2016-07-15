import{Pipe, PipeTransform}  from '@angular/core';
import {Card} from './card';

@Pipe({name:'filterByCategories'})

export class FilterCategoriesClass implements PipeTransform{
    transform(allCards: Card[], filter: string): Card[]{
        if(filter == ''){
            return allCards
        }
        else {
            return allCards.filter(card => card.category.toLocaleUpperCase().indexOf(filter.toLocaleUpperCase()) > -1)
        }
    }
}