import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.html',
  styleUrl: './new-component.css'
})
export class NewComponent {
  clearInput(){
    document.getElementById("newtitle")!.innerHTML = "";
    document.getElementById("newdescription")!.innerText = "";
  }
}