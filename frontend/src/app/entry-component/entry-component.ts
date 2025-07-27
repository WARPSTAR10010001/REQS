import { Component, OnInit } from '@angular/core';
import { ReqComponent } from "../req-component/req-component";
import { CommonModule } from '@angular/common';
import { ServerAccess } from '../server-access';
import { REQ } from '../req';

@Component({
  selector: 'app-entry-component',
  imports: [ReqComponent, CommonModule],
  templateUrl: './entry-component.html',
  styleUrl: './entry-component.css'
})
export class EntryComponent implements OnInit {
  constructor(private serverAccess: ServerAccess) {}
  REQSin: REQ[] = [];
  REQS: REQ[] = this.REQSin;
  available: boolean = false;
  query: string = "";

  search() {
    this.query = (document.getElementById("search") as HTMLInputElement).value || "";
    if(this.query.length === 0){
      this.REQS = this.REQSin;
    } else {
      this.REQS = this.REQSin.filter(q => {
        return q.title.toLowerCase().includes(this.query.toLowerCase());
      });
    }
  }

  ngOnInit(): void {
    this.serverAccess.getAllREQS().subscribe((response) => {
      this.REQSin = response;
      if(this.REQSin.length > 0){
        this.available = true;
      }
      this.REQS = this.REQSin;
    });
  }
}