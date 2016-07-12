import{Pipe, PipeTransform}  from '@angular/core';
import {Card} from './card';

@Pipe({name:'filterCategories'})

export class FilterInfoClass implements PipeTransform{
    transform(allCards: Card[], filter: string): Card[]{
        if(filter == ''){
            return allCards
        }
        else {
            return allCards.filter(card => card.header.toLocaleUpperCase().indexOf(filter.toLocaleUpperCase()) > -1)
        }
    }
}