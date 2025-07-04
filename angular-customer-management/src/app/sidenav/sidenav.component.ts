import { Component } from '@angular/core';
import {MatSidenavContainer, MatSidenavContent, MatSidenavModule} from '@angular/material/sidenav'

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
