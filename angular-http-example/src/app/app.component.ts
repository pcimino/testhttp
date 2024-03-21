import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="testit()">Test It</button>
  `,
  imports: [HttpClientModule], // Import HttpClientModule directly
  providers: [DataService], // Provide the DataService
  standalone: true, // Mark the component as standalone
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  testit() {
    this.dataService.testit().subscribe(
      response => {
        console.log(response);
        // Convert and show the response as a JSON string
        alert(JSON.stringify(response));
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
}
