import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SnippetsService } from '../../services/snippets/snippets.service';
import { Snippet } from '../../interfaces/snippets';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-snippet-edit',
  templateUrl: './snippet-edit.component.html',
  styleUrls: ['./snippet-edit.component.css']
})
export class SnippetEditComponent implements OnInit {
  public isEditMode: boolean = false;
  public languages: any = [];
  public styles: any = [];

  public snippetId: number = 0;

  public snippet: Snippet = {};

  public snippetControl = new FormGroup({
    id: new FormControl({value: '', disabled: true}),
    code: new FormControl('',[Validators.required]),
    language: new FormControl('',[Validators.required]),
    style: new FormControl('',[Validators.required]),
    title: new FormControl('',[Validators.required]),
    // owner: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private snippetsService:SnippetsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.snippetId = Number(params.get('id'));
      this.isEditMode = this.snippetId > 0;
      
      this.snippetsService.getLanguageChoices().subscribe((res)=> {
        console.log({res})
        this.languages = res;
        });
        this.snippetsService.getStyleChoices().subscribe((res)=> {
          console.log({res})
          this.styles = res;
          });
      if (this.isEditMode) {
        this.snippetsService.getSnippetDetails(this.snippetId).subscribe((res)=> {
          this.snippet = res;
          this.snippetControl.setValue({
            id: res.id,
            code: res.code || '',
            language: res.language || '',
            style: res.style || '',
            title: res.title || '',
            // owner: res.owner || '',
          });
        })
      }
    })
  }

  onSave(){
    console.log({snippetControl: this.snippetControl.value})
    if (this.isEditMode) {
      this.snippetsService.updateSnippet({id: this.snippet.id, ...this.snippetControl.value}).subscribe((res)=>{
        console.log({res})
        this.router.navigate(['/snippets']);
      });
    } else {
      delete this.snippetControl.value.owner
      this.snippetsService.createSnippet(this.snippetControl.value).subscribe((res)=>{
        console.log({res})
        this.router.navigate(['/snippets']);
      });
    }
  }

}
