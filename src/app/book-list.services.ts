import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

export interface BookItem {
    author: string; 
    title: string;
    datePublished: number
}

@Injectable()
export class BookListService {
    id: number
    name: string
    booksList: object
    constructor(public http:HttpClient) {
        this.id = 123
        this.name = "James"
    }
    method1() : void {
        console.log("I am being called")
    }
    loadBooks() : void {
        this.http.get('./api/books.json').subscribe( (data) => 
        this.booksList = data['results']
    )}
}