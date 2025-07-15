import { AfterViewInit, Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  typed: Typed | undefined;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const options = {
      strings: [
        'a software engineer',
        'a web developer',
        'a frontend developer',
      ],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      loop: true, // loop the animation
    };

    this.typed = new Typed('.typing-text', options);
  }
}
