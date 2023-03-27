import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mp-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}

  toDashboard() {
    this.router.navigate(["/home"]);
  }
}
