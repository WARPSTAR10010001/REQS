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
  REQS: REQ[] = [];

  ngOnInit(): void {
    this.serverAccess.getAllREQS().subscribe((response) => {
      this.REQS = response;
    });
  }
}
