import { Injectable } from '@angular/core';
import { IMovie } from '../models/IMovie';
import { Observable, Subject, SubjectLike } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey:string="037f872ea1c47d9d478cde261bcb9c2e";

  constructor(private http:HttpClient){}
  req="https://www.themoviedb.org/movie"
  // movies:Subject<IMovie[]>=new Subject()
  // getAllMovies():Observable<IMovie[]>{
  //         return this.movies
  // }
  movies:[]=[]
  getAllMovies():Observable<any>{
          return this.http.get<any>(
            `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`)
  }
  getMovieById(id:number):Observable<any>{
     return  this.http.get<any>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`)

      
  }
  fillMovies(){
    //call subject =notification
 // this.movies.next([])
  //this.movies
  }
  // clearMovies(){
  //   this.movies=[]
  //   return this.movies

  // }
}
