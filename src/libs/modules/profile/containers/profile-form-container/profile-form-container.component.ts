import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ProfileState } from '../../+state/profile.reducer';
import { getProfileFromDB, saveProfileToDB } from '../../+state/profile.actions';
import { selectProfileInfo } from '../../+state/profile.selectors';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile-form-container',
  templateUrl: './profile-form-container.component.html',
  styleUrls: ['./profile-form-container.component.scss']
})
export class ProfileFormContainerComponent implements OnInit {

  myForm = this.formBuilder.group({
    name: this.formBuilder.control(null, [Validators.required]),
    title: this.formBuilder.control(null)
  })

  subscriptions: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ProfileState>
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.store.dispatch(getProfileFromDB());

    this.subscriptions.add(
      this.store.pipe(
        select(selectProfileInfo),
        filter(profileInfo => !!profileInfo)
      ).subscribe((profileInfo) => {
        this.myForm.patchValue(profileInfo, { emitEvent: false });
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  handleSaveClicked() {
    this.store.dispatch(saveProfileToDB({profileInfo: this.myForm.value}));
  }

}

