import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServerAccess } from '../server-access';
import { Overlay } from '../overlay';
import { REQ } from '../req';

@Component({
  selector: 'app-new-component',
  imports: [FormsModule],
  templateUrl: './new-component.html',
  styleUrls: ['./new-component.css']
})
export class NewComponent {
  constructor(
    private serverAccess: ServerAccess,
    private router: Router,
    private overlay: Overlay
  ) {}

  newTitle: string = "";
  newDescription: string = "";
  newPriority: number = 0;

  submit() {
    const newReq: REQ = {
      title: this.newTitle,
      description: this.newDescription,
      priority: this.newPriority
    };

    if (newReq.title.trim().length < 10 || newReq.description.trim().length < 10) {
      this.overlay.notify("Titel und Beschreibung müssen jeweils mindestens 10 Zeichen lang sein!", "error");
    } else {
      this.serverAccess.newREQ(newReq).subscribe({
        next: (response) => {
          this.clearInput(true);
          this.serverAccess.getLatestREQ().subscribe({
            next: (latest) => {
              this.overlay.notify("Der Eintrag wurde erfolgreich erstellt!", "success");
              this.router.navigate(['/detail', latest.id]);
            }
          });
        },
        error: () => {
          this.overlay.notify("Beim Speichern ist ein Fehler aufgetreten.", "error");
        }
      });
    }
  }

  clearInput(showMessage: boolean) {
    this.newTitle = "";
    this.newDescription = "";
    this.newPriority = 0;

    if (showMessage) {
      this.overlay.notify("Eingabefelder wurden zurückgesetzt.", "info");
    }
  }
}