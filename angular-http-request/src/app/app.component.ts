import { Component } from '@angular/core';
import { HttpCallerComponent } from './http-caller/http-caller.component';

@Component({
  selector: 'app-root',
  imports: [HttpCallerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-http-request';
}
