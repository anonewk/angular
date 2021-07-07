import { BaseComponent } from '../../base/base.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent extends BaseComponent implements OnInit {

  formulaire = new FormGroup({
    nom: new FormControl(),
    description: new FormControl(),
    note: new FormControl()
  });

  constructor(private _snackbar: MatSnackBar, private firestore: AngularFirestore, @Inject(MAT_DIALOG_DATA) public data: any) {
    super(_snackbar);

    console.log(data);
  }

  ngOnInit(): void {
  }

  valider() {
    console.log(this.formulaire.value);
    this.firestore.collection('technos').add({
      nom: this.formulaire.get('nom').value,
      description: this.formulaire.get('description').value,
      note: this.formulaire.get('note').value,
    }).then(
      () => {
        this.afficherSnackbar('technos enregistré !!!');
      }
    );
  }

}
