import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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
