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

  }

  ngOnInit(): void {
    if (this.formulaire.value) {
      // @ts-ignore
      this.formulaire.get('nom').setValue(this.data.nom);
      this.formulaire.get('description').setValue(this.data.description);
      this.formulaire.get('note').setValue(this.data.note);
    }
  }

  valider() {
    console.log(this.formulaire.value);
    if (this.formulaire.value){
      this.firestore.collection('technos').doc(this.data.id).update(this.formulaire.value).then(() => {
        this.afficherSnackbar('technos modifié !!');
      });
    }
    else {
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

}
