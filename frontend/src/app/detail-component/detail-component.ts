import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerAccess } from '../server-access';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { REQ } from '../req';

@Component({
  selector: 'app-detail-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.css'
})
export class DetailComponent implements OnInit {
  constructor(private serverAccess: ServerAccess, private activatedRoute: ActivatedRoute, private router: Router) { }

  req: REQ = {
    title: "",
    description: "",
    priority: 0,
    id: 0
  };

  remove() {
    this.serverAccess.deleteREQ(Number(this.activatedRoute.snapshot.paramMap.get("id"))).subscribe();
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
    this.serverAccess.getREQ(Number(this.activatedRoute.snapshot.paramMap.get("id"))).subscribe((response) => {
      this.req = response;
    });
  }
}