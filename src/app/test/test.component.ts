import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable, Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { Question, QuestionService } from '../question.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

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
//   test2(){
//     this.httpService.get<any>(`https://api.deepl.com/v2/translate?auth_key=b434cde3-ffa2-55e4-833f-db1afbb7fa33&target_lang=fr&text=${this.bonneRep}`).subscribe((data2)=>{
//       console.log(data2.translations[0].text)
//       //  this.reponses = data.results;
//       // console.log(this.reponses[0].category);
// })
//   }

