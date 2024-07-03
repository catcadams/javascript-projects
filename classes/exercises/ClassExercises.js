// Define your Book class here:
class BookInformation {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numOfPages,
    numOfCheckOuts,
    discarded
  ) {
    (this.title = title),
      (this.author = author),
      (this.copyrightDate = copyrightDate),
      (this.isbn = isbn),
      (this.numOfPages = numOfPages),
      (this.numOfCheckOuts = numOfCheckOuts),
      (this.discarded = discarded);
  }
  checkOuts(uses = 1) {
    this.numOfCheckOuts += uses;
  }
}

// Define your Manual and Novel classes here:
class Manual extends BookInformation {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numOfPages,
    numOfCheckOuts,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numOfPages,
      numOfCheckOuts,
      discarded
    );
  }
  discard(currentYear) {
    if (currentYear - this.copyrightDate > 5) {
      this.discarded = "Yes";
    } else {
      this.discarded = "No";
    }
  }
}

class Novel extends BookInformation {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numOfPages,
    numOfCheckOuts,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numOfPages,
      numOfCheckOuts,
      discarded
    );
  }
  dispose() {
    if (this.numOfCheckOuts > 100) {
      this.discarded = "Yes";
    } else {
      this.discarded = "No";
    }
  }
}
// Declare the objects for exercises 2 and 3 here:
const novelOne = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  1111111111111,
  432,
  32,
  "No"
);
const manualOne = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  1000000000000,
  1147,
  1,
  "No"
);
console.log(manualOne, novelOne);
// Code exercises 4 & 5 here:
manualOne.discard(2024);
novelOne.checkOuts(5);
console.log(manualOne, novelOne);
