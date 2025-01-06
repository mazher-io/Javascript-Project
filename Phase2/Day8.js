// Parent Class: Book 
class Book{
  constructor(title, author, price){
    this.title = title;
    this.author = author;
    this._price = price;
  }


  // Getter
  get price(){
    return this._price;
  }

// Setter
set price(value) {
  if (value > 0) {
    this._price = value;
  } else {
    console.log('Price must be positive.');
  }
}

  // Method
  details(){
    return `${this.title} by ${this.author}`;
  }
}

// Child Class: EBook (inherits from Book)
class EBook extends Book {
  constructor(title, author, price, size) {
    super(title, author, price); // Call parent constructor
    this.size = size; // in MB
  }

  // Overriding Parent Method
  details() {
    return `${super.details()} - ${this.size}MB (eBook)`;
  }
}

class Discount{
  static applyDiscount(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
  }
}

const book1 = newBook('The Alchemist', 'Paulo Coelho', 15);
console.log(book1.details()); // The Alchemist by Paulo Coelho
console.log(book1.price); // 15

book1.price = 20;
console.log(book1.price); // 20

const ebook1 = new EBook('The Alchemist', 'Paulo Coelho', 15, 2);
console.log(ebook1.details()); // The Alchemist by Paulo Coelho - 2MB (eBook)

const discountedPrice = Discount.applyDiscount(book1.price, 10);
console.log(`Discounted Price: $${discountedPrice}`); 

