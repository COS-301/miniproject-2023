import { Component } from '@angular/core';
import { IProfile, RelationEnum } from '@mp/api/profiles/util';
import { OtherUserState } from '@mp/app/other-user/data-access';
import { SetOtherProfile, SetRelation } from '@mp/app/other-user/util';
import { Select, Store } from '@ngxs/store';
import { IBadge } from 'libs/api/profiles/util/src/interfaces/badge.interface';
import { IMeter } from 'libs/api/profiles/util/src/interfaces/meter.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'mp-other-user-page',
  templateUrl: './other-user.page.html',
  styleUrls: ['./other-user.page.css']
})
export class OtherUserPage {
  // For the state
  @Select(OtherUserState.profile) profile$!: Observable<OtherUserState | null>;

  constructor(
    private store: Store
  ) { }

  private: boolean = true;
  friends: boolean = true;
  deus: boolean = true;
  dead: boolean = false;

  user: any = {
    name: 'Jon Snow',
    pfp: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    bio: 'I know nothing',
    location: 'The wall',
    status: 'Deus',
    time: '10:50:10',
    friends: true,
    private: true
  }

  posts: any[] = [
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      caption: 'I know nothing',
      imagePath: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
  ];

  badges: IBadge[] = [
    {
      name: 'Rockstar',
      iconURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Einstein',
      iconURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Ramsy',
      iconURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Rockstar',
      iconURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Einstein',
      iconURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
    {
      name: 'Ramsy',
      iconURL: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
  ]

  meters: IMeter[] = [
    {
      discipline: 'Science',
      time_accumulated: 60,
    },
    {
      discipline: 'Music',
      time_accumulated: 70,
    },
    {
      discipline: 'Food',
      time_accumulated: 50,
    },
  ]

  NgOnInit() {
    // this.store.dispatch(new SetOtherProfile());
    this.store.dispatch(new SetRelation());

    this.store.select(OtherUserState.profile).subscribe((profile) => {
      if (profile?.accountDetails?.private) {
        this.private = true;
      }
      else
      {
        this.private == false;
      }
      this.badges = profile?.accountDetails?.badges!;
      this.meters = profile?.accountDetails?.meters!;
    })
    this.store.select(OtherUserState.relation).subscribe((relation) => {
      if (relation?.type === RelationEnum.FRIEND) {
        this.friends = true;
      }
      else
      {
        this.friends == false;
      }
    })

    this.store.select(OtherUserState.posts).subscribe((posts) => {
      this.posts = posts?.list?.map((post) => {
        return {caption: post.title, imagePath: post.image}
      })!;
    })
  }

}
