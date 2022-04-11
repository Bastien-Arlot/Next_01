const books = [
    {title: 'Gatsby le magnifique', id: 133712, rented: 39},
    {title: 'A la recherche du temps,perdu', id: 237634, rented: 28},
    {title: 'Orgueil & Préjugés', id: 873495, rented: 67},
    {title: 'Les frères Karamazov', id: 450911, rented: 55},
    {title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15},
    {title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45},
    {title: 'Et on tuera tous les affreux', id: 67565, rented: 36},
    {title: 'Le meilleur des mondes', id: 88847, rented: 58},
    {title: 'La disparition', id: 364445, rented: 33},
    {title: 'La lune seule le sait', id: 63541, rented: 43},
    {title: 'Voyage au centre de la Terre', id: 4656388, rented: 38},
    {title: 'Guerre et Paix', id: 748147, rented: 19}
];
console.log('The titles of our books in our CDI are');
for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
}
books.sort((a, b) => (a.rented > b.rented) ? 1 : ((b.rented > a.rented) ? -1 : 0));
console.log(`The book which has been the more rented is ${books[books.length - 1].title}`);
console.log(`the book which has been the less rented is ${books[0].title}`);

for (let i = 0; i < books.length; i++) {
    if (books[i].id === 133712) {
        console.log(`${books[i].title} will be deleted`);
        delete books[i];
        console.log("the books with the id of 133712 has been deleted");
    }
    ;
}
;

console.table(books);
