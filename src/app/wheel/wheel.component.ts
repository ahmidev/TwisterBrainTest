import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent {
  constructor(private router :Router){}
}
