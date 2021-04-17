import React from "react"

function BookCard({books}) {
    return (
        books.map(book => {
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
                                        <li className="buy_now-item"><a
                                            href={link.url}>{link.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </article>
                )
            }
        )
    )
}

export default BookCard;