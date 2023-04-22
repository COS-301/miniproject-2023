import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { IComment, ICommentOnPostRequest, IPostDetails, IProfile } from '@mp/api/profiles/util';
import { CreateNewComment } from '@mp/app/profile/util';
import { Store, Select } from '@ngxs/store'
import { ProfileState } from '@mp/app/profile/data-access';;
import { Observable } from 'rxjs';

@Component({
  selector: 'mp-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
  postIdValue!: string;
  userIdValue!: string;
  commentText!: string;
  userName!: string | null | undefined
  createrId!: string | null | undefined; 
  time = new Date();
  comments: IComment[] | null | undefined = []
  @Select(ProfileState.userPosts) userPosts$: Observable<IPostDetails[]> | undefined;
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  constructor(private router: Router, private store: Store, private activatedRoute: ActivatedRoute ) {}


  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      const value = queryParams.get('postValueId');
      
      this.postIdValue = value !== null ? value : '';
      
      const userIdvalue = queryParams.get('userValueId');
      this.userIdValue = userIdvalue !== null ? userIdvalue : '';

      this.userPosts$?.subscribe( (posts) => {
        const post = posts.find(p => p.postID === this.postIdValue);
        this.comments = post?.comments;
        this.createrId = post?.createdBy;
      })


      this.profile$.subscribe((profile) => {
        this.userName = profile?.accountDetails?.displayName
      })
      
    });
  }

  toHomePage() {
    this.router.navigate(["/home"]);
  }

  activeTextArea(){
  console.log("Look at you commenting and shit")
  }



  send(){

    this.clear()

    const NewComment: IComment = {
      comment: this.commentText,
      postId: this.postIdValue,
      userId: this.userIdValue
    }


    const commentDetails: ICommentOnPostRequest = {
        userId: this.createrId,
        comment: NewComment,
    }

    this.store.dispatch( new CreateNewComment(commentDetails) )

  }

  clear(){
    const x=document.getElementsByTagName("ion-textarea");
    for (let i = 0; i < x.length; i++) {
      if(!x[i].getAttribute("[readonly]")){
        x[i].value="";
      }
    }
  }

  like(event: any){
      console.log("Liked!");
  }
}
