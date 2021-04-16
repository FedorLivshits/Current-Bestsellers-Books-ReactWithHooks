import React, {useEffect, useState} from "react"
import axios from "axios";

const REACT_BOOKS_APP_API_KEY = `Fmu44FKGd9BpwsmFi4JAd5qwxyzsQjyl`

function BooksApp() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(
                `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${REACT_BOOKS_APP_API_KEY}`
            )
            setBooks(response.data.results.books)
        }
        fetchBooks()
    }, [])
    return (
        <section className="current__books-app">

            <div className="container">
                <section className="app__inner">
                    <h1 className="title">
                        Actual books bestsellers
                    </h1>
                    <div className="current-date">
                        {new Date().toLocaleString('en', {weekday: 'long'})}
                        {" "}
                        {new Date().getDate()}
                        {" "}
                        {new Date().toLocaleString('en', {month: 'long'})}
                        {" "}
                    </div>
                    <div className="content">
                        {books.map(book => {
                                const {rank, description, title, author, book_image, buy_links, publisher} = book
                                return (
                                    <article className="book-card" key={rank}>
                                        <div className="book-img">
                                            <img src={book_image} alt={title}/>
                                        </div>
                                        <div className="book-descr">
                                            <h2 className="book-title">
                                                <span>{rank}</span>. {title}
                                            </h2>
                                            <p>By: {author}</p>
                                            <p>{description}</p>

                                        </div>
                                    </article>
                                )
                            }
                        )}
                    </div>
                </section>
            </div>
        </section>
    );
}

export default BooksApp;
