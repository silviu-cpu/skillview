import { AfterViewInit, Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  typed: Typed | undefined;
 

  ngAfterViewInit(): void {
    const options = {
      strings: ['a software engineer' , 'a web developer' , 'a frontend developer'],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      loop: true // loop the animation
    };

    this.typed = new Typed('.typing-text', options);
  }

  downloadCV() {
    const pdfUrl = '../assets/cv.pdf';
    const pdfName = 'Silviu-Barbu-CV.pdf'; 

    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, pdfName);
      })
      .catch((error) => {
        console.error('Error downloading CV:', error);
      });
  }
}
