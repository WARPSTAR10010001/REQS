import { Component, Input } from '@angular/core';
import { REQ } from '../req';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-req-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './req-component.html',
  styleUrl: './req-component.css'
})
export class ReqComponent {
  @Input() req!: REQ;
}
