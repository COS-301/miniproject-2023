import { Component, Input, OnInit} from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Logout } from '@mp/app/auth/util';
import { Select, Store } from '@ngxs/store';
import { Observable, map, Subscription } from 'rxjs';


@Component({
  selector: 'lapse-time-badge',
  templateUrl: './time-badge.component.html',
  styleUrls: ['./time-badge.component.scss'],
})
export class TimeBadgeComponent {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  ngOnInit() {
    this.startTime();
   }
   private profileSubscription!: Subscription;
  constructor(private store: Store) {
    this.profileSubscription = this.profile$.subscribe((profile) => {
      if (profile && profile.time === 0) {
        // User's time reached 0, log them out
        this.store.dispatch(new Logout());
      }
    });
  }

  ngOnDestroy() {
    // Clean up the subscription when the component is destroyed
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
  @Input() time= 1000;

  startTime() {
    /*setInterval(() => {
      this.time--;
      document.getElementById("time")!.innerHTML = Math.floor((this.time/60)).toString()+":"+((this.time%60).toString().length==1?"0":"")+(this.time%60).toString();
    }, 1000);*/

  }
}
