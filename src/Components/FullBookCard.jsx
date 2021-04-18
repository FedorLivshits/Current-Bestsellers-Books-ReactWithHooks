import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext";

function FullBookCard({bookCard}) {
    const {theme} = useContext(ThemeContext);
    if (bookCard.length) {
        const {rank, description, title, author, book_image, buy_links, weeks_on_list, publisher} = bookCard[0]
        return (
            <>
                <h2 className={`book-title-full  ${theme}`}>
                    <span>{rank}</span>. {title}
                </h2>
                <article className={`book-card full ${theme}`} key={rank}>
                    <div className="book-img">
                        <img className="img-full" src={book_image} alt={title}/>
                        <button className={`default__app-btn ${theme}`} onClick={() => {
                            console.log("Фича в процессе")
                        }}>Want to read
                        </button>
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
                                        className={`${theme}`} href={link.url}>{link.name}</a>
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

export default FullBookCard