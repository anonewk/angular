import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { BaseComponent } from '../base/base.component';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent extends BaseComponent implements OnInit {

  formulaire = new FormGroup({
    email: new FormControl(),
    motDePasse: new FormControl()
  });

  constructor(
    private authentication: AngularFireAuth,
    public snackBar: MatSnackBar,
    private router: Router

  ) {
    super(snackBar);
  }

  ngOnInit(): void {
  }

  inscription() {
    this.authentication.createUserWithEmailAndPassword(this.formulaire.get('email').value, this.formulaire.get('motDePasse').value).then(
      (response) => {
        this.afficherSnackbar('Utilisateur enregistré avec succès !');
        this.router.navigate(['/connexion']);
      },
      (error) => {
        this.afficherSnackbar(environment.firebaseMessage[error.code]);
      }
    );
  }
}
