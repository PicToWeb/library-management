import Book from "../book/book.model.js";

export default class LibraryService {

    constructor(private libraryBook: Map<string, Book>) {
    }

    createBook(book: Book) {
        const uuid :string = crypto.randomUUID()
        book.uuid = uuid;
        this.libraryBook.set("1", book);
        return this.libraryBook.get(uuid);
    }

    getBookDetails(bookId: string) {
        if (!this.libraryBook.has(bookId)) {
            return 'Book not found';
        }
        return this.libraryBook.get(bookId);

    }

    getBooks() {
        return Array.from(this.libraryBook.values());
    }

    editBook(bookId: string, book: Book) {

        if (!this.libraryBook.has(bookId)) {
            return 'Book not found';
        }
       const bookToEdit = this.libraryBook.get(bookId)!;
        // bookToEdit.title = book.title;
        // bookToEdit.author = book.author;
        // bookToEdit.editor = book.editor;
        // bookToEdit.publishDate = book.publishDate;

        Object.assign(bookToEdit, book);

        this.libraryBook.set(bookId, bookToEdit);

        return this.libraryBook.get(bookId);

        // const bookFound = this.books.filter((b) => book.id === b.id);
        // if (bookFound.length !== 0) {
        //     const newListWithoutEdited = this.books.filter((b) => book.id !== bookFound[0].id);
        //     newListWithoutEdited.push(book);
        //     return newListWithoutEdited;
        // }
    }

    deleteBook(bookId: string) {
        if (!this.libraryBook.has(bookId)) {
            return 'Book not found';
        }
        this.libraryBook.delete(bookId);
        return 'Book deleted';
    }
}