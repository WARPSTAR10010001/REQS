import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerAccess } from '../server-access';
import { ActivatedRoute } from '@angular/router';
import { REQ } from '../req';

@Component({
  selector: 'app-detail-component',
  imports: [CommonModule],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.css'
})
export class DetailComponent implements OnInit {
  constructor(private serverAccess: ServerAccess, private route: ActivatedRoute) { }

  req: REQ = {
    title: "",
    description: "",
    priority: 0,
    id: 0
  };

  ngOnInit(): void {
    this.serverAccess.getREQ(Number(this.route.snapshot.paramMap.get("id"))).subscribe((response) => {
      this.req = response;
    })
  }
}