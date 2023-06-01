import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalDialogComponent implements OnInit {
  isModalOpen: boolean = false;
  countdown: number = 10;
  countdownInterval: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.openModal();
  }

  openModal() {
    this.isModalOpen = true;
    this.startCountdown();
  }

  closeModal() {
    this.isModalOpen = false;
    this.clearCountdown();
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        this.closeModal();
      }
    }, 1000);
  }

  clearCountdown() {
    clearInterval(this.countdownInterval);
  }
}

