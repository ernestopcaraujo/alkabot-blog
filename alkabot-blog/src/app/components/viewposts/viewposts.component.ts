import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/Posts';
import { Users } from 'src/app/models/Users';
import { PostsService } from 'src/app/services/posts.service';
import { forkJoin } from 'rxjs';
import { Comments } from 'src/app/models/Comments';

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})
export class ViewpostsComponent implements OnInit {

  posts: Posts[] = [];
  users: Users[] = [];
  comments: Comments[]=[];
  userPosts:any;

  constructor(private postsService:PostsService) { }

  ngOnInit():void{
    forkJoin([this.postsService.getPosts(),this.postsService.getUsers()])
      .subscribe(([p,u])=>{
        this.posts = p;
        this.users = u;
        this.showPosts();
      });
  }

  showPosts(){
    const up = this.posts.map((post)=>{
              const usr = this.users.find((usr)=>usr.id===post.userId);
              return {...post, name:usr?.name}
    });
    this.userPosts=up
  }

  getPostComments(idPost:number){
    this.postsService.getComments(idPost).subscribe(c=>{
      this.comments = c;
    })
  }

  changeChar(st:string):string{
    let textChange = st;
    textChange = textChange.charAt(0).toUpperCase() + textChange.slice(1);
    return textChange;
  }

}
