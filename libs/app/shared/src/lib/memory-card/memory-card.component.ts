import { formatDate } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss'],
})
export class MemoryCardComponent {
  @Input() memory!: any;

  showExpandedView = false;

  changeMemoryView() {
    this.showExpandedView = !this.showExpandedView;
  }

  //function to covert timePosted to dd MMMM yyyy
  convertTimePostedToDate(timePosted: string) : string {
    const date = new Date(timePosted);
    return formatDate(date, 'dd MMMM yyyy', 'en-US');
  }

  //function to use timePosted to calculate how long ago the memory was posted
  calculateHowLongAgo(timePosted: string) : string {
    const date = new Date(timePosted);
    const timeDifference = Date.now() - date.getTime();

    // Convert time difference to "time ago" string
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days / 365);

    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ago`;
    } 
    else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } 
    else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } 
    else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } 
    else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } 
    else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  }
}
