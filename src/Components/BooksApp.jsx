import React, {useEffect, useState} from "react"
import axios from "axios";
import preloader from "../assets/images/preloader.svg"
import BookCard from "./BookCard";
import Header from "./Header";


function BooksApp() {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [activeModal, setActiveModal] = useState(false)
    const[bookCard, setBookCard] = useState([])

    const showFullBookCard = (rank) =>{
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
            console.log(response.data.results.books)
            setBooks(response.data.results.books)
            setIsLoading(false)
        }
        fetchBooks()
    }, [])

    return (
        <>
        <section className={isLoading ? "current__books-app loading" : "current__books-app"}>
            <Header/>
            <div className="container">
                <section className="app__inner">
                    {isLoading
                        ?
                        <img src={preloader} alt=""/>
                        :
                        <div className="content">
                            <BookCard books={books} activeModal={activeModal} setActiveModal={setActiveModal} bookCard={bookCard}
                                      setBookCard={setBookCard} showFullBookCard={showFullBookCard}/>
                        </div>
                    }
                </section>
            </div>
            <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
              <FullBookCard bookCard={bookCard}/>
            </Modal>
        </section>
    </>
    );
}

function Modal({activeModal, setActiveModal, children}) {
    return (
        <div className={activeModal ? "modal active" : "modal"} onClick={() => setActiveModal(false)}>
            <div className="modal__content" onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

function FullBookCard({bookCard}) {
    if (bookCard.length) {
        const {rank, description, title, author, book_image, buy_links, weeks_on_list, publisher} = bookCard[0]
        return (
            <>
            <h2 className="book-title-full">
                <span>{rank}</span>. {title}
            </h2>
            <article className="book-card full" key={rank}>
                <div className="book-img">
                    <img src={book_image} alt={title}/>
                </div>
                <div className="book-info-full">
                    <p className="book-author "><b>Author:</b> {author}</p>
                    <p className="book-author "><b>Publisher:</b> {publisher}</p>
                    <p className="book-desc ">{description}</p>
                    <p className="weeks-on-list "><b>Weeks on list:</b> {weeks_on_list}</p>
                    <p className="book__buy-now ">Buy now:</p>
                    <ul className="buy_now ">
                        {buy_links.map(link => {
                            return (
                                <li key={link.url} className="buy_now-item"><a
                                    href={link.url}>{link.name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </article>
                </>
        )
    }
    if (!bookCard.length) {
        return ""
    }
}



export default BooksApp;
