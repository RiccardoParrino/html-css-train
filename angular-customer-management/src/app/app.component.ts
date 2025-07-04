import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenavContent } from '@angular/material/sidenav'
import { MatToolbar } from '@angular/material/toolbar'
import { MatIcon } from '@angular/material/icon'
import { MatIconButton } from '@angular/material/button'
import { SidenavComponent } from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  imports: [SidenavComponent, MatIconButton, MatIcon, MatToolbar, RouterOutlet, MatSidenavModule, MatSidenavContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-customer-management';
}
