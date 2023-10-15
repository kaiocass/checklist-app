import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  public dialogMsg = 'Do you would to continue with this action?';
  public leftButtonLabel = 'Cancel';
  public rightButtonLabel = 'OK';

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.leftButtonLabel != null) {
      this.leftButtonLabel = data.leftButtonLabel;
    }

    if (data.rightButtonLabel != null) {
      this.rightButtonLabel = data.rightButtonLabel;
    }

    if (data.dialogMsg != null) {
      this.dialogMsg = data.dialogMsg;
    }
  }

  ngOnInit(): void { }

  public clickedLeftButton() {
    this.dialogRef.close(false);
  }

  public clickedRightButton() {
    this.dialogRef.close(true);
  }
}
