import React, {useEffect, useState} from "react"
import axios from "axios";
import preloader from "../assets/images/preloader.svg"
import BookCard from "./BookCard";
import Header from "./Header";


function BooksApp() {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const REACT_BOOKS_APP_API_KEY = `Fmu44FKGd9BpwsmFi4JAd5qwxyzsQjyl`

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
        <section className={isLoading ? "current__books-app loading" : "current__books-app"}>
            <Header/>
            <div className="container">
                <section className="app__inner">
                    {isLoading
                        ?
                        <img src={preloader} alt=""/>
                        :
                        <div className="content">
                            <BookCard books={books}/>
                            )}
                        </div>
                    }
                </section>
            </div>
        </section>
    );
}


export default BooksApp;
