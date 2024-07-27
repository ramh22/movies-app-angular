export interface IMovie{
    adult:boolean;
    backdrop_path:string,
    poster_path:string,

    genre_ids:number[],
    id:number,
    original_language:string,
    original_title:string
    ,release_date:string,
    overview:string,
    popularity:number,
    title:string,
    video:boolean,
    vote_count:number,
    vote_average:number
}