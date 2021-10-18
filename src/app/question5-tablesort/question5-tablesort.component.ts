import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question5-tablesort',
  templateUrl: './question5-tablesort.component.html',
  styleUrls: ['./question5-tablesort.component.scss']
})
export class Question5TablesortComponent implements OnInit {
  public marksSheet: Array<any> = [{
    name: 'Arjun',
    class: 6,
    section: 'D',
    sub1: 21,
    subj2: 52,
    subj3: 23
  },
  {
    name: 'Suprith',
    class: 9,
    section: 'A',
    sub1: 87,
    subj2: 21,
    subj3: 98
  },
  {
    name: 'Dixith',
    class: 1,
    section: 'B',
    sub1: 29,
    subj2: 43,
    subj3: 87
  },
  {
    name: 'Peter',
    class: 1,
    section: 'B',
    sub1: 67,
    subj2: 93,
    subj3: 55
  },
  {
    name: 'John',
    class: 2,
    section: 'J',
    sub1: 78,
    subj2: 4,
    subj3: 57
  },
  {
    name: 'Adam',
    class: 9,
    section: 'N',
    sub1: 92,
    subj2: 31,
    subj3: 70
  },
  {
    name: 'Sumanth',
    class: 10,
    section: 'B',
    sub1: 29,
    subj2: 43,
    subj3: 87
  },
  {
    name: 'Jithesh',
    class: 8,
    section: 'B',
    sub1: 87,
    subj2: 13,
    subj3: 99
  },
  {
    name: 'Gowtham',
    class: 10,
    section: 'F',
    sub1: 82,
    subj2: 53,
    subj3: 79
  },
  {
    name: 'Zabair',
    class: 5,
    section: 'N',
    sub1: 29,
    subj2: 82,
    subj3: 67
  }

  ]

  public header = [{ header: 'Name', key: 'name' },
  { header: 'Class', key: 'class' },
  { header: 'Section', key: 'section' },
  { header: 'Subject1', key: 'sub1' },
  { header: 'Subject2', key: 'subj2' },
  { header: 'Subject3', key: 'subj3' },]
  count: number = 0;
  marksDetails: any[] = [];
  colNamesLocal: any;
  clickedIndexHeader: any;
  constructor() { }

  ngOnInit(): void {
    this.marksDetails = this.marksSheet;
  }

  onSort(event: any, colName: string | number, i: any) {
    debugger;
    this.clickedIndexHeader = i; //which header is clicked to add icon

    //if colname is not first time (colNamesLocal is not udefined and (3rd click or clicking on other th))
    if (this.colNamesLocal != undefined && (this.count >= 2 || this.colNamesLocal != colName)) {
      //this cond is for 3rd time click
      if (this.count >= 2 && this.colNamesLocal == colName) {
        this.marksDetails = this.marksSheet;
        this.count = 0;
        return;
      } else if (this.count >= 2 && this.colNamesLocal != colName) {
        this.marksDetails = this.marksSheet;
        this.count = 0;
        // return;
      }
      this.count = 0;
    }

    //first click
    if (this.count == 0) {
      this.count = this.count + 1;
      this.marksDetails = this.marksSheet.slice().sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
    }
    //second click
    else if (this.count == 1) {
      this.count = this.count + 1;
      this.marksDetails = this.marksSheet.slice().sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
    }
    this.colNamesLocal = colName; // this assignement is useful to check if it is clicked another th or not
  }


}
