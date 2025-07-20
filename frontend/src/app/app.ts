import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { OverlayComponent } from "./overlay-component/overlay-component";
import { Overlay } from './overlay';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, OverlayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  @ViewChild(OverlayComponent) overlayC!: OverlayComponent;
  constructor(private overlay: Overlay) {}

  ngAfterViewInit(): void {
      this.overlay.register(this.overlayC);
  }
}