import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Snippet } from '../../interfaces/snippets';

@Component({
  selector: 'app-snippet-icon',
  templateUrl: './snippet-icon.component.html',
  styleUrls: ['./snippet-icon.component.css']
})
export class SnippetIconComponent implements OnInit {

  @Input()
  public snippet: Snippet = {};
  
  @Output()
  public snippetClick: EventEmitter<any> = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSnippetClick() {
    console.log('Clicked on ', this.snippet.id)
    this.snippetClick.emit({ id: this.snippet.id})
  }
}
