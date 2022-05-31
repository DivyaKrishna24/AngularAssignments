import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { LanguagesComponent } from './languages/languages.component';
import { MoviesComponent } from './movies/movies.component';
import { SeatsComponent } from './seats/seats.component';



@NgModule({   
  declarations: [MoviesListComponent, LanguagesComponent, MoviesComponent, SeatsComponent],
  imports: [
    CommonModule
  ]
})
export class MoviesModule {}
