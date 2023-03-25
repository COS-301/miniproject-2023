import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuBarService {
  private menuShown = false;

  set menuStatus(value: boolean) {
    this.menuShown = !this.menuShown;
  }

  get menuStatus(): boolean {
    return this.menuShown;
  }
}
