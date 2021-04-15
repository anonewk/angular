import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  idElementModification: number;
  nouvelElement: string;

  tableau = [
    {
      id: 1,
      label: 'Test label 1'
    },
    {
      id: 2,
      label: 'Test label 2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  valider() {
    if(this.idElementModification && this.idElementModification > 0){
      let index = this.tableau.findIndex(x=>x.id === this.idElementModification);
      this.tableau[index].label = this.nouvelElement;
    }else{
      this.tableau.push({
        id: this.tableau.length + 1,
        label: this.nouvelElement,
      });
    }

    this.idElementModification = null;
    this.nouvelElement = '';
  }

  modifier(element: any){
    this.idElementModification = element.id;
    this.nouvelElement = element.label;
  }

  supprimer(id: number) {
    this.tableau = this.tableau.filter(x => x.id !== id);
  }
}
