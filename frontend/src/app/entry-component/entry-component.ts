import { Component } from '@angular/core';
import { ReqComponent } from "../req-component/req-component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entry-component',
  imports: [ReqComponent],
  templateUrl: './entry-component.html',
  styleUrl: './entry-component.css'
})
export class EntryComponent {

}
