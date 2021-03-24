"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { findTitles, findAuthors,findIDs, addBook,showTitles,showAuthors,showIDs, addBrowserBook,makeBook }; //add all of your function names here that you need for the node mocha tests

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}
    /**
     * @returns {undefined}
     */
function showAuthors() {    

    const authors = findAuthors();    
    authors.sort();
    const authorString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}
/**
 * @return {undefined}
 */
function showIDs() {    

    const ids = findIDs();    
    ids.sort();
    const idsString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idsString;
}
/**
 * @returns {undefined}
 */
function addBrowserBook() {
    const authorTxtbox = document.getElementById("title");
    const author = authorTxtbox.value;
    const newBrowserBook = { author: author, title: "foo", libraryID: "123" };
    addBook(newBrowserBook);
    return;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    for (const book of library){
        titles.push(book.title);
    }
    titles.sort();
   // titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    return titles;
}

/**
 * @returns {Array} of all the authors in library
 */
function findAuthors() {
    const authors = [];
    for (const book of library) {
        authors.push(book.author);
    }
    return authors;
}
/**
 * 
 * @returns {Array} of all the ids in library
 */
function findIDs(){
    const ids = [];
    for(const book of library){
        ids.push(book.libraryID);
    }
    ids.sort();
    return ids;
}

/**{
 * 
 * @param {Object} book with author title and id
 * @returns {Object} the same book that added
 */
function addBook(book) {
    library.push(book);
    return book;

}
/**
 * 
 * @param {string} author is book author
 * @param {string} title is book title
 * @param {string} libraryID is book id
 * @returns {Object} the new book
 */
function makeBook(author, title, libraryID) {
    const newBook = {
        author: author,
        title: title,
        libraryID:libraryID
    };
    return newBook;
}