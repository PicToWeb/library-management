import Book from "../book/book.model.js";

/**
 * Library service
 */
export default class LibraryService {

    /**
     * Constructor
     * @param libraryBook list of books
     * @returns void
     */
    constructor(private libraryBook: Map<string, Book>) {
    }

    /**
     * Create a book
     * @param book book to create
     * @returns created book
     */
    createBook(book: Book) {
        const uuid :string = crypto.randomUUID()
        book.uuid = uuid;
        this.libraryBook.set("1", book);
        return this.libraryBook.get(uuid);
    }

    /**
     * Get a book by id
     * @param bookId book id
     * @returns book
     */
    getBookDetails(bookId: string) {
        if (!this.libraryBook.has(bookId)) {
            return 'Book not found';
        }
        return this.libraryBook.get(bookId);

    }

    /**
     * Get all books
     * @returns list of books
     */
    getBooks() {
        return Array.from(this.libraryBook.values());
    }

    /**
     * Edit a book
     * @param bookId book id
     * @param book book to edit
     * @returns edited book
     */
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

    /**
     * Delete a book
     * @param bookId book id
     * @returns message
     */
    deleteBook(bookId: string) {
        if (!this.libraryBook.has(bookId)) {
            return 'Book not found';
        }
        this.libraryBook.delete(bookId);
        return 'Book deleted';
    }
}