import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mp-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
  constructor(private router: Router) { }


  ngOnInit() {}

  toHomePage() {
    this.router.navigate(["/home"]);
  }

  activeTextArea(){
  
  }

  send(){

    //Todo: send comment to database
    this.clear();
    console.log("sent comment!");

  }

  clear(){
    let x=document.getElementsByTagName("ion-textarea");
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
