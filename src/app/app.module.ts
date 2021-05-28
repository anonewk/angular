import { ElevesComponent } from './eleves/eleves.component';
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

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { TestComponent } from './test/test.component';
import { BaseComponent } from './base/base.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },

  { path: 'eleves', component: ElevesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ConnexionComponent,
    BaseComponent,
    InscriptionComponent,
    ElevesComponent
  ],
  imports: [
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

    RouterModule.forRoot(routes),

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
