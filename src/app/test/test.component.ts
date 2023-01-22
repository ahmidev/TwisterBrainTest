import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
interface Question {
  category: string,
  type: string,
  difficulty:string,
  question:string,
  correct_answer:string,
  incorrect_answers:string[],
}
interface Test {
  response_code:[];
  results:Question[]
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public reponses?:any;
  public bonneRep:any;
  constructor(private router :Router, private httpService : HttpClient){}

  test(){
    this.httpService.get<Test>('https://opentdb.com/api.php?amount=1&category=21&difficulty=easy&type=multiple').subscribe((data)=>{
      console.log(data.results)
       this.reponses = data.results;
      console.log(this.reponses[0].category);
       this.bonneRep = this.reponses[0].question;
});
   
  }
  test2(){
    this.httpService.get<any>(`https://api.deepl.com/v2/translate?auth_key=b434cde3-ffa2-55e4-833f-db1afbb7fa33&target_lang=fr&text=${this.bonneRep}`).subscribe((data2)=>{
      console.log(data2.translations[0].text)
      //  this.reponses = data.results;
      // console.log(this.reponses[0].category);
})
  }
}
