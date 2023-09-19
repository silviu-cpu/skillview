import { Component, AfterViewInit, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
  typed: Typed | undefined;

  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    const options = {
      strings: ['Silviu' , 'Skillview' ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      loop: true // loop the animation
    };

    this.typed = new Typed('.typing-text', options);
  }
}
