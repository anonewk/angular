import { BaseComponent } from '../base/base.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {FormControl, FormGroup} from '@angular/forms';

export interface Technos {
  id: string;
  name: string;
  decription: any;
  note: number;
}
@Component({
  selector: 'app-technos',
  templateUrl: './technos.component.html',
  styleUrls: ['./technos.component.css']
})
export class TechnosComponent extends BaseComponent implements OnInit {
  technos: Observable<any>;
  formulaire = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    note: new FormControl()
  });

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    private firestore: AngularFirestore
  ) {
    super(snackBar);
  }


  ngOnInit(): void {
    this.technos = this.firestore.collection('technos').valueChanges({ idField: 'id' });

  }

  ajouter() {
    this.dialog.open(FormulaireComponent, { width: '600px' });
  }

  modifier(technos) {
    this.dialog.open(FormulaireComponent, { width: '600px', data: technos });
  }
  supprimer(technos: Technos) {
    this.firestore.collection('technos').doc(technos.id).delete().then(
      () => {
        this.afficherSnackbar('technos supprimé !!!');
      }
    );
  }
}
