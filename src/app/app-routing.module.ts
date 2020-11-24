import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateSubredditComponent } from './subreddit/create-subreddit/create-subreddit.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { ListSubredditsComponent } from './subreddit/list-subreddits/list-subreddits.component';

const routes: Routes = [
  {path:'sign-up', component: SignupComponent},
  {path:'login', component: LoginComponent},

  {path:'', component:HomeComponent},
  {path:'create-post', component:CreatePostComponent},
  {path:'create-subreddit', component:CreateSubredditComponent},
  {path:'list-subreddits', component: ListSubredditsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
