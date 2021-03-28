import React from 'react'
import './Contentcard.css'


const ContentCard = props => {

    return (
        <div className="Contentcard">
            <article>
                <section className="moviePoster">
                    <img src={props.Poster1} alt='movie poster' />
                </section>
                <section className="details">
                    <p>{props.Title1}</p>
                </section>
            </article>
            <article>
                <section className="moviePoster">
                    <img src={props.Poster2}  alt='movie poster' />
                </section>
                <section className="details">
                    <p>{props.Title2}</p>
                </section>
            </article>
            <article>
                <section className="moviePoster">
                    <img src={props.Poster3} alt='movie poster' />
                </section>
                <section className="details">
                    <p>{props.Title3}</p>
                </section>
            </article>
            <article>
                <section className="moviePoster">
                    <img src={props.Poster4} alt='movie poster' />
                </section>
                <section className="details">
                    <p>{props.Title4}</p>
                </section>
            </article>
            <article>
                <section className="moviePoster">
                    <img src={props.Poster5} alt='movie poster' />
                </section>
                <section className="details">
                    <p>{props.Title5}</p>
                </section>
            </article>
            <article>
                <section className="moviePoster">
                    <img src={props.Poster6} alt='movie poster' />
                </section>
                <section className="details">
                    <p>{props.Title6}</p>
                </section>
            </article>
        </div>
    )
}

export default ContentCard
