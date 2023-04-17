import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module for navigation

@Component({
  selector: 'mp-death-screen',
  templateUrl: './death-screen.component.html',
  styleUrls: ['./death-screen.page.scss']
})
export class DeathScreenPage {
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Logout',
      role: 'Session Options',
      data: {
        action: 'Logout'
      }
    },
    {
      text: 'Watch an ad',
      data: {
        action: 'Ad'
      }
    },
    {
      text: 'Buy more time',
      role: 'Buy',
      data: {
        action: 'Buy'
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel'
      }
    }
  ];

  constructor(private router: Router) {} // Inject the Router module

  // Handle button click event
  onButtonClick(action: string) {
    switch (action) {
      case 'Logout':
        // Navigate to Logout page
        this.router.navigate(['/welcome']);
        break;
      case 'Ad':
        // Navigate to Ad page
        this.router.navigate(['/ad']);
        break;
      case 'Buy':
        // Navigate to Buy page
        this.router.navigate(['/buy']);
        break;
      default:
        // Do nothing for other actions
        break;
    }
    // Close the action sheet
    this.setOpen(false);
  }

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }
}
