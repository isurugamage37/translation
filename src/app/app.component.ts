import { Component, OnInit } from '@angular/core';
import { TranslatorServiceService } from './services/translator.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Translation';
  public transLan: string;
  public sourceLan: string;
  public transText: string = '';
  public translatedText: string | undefined;
  public completeText: string = '';

  constructor(private translatorServiceService: TranslatorServiceService) {
    this.sourceLan = "en";
    this.transLan = "de";
  }

  ngOnInit(): void {
  }

  onKeyPress(event: KeyboardEvent) {
    this.completeText = this.transText + event.key;
    this.translatorServiceService.getQuizQuestions(this.completeText, this.sourceLan, this.transLan)
      .subscribe(response => {
        this.translatedText = response.responseData.translatedText;
      });
  }

  rbtnClick() {
    this.transText = '';
    this.translatedText = '';
    this.completeText = '';
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace') {
      if (this.transText.length == 1) {
        this.transText = '';
        this.translatedText = '';
        this.completeText = '';
      } else if(this.transText.length > 1 ) {
        this.translatorServiceService.getQuizQuestions(this.transText, this.sourceLan, this.transLan)
        .subscribe(response => {
          this.translatedText = response.responseData.translatedText;
        });
      }
    }
  }


}
