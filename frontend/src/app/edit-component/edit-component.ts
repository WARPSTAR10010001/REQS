import { Component, OnInit } from '@angular/core';
import { ServerAccess } from '../server-access';
import { Router, ActivatedRoute } from '@angular/router';
import { REQ } from '../req';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-component',
  imports: [FormsModule],
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.css'
})
export class EditComponent implements OnInit {
  constructor(private serverAccess: ServerAccess, private router: Router, private activatedRoute: ActivatedRoute) { }

  REQ: REQ = {
    title: "",
    description: "",
    priority: 0
  };

  update() {
    if (this.REQ.title.length < 10 || this.REQ.description.length < 10) {
      //show error
    } else {
      this.REQ.priority = Number(this.REQ.priority);
      this.serverAccess.updateREQ(this.REQ, Number(this.activatedRoute.snapshot.paramMap.get("id"))).subscribe({
        next: (response) => {
          this.serverAccess.getLatestREQ().subscribe({
            next: (latest) => {
              this.router.navigate(['/detail', Number(this.activatedRoute.snapshot.paramMap.get("id"))]);
            }
          });
        }
      });
    }
  }

  ngOnInit(): void {
      this.serverAccess.getREQ(Number(this.activatedRoute.snapshot.paramMap.get("id"))).subscribe((response) => {
        this.REQ = response;
      });
  }
}