import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServerAccess } from '../server-access';
import { REQ } from '../req';

@Component({
  selector: 'app-new-component',
  imports: [FormsModule],
  templateUrl: './new-component.html',
  styleUrls: ['./new-component.css']
})
export class NewComponent {
  constructor(private serverAccess: ServerAccess, private router: Router) { }

  newTitle: string = "";
  newDescription: string = "";
  newPriority: number = 0;

  submit() {
    const newReq: REQ = {
      title: this.newTitle,
      description: this.newDescription,
      priority: Number(this.newPriority)
    };

    if (newReq.title.length < 10 || newReq.description.length < 10) {
      //show error
    } else {
      this.serverAccess.newREQ(newReq).subscribe({
        next: (response) => {
          this.clearInput();
          this.serverAccess.getLatestREQ().subscribe({
            next: (latest) => {
              this.router.navigate(['/detail', latest.id]);
            }
          })
        }
      })
    }
  }

  clearInput() {
    this.newTitle = "";
    this.newDescription = "";
    this.newPriority = 0;
  }
}