import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslatorServiceService {

  constructor(private http: HttpClient) { }

  public getQuizQuestions(text: string, sourceLan: string, transLan: string): Observable<any> {

    const apiUrl = 'https://api.mymemory.translated.net/get?q=' + text + '&langpair=' + sourceLan + '|' + transLan;

    return this.http.get(apiUrl);
  }

}