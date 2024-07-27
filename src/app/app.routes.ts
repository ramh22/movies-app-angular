import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DetailesMovieComponent } from './components/detailes-movie/detailes-movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    // children:[
        {path:'',redirectTo:'movies',pathMatch:'full'},//after the port with no queries before
        {path:'movies',component: MoviesComponent},
        {path:'details/:id',component:DetailesMovieComponent},
        {path:'about',component:AboutUsComponent},
        {path:'contact',component:ContactsComponent},
    // ]
        
        //wildcard route
        {path:'**',component:PageNotFoundComponent},
        //{path:'',component:MainLayoutComponent},
        {path:'login',component:LoginComponent},
        {path:'signup',component:SignupComponent}//after the port with no queries before
        // {path:'movies',component: MoviesComponent},


];
