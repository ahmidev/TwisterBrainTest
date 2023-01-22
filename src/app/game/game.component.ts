import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public reponse?:any;
  constructor(private router :Router, private httpService : HttpClient){}

  ngOnInit(): void {
    this.httpService.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple').subscribe((data)=>{
      console.log(data)
       this.reponse = data;
      console.log(this.reponse);
      
    });
    
    
  }
}
