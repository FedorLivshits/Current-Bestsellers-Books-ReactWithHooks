import React, {useContext, useEffect, useState} from "react"
import axios from "axios";
import preloader from "../assets/images/preloader.svg"
import BookCard from "./BookCard";
import Header from "./Header";
import {ThemeContext} from "./ThemeContext";
import FullBookCard from "./FullBookCard";
import Modal from "./Modal";
import Switcher from "./Switcher";


function BooksApp() {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [activeModal, setActiveModal] = useState(false)
    const [bookCard, setBookCard] = useState([])
    const [wantToRead, setWantToRead] = useState([])

    const {theme} = useContext(ThemeContext);

    const showFullBookCard = (rank) => {
        let book = books.filter(b => b.rank === rank)
        console.log(book)
        setBookCard(book)
        setActiveModal(true)
    }


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
        <>
            <section className={isLoading ? `current__books-app loading  ${theme}` : `current__books-app  ${theme}`}>
                <Header/>
                <div className="container">
                    {!isLoading ? <Switcher/> : ""}
                    <section className="app__inner">
                        {isLoading
                            ?
                            <img src={preloader} alt=""/>
                            :
                            <div className="content">
                                <BookCard books={books} activeModal={activeModal} setActiveModal={setActiveModal}
                                          bookCard={bookCard}
                                          setBookCard={setBookCard} showFullBookCard={showFullBookCard}/>
                            </div>
                        }
                    </section>
                </div>
                <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
                    <FullBookCard bookCard={bookCard} wantToRead={wantToRead} setWantToRead={setWantToRead}/>
                </Modal>
            </section>
        </>
    );
}

export default BooksApp;
