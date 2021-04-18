import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext";

function BookCard({books, showFullBookCard}) {
    const {theme} = useContext(ThemeContext);
    return (
        books.map(book => {
                const {rank, title, author, book_image} = book
                return (<>
                        <article className={`book-card ${theme}`} key={rank}>
                            <div className="book-img">
                                <img src={book_image} alt={title}/>
                            </div>
                            <div className="book-info">
                                <h2 className="book-title">
                                    <span>{rank}</span>. {title}
                                </h2>
                                <p className="book-author">By: {author}</p>
                                <button className={`show-more__btn  ${theme}`} onClick={() => showFullBookCard(rank)}>Show More</button>
                            </div>
                        </article>
                    </>
                )
            }
        )
    )
}


export default BookCard;