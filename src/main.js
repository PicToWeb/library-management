"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_service_1 = __importDefault(require("./book/book.service"));
const books = [{
        id: 1,
        title: "Hello",
        author: "Sebastien",
        editor: "Thomas",
        publishDate: "05-07-2024"
    }];
let newList = book_service_1.default.createBook(books, {
    id: 2,
    title: "Coucou",
    author: "Antoine",
    editor: "Petit larousse",
    publishDate: "06-07-2024"
});
console.log(newList);
