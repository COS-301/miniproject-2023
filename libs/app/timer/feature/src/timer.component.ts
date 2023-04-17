import { Component } from '@angular/core';

@Component({
  selector: 'mp-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  hours = 0;
  minutes = 0;
  seconds = 0;
  allocatedTime = new Date().getTime() + 28800000;

  time = setInterval(() => {
    const today = new Date().getTime() + 1000;
    const timer = this.allocatedTime - today;
    this.hours = Math.floor(timer % (1000*60*60*24)/ (1000*60*60));
    this.minutes = Math.floor(timer % (1000*60*60)/ (1000*60));
    this.seconds = Math.floor(timer % (1000*60)/ (1000));

  },1000)
}
