import './main.scss'
import booksCollection from './books.json'

document.addEventListener('DOMContentLoaded', function(){
    const booksCate = document.getElementById('books-category') 
    const books = booksCollection.data

    books.forEach(book => {
        let bookDOM = buildBookDOM(book)
        booksCate.insertAdjacentHTML('beforeend', bookDOM)
    });
})

function buildBookDOM(book) {
    let imgbook = booksCollection.image_base_url

    return `<div class="book">
                <img src="${imgbook.concat(`${book.ImageURL}`)}">
                <div class="details">
                    <h4>${book.Title}</h4>
                    <p>${book.Authors}</p>
                    <p>${book.Format}</p>
                </div>
            </div>`
}