<<<<<<< HEAD
import { ServiceWorkerModule } from '@angular/service-worker';
=======
import { ElevesComponent } from './eleves/eleves.component';
>>>>>>> 4f5df41f07758a6f87f166d2580456e42822352d
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
<<<<<<< HEAD
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
=======
import {MatTableModule} from '@angular/material/table';

>>>>>>> 4f5df41f07758a6f87f166d2580456e42822352d

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BaseComponent } from './base/base.component';
import { InscriptionComponent } from './inscription/inscription.component';
<<<<<<< HEAD
import { ElevesComponent } from './eleves/eleves.component';
import { FormulaireComponent } from './eleves/formulaire/formulaire.component';
=======
import { CommonModule } from '@angular/common';
>>>>>>> 4f5df41f07758a6f87f166d2580456e42822352d

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },

  { path: 'eleves', component: ElevesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    BaseComponent,
    InscriptionComponent,
<<<<<<< HEAD
    ElevesComponent,
    FormulaireComponent
=======
    ElevesComponent
>>>>>>> 4f5df41f07758a6f87f166d2580456e42822352d
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    FormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
<<<<<<< HEAD
    MatDialogModule,
=======
>>>>>>> 4f5df41f07758a6f87f166d2580456e42822352d

    RouterModule.forRoot(routes),

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
<<<<<<< HEAD
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
=======
    AngularFirestoreModule
>>>>>>> 4f5df41f07758a6f87f166d2580456e42822352d
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
