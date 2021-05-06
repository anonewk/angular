import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TestComponent } from './test/test.component';

import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {MatCardModule} from '@angular/material/card';
import { ConnexionComponent } from './connexion/connexion.component';



const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'connexion', component: ConnexionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ConnexionComponent
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

    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
