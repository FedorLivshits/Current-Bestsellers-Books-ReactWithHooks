import React, {useEffect, useState} from "react"
import axios from "axios";
import preloader from "../assets/images/preloader.svg"

const REACT_BOOKS_APP_API_KEY = `Fmu44FKGd9BpwsmFi4JAd5qwxyzsQjyl`

function BooksApp() {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const fetchBooks = async () => {
            const response = await axios.get(
                `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${REACT_BOOKS_APP_API_KEY}`
            )
            setBooks(response.data.results.books)
            setIsLoading(false)
        }
        fetchBooks()
    }, [])

    return (
        <section className="current__books-app">
            <header className="header">
                    <h1 className="title">
                        Actual <br/>
                        books <br/>
                        bestsellers<br/>
                        <div className="current-date">
                            on {new Date().toLocaleString('en', {weekday: 'long'})}
                            {" "}
                            {new Date().getDate()}
                            {" "}
                            {new Date().toLocaleString('en', {month: 'long'})}
                            {" "}
                        </div>
                    </h1>
            </header>
            <div className="container">
                {isLoading
                    ?
                    <img src={preloader} alt=""/>
                    :
                    <section className="app__inner">
                        <div className="content">
                            {books.map(book => {
                                    const {rank, description, title, author, book_image, buy_links} = book
                                    return (
                                        <article className="book-card" key={rank}>
                                            <div className="book-img">
                                                <img src={book_image} alt={title}/>
                                            </div>
                                            <div className="book-descr">
                                                <h2 className="book-title">
                                                    <span>{rank}</span>. {title}
                                                </h2>
                                                <p className="book-author">By: {author}</p>
                                                <p className="book-descr">{description}</p>
                                                <p className="book__buy-now">Buy now:</p>
                                                <ul className="buy_now">
                                                    {buy_links.map(link => {
                                                        return (
                                                            <li className="buy_now-item"><a href={link.url}>{link.name}</a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </article>
                                    )
                                }
                            )}
                        </div>
                    </section>
                }
            </div>
        </section>
    );
}

export default BooksApp;
