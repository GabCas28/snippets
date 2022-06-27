import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnippetsService } from '../../services/snippets/snippets.service';
import { Snippet } from '../../interfaces/snippets';

@Component({
  selector: 'app-snippet-detail',
  templateUrl: './snippet-detail.component.html',
  styleUrls: ['./snippet-detail.component.css']
})
export class SnippetDetailComponent implements OnInit {
  public snippetId: number = 0;
  public snippet: Snippet = {};
  constructor(private route: ActivatedRoute, private snippetsService:SnippetsService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.snippetId = Number(params.get('id'));
      this.snippetsService.getSnippetDetails(this.snippetId).subscribe((res)=> {
        this.snippet = res;
      })
    })
  }

  onDelete() {
    this.snippetsService.deleteSnippet(String(this.snippetId)).subscribe((res) => {
      console.log({res});
      this.router.navigate(['/snippets']);
    });
  }
}
