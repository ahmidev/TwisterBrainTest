import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public category: number[]=[27,21,22,23];

  randomCategory(number:number[]){
    let index = Math.floor(Math.random() * number.length)
    console.log(index);
    
    return new BehaviorSubject( number[index]);
  }
  constructor() {

   }
}
