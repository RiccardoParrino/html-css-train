import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule, MatSidenavContent } from '@angular/material/sidenav'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSidenavModule, MatSidenavContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'angular-customer-management';

}
