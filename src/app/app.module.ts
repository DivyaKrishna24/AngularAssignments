import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { MoviesComponent } from './movies/movies/movies.component';
import { SeatsComponent } from './movies/seats/seats.component';

const routes: Routes = [
  {
      path: '',
      component: MoviesComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
      path: 'movies/:id',
      component: SeatsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MoviesModule,RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
