import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedClient: string | null = null;

  selectClient(clientId: string) {
    alert(clientId)
    if (this.selectedClient === clientId) {
      return; // If already selected, do nothing
    }

    this.selectedClient = clientId;

    // Reset button styles
    const otherClientId = clientId === 'Client-1' ? 'Client-2' : 'Client-1';
    const otherButton = document.getElementById(otherClientId) as HTMLButtonElement;
    if (otherButton) {
      otherButton.classList.remove('selected');
    }
  }
}
