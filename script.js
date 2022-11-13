

class User {
 
    constructor(firstName,lastName,hometown){
          this.firstName = firstName;
          this.lastName = lastName;
          this.hometown = hometown;

          this.borrowedBooks = [];
         
    }

    addBook(newbook){
         
          
           if(newbook.canBorrow){
              this.borrowedBooks.push(newbook)
           }

          this.borrowedBooks.forEach((element) => {
            return element.canBorrow = false;
          });

      
}
}
class Book{

  constructor(bookname,authorbook,canBorrow){
    this.bookname = bookname;
    this.authorbook = authorbook ;
    this.canBorrow = canBorrow ;
 
 } 


}  

class Report{
  constructor(){
   this.users = [];
   
  }
 


  adduser(newuser){
    this.users.push(newuser)
  }
  
  printreport(){
    this.users.forEach((element) => {
      console.log(element)
    });
  }

}




let user1 = new User('david','azulay','tel aviv');
let user2 = new User("shmuel", "rozental", "tel aviv");

let book1 = new Book("lllll", "mmmm",false);
let book2 = new Book('1984','gorge arwl',true);


user1.addBook(book1)
user1.addBook(book2)
user2.addBook(book2)
user1.addBook(book1)

let report1 = new Report();
report1.adduser(user1);
report1.adduser(user2);
report1.printreport();
