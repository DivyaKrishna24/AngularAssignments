import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movies.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {const movieObservable = this.movieService.getMovies();
    movieObservable.subscribe((movieData: Movie[]) => {
        this.movies = movieData;
    });
  }
}
