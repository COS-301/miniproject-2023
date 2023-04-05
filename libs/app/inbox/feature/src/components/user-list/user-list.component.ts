/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input() item: any;
  @Output() onclick: EventEmitter<any> = new EventEmitter();

  constructor() {
    //
  }

  ngOnInit() { console.log(''); }

  redirect() {
    this.onclick.emit(this.item);
  }


}

