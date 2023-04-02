import { Component, Input } from '@angular/core';

@Component({
  selector: 'meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss']
})
export class MeterComponent {
  @Input() meter: any = {
    name: '',
    value: 0,
  };
}
