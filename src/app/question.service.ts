import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CategoryService } from './category.service';


export interface Question {
  category: string,
  type: string,
  difficulty:string,
  question:string,
  correct_answer:string,
  incorrect_answers:string[],
}
 export interface Test {
  response_code:[];
  results:Question[]
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService implements OnInit {
  public question?:BehaviorSubject<Question[]> ;
  public bonneRep:any;
  public subscription?:Subscription;
  public cat:number=0;
  public urlApi:string = `https://opentdb.com/api.php?amount=1&category=${this.cat}&difficulty=easy&type=multiple`;
  
  constructor(private router :Router, private httpService : HttpClient, private category:CategoryService){
    
  }

 ngOnInit(): void {
  console.log(this.category.randomCategory(this.category.category));
  this.subscription = this.category.randomCategory(this.category.category).subscribe((questi:number)=>{
    this.cat = questi;})
  this.httpService.get<Test>(this.urlApi).subscribe((data)=>{
      console.log(data.results)
       this.question =new BehaviorSubject( data.results);
      console.log(this.question.value);
      
  });
 }
    

}
