let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];
function firstLetterOfNames (string) {
    return string[0];
}
// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(firstLetterOfNames);

console.log(firstInitials);
