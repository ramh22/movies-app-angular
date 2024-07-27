import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-detailes-movie',
  standalone: true,
  imports: [],
  templateUrl: './detailes-movie.component.html',
  styleUrl: './detailes-movie.component.css'
})
export class DetailesMovieComponent implements OnInit{
  movieId!:number;
  selectedMovie:any;
constructor(private route:ActivatedRoute, private movieServ:MovieService){}
ngOnInit(): void {
  this.movieId=Number(this.route.snapshot.paramMap.get('id'))
  this.movieServ.getMovieById(this.movieId).subscribe((movieDetails)=>{
    this.selectedMovie=movieDetails
  })
}
}
