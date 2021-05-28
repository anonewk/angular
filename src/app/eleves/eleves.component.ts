import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {
  eleves: Observable<any> = new Observable();

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.eleves = this.firestore.collection('eleves').valueChanges({ idField: 'id' });
  }

  supprimer(eleve: any) {
    console.log(eleve);
    this.firestore.collection('eleves').doc(eleve.id).delete()
      .then(() => {
        console.log('Ligne supprimée !');
      });
  }
}
