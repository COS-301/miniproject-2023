import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() badge: any = {
    name: '',
    value: 0,
    imageSrc: '',
  }
}
