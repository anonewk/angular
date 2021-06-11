import { BaseComponent } from './../base/base.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormulaireComponent } from './formulaire/formulaire.component';

export interface Eleve {
  id: string;
  dateNaissance: any;
  nom: string;
  prenom: string;
}
@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent extends BaseComponent implements OnInit {
  eleves: Observable<any>;

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private firestore: AngularFirestore
  ) {
    super(snackBar);
  }


  ngOnInit(): void {
    this.eleves = this.firestore.collection('eleves').valueChanges({ idField: 'id' });
  }

  ajouter() {
    this.dialog.open(FormulaireComponent, { width: '600px' });
  }

  supprimer(eleve: Eleve) {
    this.firestore.collection('eleves').doc(eleve.id).delete().then(
      () => {
        this.afficherSnackbar('Eleve supprimé !!!');
      }
    )
  }
}
