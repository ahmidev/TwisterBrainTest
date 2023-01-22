import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent {
  constructor(private router :Router){}
}
