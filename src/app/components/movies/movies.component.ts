import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/IMovie';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  // moviesList:string[]=['s','a','w']
  //@Input()movieId!:number;
  allMovies:IMovie[]=[]
  // movieServ:MoviesService;
  constructor(private movieServ:MovieService ,private router:Router){
    // this.movieServ=new MoviesService()
  }
  
  ngOnInit(): void {
  this.movieServ.getAllMovies().subscribe((data)=>{
    this.allMovies=data.results})
    // setTimeout(()=>{ this.movieServ.fillMovies() },5000)
  }
  goDetails(id:number)
  {
this.router.navigateByUrl(`details/${id}`)
  }
}
