import { Component, OnInit } from '@angular/core'
import { BookListService } from './book-list.services'



@Component({
    selector: 'book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookList implements OnInit{
    books: string[]
    count: number

    constructor ( public bookServices: BookListService ) { 
        this.books = ['book1', 'book2', 'book3']
        this.count = 0
        this.bookServices.method1()
        console.log(this.bookServices)
    }

    ngOnInit(): void {
        this.bookServices.loadBooks()
    }

    pressMe():void{
        console.log("IM PRESSED")
    }

    increment(): void {
        this.count = this.count + 1
    }
}