import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Snippet } from '../../interfaces/snippets';
import { SnippetsService } from '../../services/snippets/snippets.service';

@Component({
  selector: 'app-snippets',
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.css']
})
export class SnippetsComponent implements OnInit {

  public snippets: Snippet [] = [];
  public snippet$: Observable<any> = new Observable<any>();
  public snippetId: number = -1
  constructor(
    private snippetsService: SnippetsService, 
    private authService: AuthService,
    private router: Router ) { 
  }

  public ngOnInit(): void {
    this.getSnippets()
  }

  public getSnippets() {
   this.snippetsService.getSnippets().subscribe((response)=>{
      this.snippets = (response as unknown as any).results;
    });
  }

  public onLogIn() {
    this.router.navigate(['/login']);
  }

  public onNew() {
    this.router.navigate(['/snippets/new']);
  }

  public onSnippetClick(e: any){
    this.router.navigate(['/snippets', e.id]);
  }
}
