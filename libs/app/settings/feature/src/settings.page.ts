import { Component, Renderer2, ViewChild } from '@angular/core';
import { IonToggle } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPageComponent {

  @ViewChild('myToggle', { static: true }) myToggle!: IonToggle;

  constructor(private renderer: Renderer2) { 
    
   }

   onToggleColorTheme(event: any) {
    const isDarkTheme = event.detail.checked;
  
    if (isDarkTheme) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
      localStorage.setItem('color-theme', 'light');
    }
  }

  ngOnInit() {
    const colorTheme = localStorage.getItem('color-theme');
  
    if (colorTheme) {
      if (colorTheme === 'dark') {
        this.myToggle.checked = true;
      }else{
        this.myToggle.checked = false;
      }
    }
  }
  

 }
