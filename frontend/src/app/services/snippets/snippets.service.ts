import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Snippet } from '../../interfaces/snippets';
import { Observable } from 'rxjs';
const httpOptions= {
  // withCredentials: true,
  // headers: new HttpHeaders({
  //   'Content-Type': 'applications/json'
  // })
}
@Injectable({
  providedIn: 'root'
})
export class SnippetsService {
  
  constructor(private http: HttpClient) { }

  public getSnippets(): Observable<Object> {
    return this.http.get('http://localhost:8000/snippets', httpOptions);
  }

  public getSnippetDetails(snippetId: number): Observable<any> {
    return this.http.get(`http://localhost:8000/snippets/${snippetId}/`, httpOptions);
  }

  public createSnippet(snippet: Snippet): Observable<any> {
    return this.http.post(`http://localhost:8000/snippets/`, snippet, httpOptions);
  }

  public updateSnippet(snippet: Snippet): Observable<any> {
    return this.http.put(`http://localhost:8000/snippets/${snippet.id}/`, snippet, httpOptions);
  }
  
  public deleteSnippet(snippetId: string): Observable<any> {
    return this.http.delete(`http://localhost:8000/snippets/${snippetId}/`, httpOptions);
  }

  public getStyleChoices(): Observable<any> {
    return this.http.get(`http://localhost:8000/styles/`, httpOptions);
  }

  public getLanguageChoices(): Observable<any> {
    return this.http.get(`http://localhost:8000/languages/`, httpOptions);
  }
}
