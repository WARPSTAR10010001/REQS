import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overlay-component',
  imports: [CommonModule],
  templateUrl: './overlay-component.html',
  styleUrl: './overlay-component.css'
})
export class OverlayComponent {
  isConfirmVisible = false;
  confirmMessage = '';
  private confirmResolve: (result: boolean) => void = () => {};

  notificationMessage = '';
  notificationType: 'success' | 'error' | 'info' = 'info';
  isNotificationVisible = false;

  showConfirm(message: string): Promise<boolean> {
    this.isConfirmVisible = true;
    this.confirmMessage = message;
    return new Promise(resolve => this.confirmResolve = resolve);
  }

  confirm() {
    this.isConfirmVisible = false;
    this.confirmResolve(true);
  }

  cancel() {
    this.isConfirmVisible = false;
    this.confirmResolve(false);
  }

  showNotification(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.notificationMessage = message;
    this.notificationType = type;
    this.isNotificationVisible = true;
    setTimeout(() => this.isNotificationVisible = false, 3000);
  }
}