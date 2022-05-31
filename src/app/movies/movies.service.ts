import { Injectable } from '@angular/core';
import { Movie } from './movies.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [{
    id: 1,
    name: 'The Avengers',
    dimension: '2D',
    genre: 'Action',
    language: 'English',
    time : new Date("Fri Dec 08 2022 12:30:00")
},
{
  id: 2,
  name: 'The Black Panther',
  dimension: '2D',
  genre: 'Action',
  language: 'English',
  time : new Date("Fri Dec 08 2022 15:30:00")
},
{
  id: 3,
  name: 'The Uri Attack',
  dimension: '2D',
  genre: 'Action',
  language: 'Hindi',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 4,
  name: 'Bhool Bhoolaya',
  dimension: '2D',
  genre: 'Horror',
  language: 'Hindi',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 4,
  name: 'Kaathuvakathula rendu kaadal',
  dimension: '2D',
  genre: 'Comedy',
  language: 'Tamil',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 5,
  name: 'Charlie',
  dimension: '2D',
  genre: 'Action',
  language: 'Kannada',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 6,
  name: 'Dont Breathe',
  dimension: '2D',
  genre: 'Suspence/Thriller',
  language: 'English',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 7,
  name: 'Hangover 2',
  dimension: '2D',
  genre: 'Comedy',
  language: 'English',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 8,
  name: 'Doctor Strange 2',
  dimension: '3D',
  genre: 'Action',
  language: 'English',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 9,
  name: 'The Attack',
  dimension: '2D',
  genre: 'Action',
  language: 'Hindi',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 10,
  name: 'Deep Blue Sea',
  dimension: '3D',
  genre: 'Action',
  language: 'English',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 11,
  name: 'Doctor',
  dimension: '3D',
  genre: 'Comedy thriller',
  language: 'Tamil',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 12,
  name: 'Jurassic World : Dominion ',
  dimension: '3D',
  genre: 'Adventure',
  language: 'English',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 13,
  name: 'KGF-2',
  dimension: '2D',
  genre: 'Drama',
  language: 'Kannada',
  time : new Date("Fri Dec 08 2022 18:30:00")
},
{
  id: 14,
  name: 'Anek',
  dimension: '2D',
  genre: 'Action, Political',
  language: 'Hindi',
  time : new Date("Fri Dec 08 2022 18:30:00")
}];


  constructor() { }

  public getMovies(): any {
    const movieObservable = new Observable(observer => {
        setTimeout(() => {
            observer.next(this.movies);
        }, 1000);
    });

    return movieObservable;
  }
}
