import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { Question, QuestionService } from '../question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
    
    
  public questions:Question[]=[];
  public reponseArray:string[] | number[] =[];
  public correctAnswer:any;
  public clic = this.questionService.ngOnInit();
  public subscription?:Subscription;


 constructor(private questionService :QuestionService, private category:CategoryService){  this.subscription = this.questionService.question?.subscribe((questi:Question[])=>{
  this.questions = questi;
 
}) }
  // this.questions =  this.questionService.question?.value
  // console.log(this.questionService.question?.value)
  //  console.log('this.questions')}
    
 ngOnInit(): void {
  console.log(this.category.randomCategory(this.category.category))
  this.subscription = this.questionService.question?.subscribe((questi:Question[])=>{
    this.questions = questi;
    console.log(questi)
    this.correctAnswer = questi[0].correct_answer;
    this.reponseArray = questi[0].incorrect_answers;
    this.reponseArray.push(this.correctAnswer);
    console.log(this.reponseArray);
    this.reponseArray = this.randomiseAnswers(this.reponseArray)
    console.log(this.reponseArray);

    this.questionService.ngOnInit()
  })
   
  }
  randomiseAnswers(array:string[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  console.log(currentIndex);
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
