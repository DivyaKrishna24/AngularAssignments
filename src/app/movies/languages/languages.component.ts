import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input() movie: any;
  constructor(protected router:Router) { }

  ngOnInit(): void {
  }

  goToSeatsPage() {
    this.router.navigate(['/movies/'+ this.movie.id]);
  }
}
