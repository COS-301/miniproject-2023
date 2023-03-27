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
    var x=document.getElementsByTagName("textarea");
    for (var i = 0; i < x.length; i++) {
      if(!x[i].getAttribute("[readonly]")){
        x[i].value="";
      }
    }
    console.log("sent comment!");

  }

  clear(){
    var x=document.getElementsByTagName("textarea");
    for (var i = 0; i < x.length; i++) {
      if(!x[i].getAttribute("[readonly]")){
        x[i].value="";
      }
    }
    console.log("cleared comment!");
  }

  like(event: any){
      console.log("Liked!");
  }
}
