import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  nouvelElement: string;

  tableau = [
    {
      id: 1,
      label: 'Test label 1',
    },
    {
      id: 2,
      label: 'Test label 2',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  valider() {
    this.tableau.push({
      id: this.tableau.length + 1,
      label: this.nouvelElement,
    });

    this.nouvelElement = '';
  }

  supprimer(id: number) {
    this.tableau = this.tableau.filter(x => x.id !== id);
  }
}
