import { Injectable } from '@angular/core';
import { OverlayComponent } from './overlay-component/overlay-component';

@Injectable({
  providedIn: 'root'
})
export class Overlay {
  private overlayComponent?: OverlayComponent;

  register(component: OverlayComponent) {
    this.overlayComponent = component;
  }

  confirm(message: string): Promise<boolean> {
    return this.overlayComponent?.showConfirm(message) ?? Promise.resolve(false);
  }

  notify(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.overlayComponent?.showNotification(message, type);
  }
}