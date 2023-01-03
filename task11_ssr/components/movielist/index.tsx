import React, {useContext, useEffect} from "react";
import {Movie} from "../../api";
import {Card, CardGroup, Col, Container, Row} from "react-bootstrap";


type MovieListProps = {
    movies: Movie[];
}

export const MovieList: React.FC<MovieListProps> = (props: MovieListProps) => {

    if(props.movies === null || props.movies === undefined){
        return <>There is no movies</>
    }

    const styles = {
        card: {
            padding: '10px',
            width: '350px',
            height: '450px',
        },
        cardImage: {
            objectFit: 'cover',
            borderRadius: 55,
            width: '200px',
            height: '350px',
        }
    }

    return (
        <>
            {
                    props.movies.map(m =>
                        <Card key={m.id} style={styles.card}>
                            <Card.Img variant="top"  src={m.posterPath} style={styles.cardImage} />
                            <Card.Body>
                                <Card.Title>{m.title}</Card.Title>
                                <Card.Text>
                                    {m.releaseDate}
                                </Card.Text>
                                <Card.Text>
                                    {m.genres?.join(", ")}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
            }
        </>
    );

};
