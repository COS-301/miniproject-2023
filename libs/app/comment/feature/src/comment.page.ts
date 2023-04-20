import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { IComment, ICommentOnPostRequest } from '@mp/api/profiles/util';
import { CreateNewComment } from '@mp/app/profile/util';
import { Store } from '@ngxs/store'

@Component({
  selector: 'mp-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
  postIdValue!: string;
  userIdValue!: string;
  constructor(private router: Router, private store: Store, private activatedRoute: ActivatedRoute ) { }


  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(queryParams => {
      const value = queryParams.get('postValueId');
      this.postIdValue = value !== null ? value : '';
      
      const userIdvalue = queryParams.get('userValueId');
      this.userIdValue = userIdvalue !== null ? userIdvalue : '';
      
     
    });
  }

  toHomePage() {
    this.router.navigate(["/home"]);
  }

  activeTextArea(){
  console.log("Look at you commenting and shit")
  }



  send(){
    // alert(this.commentValue) used this for testing purposes
    //Todo: send comment to database
    this.clear();
    console.log("sent comment!");
    /*ToDo:
    1.  Dispatch the comment state
    2. Ensure the dispacth; routing and stuff
    */

    const commentArea = document.getElementById("textBox") as HTMLTextAreaElement;
    commentArea.value;

    const NewComment: IComment = {
      comment: commentArea.value,
      postId: this.postIdValue,
      userId: this.userIdValue
    }

    const commentDetails: ICommentOnPostRequest = {
        comment: NewComment
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
