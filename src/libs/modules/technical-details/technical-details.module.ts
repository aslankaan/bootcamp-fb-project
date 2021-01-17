import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventLoopContainerComponent } from './containers/event-loop-container/event-loop-container.component';
import { Route, RouterModule } from '@angular/router';
import { RxDialogContainerComponent } from './containers/rx-dialog-container/rx-dialog-container.component';
import { StoreModule } from '@ngrx/store';
import * as fromTechnicalDetails from './+state/technical-details.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TechnicalDetailsEffects } from './+state/technical-details.effects';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Route[] = [
  {
    path: "",
    redirectTo: "event-loop"
  },
  {
    path: "event-loop",
    pathMatch: "full",
    component: EventLoopContainerComponent
  },
  {
    path: "rx-dialog",
    pathMatch: "full",
    component: RxDialogContainerComponent
  }
]

@NgModule({
  declarations: [EventLoopContainerComponent, RxDialogContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromTechnicalDetails.technicalDetailsFeatureKey, fromTechnicalDetails.reducer),
    EffectsModule.forFeature([TechnicalDetailsEffects]),
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
  ],

})
export class TechnicalDetailsModule { }
