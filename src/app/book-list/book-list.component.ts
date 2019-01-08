import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';

const booksData: Book[] = [
  {
    name: 'Inteligência Humilhada',
    publishingCompany: 'Vida Nova',
    isbn: '123456'
  },
  {
    name: 'Super Ocupado',
    publishingCompany: 'Fiel',
    isbn: '654312'
  },
  {
    name: 'Contra o aborto',
    publishingCompany: 'Record',
    isbn: '891892'
  },
];


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  displayedColumns: string[] = [
    'select', 'name', 'publishingCompany', 'isbn'
  ];

  dataSource = booksData;

  selection = new SelectionModel<Book>(true, []);



  constructor() { }

  ngOnInit() {
    console.log(this.selection);
  }

}
