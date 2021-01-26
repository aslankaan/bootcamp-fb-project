import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { savePostInfo } from '../../+state/technical-details.actions';
import { State } from '../../+state/technical-details.reducer';
import { selectPostInfo } from '../../+state/technical-details.selectors';

@Component({
  selector: 'app-rx-dialog-container',
  templateUrl: './rx-dialog-container.component.html',
  styleUrls: ['./rx-dialog-container.component.scss']
})
export class RxDialogContainerComponent implements OnInit, OnDestroy {

  @ViewChild('postdialog') postDialogTemplate: TemplateRef<any>;

  postForm = this.formBuilder.group({
    title: this.formBuilder.control(null, [Validators.required]),
    body: this.formBuilder.control(null, [Validators.required])
  })

  subscriptions: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, private store: Store<State>) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.store.pipe(
        select(selectPostInfo),
        tap(console.log),
        filter((postInfo) => !!postInfo)
      ).subscribe((postInfo) => {
        this.dialog.open(this.postDialogTemplate, {
          data: postInfo[postInfo.length - 1]
        });
      })
    )

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  handleAddClicked() {
    this.store.dispatch(savePostInfo({ postInfo: this.postForm.value }));


    // this.dialog.open(this.postDialogTemplate, {
    //   data: this.postForm.value
    // });
  }

}
