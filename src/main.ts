import Book from "./book/book.model.js";
import LibraryService from "./library/library.service.js";


let booksMap = new Map<string, Book>();
const library = new LibraryService(booksMap);

const book:Book= {
    title:"Hello",
    author: "Sebastien",
    editor:"Thomas",
    publishDate :"05-07-2024"
};

library.createBook(book);

console.log(library.getBooks());

const bookEdited:Book= {
    title:"coucou",
    author: "rerereer",
    editor:"Petit larousse",
    publishDate :"06-07-2024"
};

library.editBook("1",bookEdited);

console.log(library.getBookDetails("1"));


//library.deleteBook("1");
// console.log(library.getBooks());
