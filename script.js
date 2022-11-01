
class user {
  #firstName;
  #lastName;
  #hometown;
    constructor(firstName,lastName,hometown){
          this.#firstName = firstName;
          this.#lastName = lastName;
          this.#hometown = hometown;

          this.borrowedBooks = [];
    }

    addBook(newbook){
      this.borrowedBooks.push(newbook)
    }
}

// let a = new user('david','azulay','tel aviv');
// a.addBook('book')
// console.log(a)