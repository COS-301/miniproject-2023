import { Component, Input, OnInit} from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'lapse-time-badge',
  templateUrl: './time-badge.component.html',
  styleUrls: ['./time-badge.component.scss'],
})
export class TimeBadgeComponent {

  ngOnInit() {
    this.startTime();
   }
  
  constructor(private store: Store) {}
  @Input() time= 1000;

  startTime() {
    setInterval(() => {
      this.time--;
      document.getElementById("time")!.innerHTML = Math.floor((this.time/60)).toString()+":"+((this.time%60).toString().length==1?"0":"")+(this.time%60).toString();
    }, 1000);

  }
}