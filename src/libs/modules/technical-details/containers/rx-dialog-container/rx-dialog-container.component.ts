import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rx-dialog-container',
  templateUrl: './rx-dialog-container.component.html',
  styleUrls: ['./rx-dialog-container.component.scss']
})
export class RxDialogContainerComponent implements OnInit {

  @ViewChild('postdialog') postDialogTemplate: TemplateRef<any>;

  postForm = this.formBuilder.group({
    title: this.formBuilder.control(null, [Validators.required]),
    body: this.formBuilder.control(null, [Validators.required])
  })

  subscriptions: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  handleAddClicked() {
    this.dialog.open(this.postDialogTemplate, {
      data: this.postForm.value
    })
  }

}
