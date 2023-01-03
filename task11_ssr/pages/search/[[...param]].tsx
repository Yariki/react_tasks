import React, {useContext, useEffect} from "react";
import {Movie, MoviesGetRequest,
    MovieApi,
    MoviesGetSearchByEnum,
    MoviesCreateRequest,
    MoviesUpdateByIdRequest,
    MoviesDeleteByIdRequest,} from "../../api";
import {Col, Container, Row} from "react-bootstrap";
import {useRouter} from "next/router";
import {SelectedContext, SelectedContextType} from "../../components/context/SelectedContext";
import {GetServerSideProps} from "next";
import {MovieList} from "../../components/movielist";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const movies = await getMovies(context.params?.param as string);

    return {
        props: {
            movies: movies
        }
    }
}


async function getMovies(param: string): Promise<Movie[] | undefined> {
    const api = new MovieApi();
    const request: MoviesGetRequest = {
        searchBy: MoviesGetSearchByEnum.Title,
        search: param
    };

    try{
        const response = await api.moviesGet(request);

        return response.data;

    }catch (e) {
        console.log(e);
    }

    return [];
}

type SearchProps = {
    movies: Movie[]
}
const Search: React.FC<SearchProps> = (props: SearchProps) => {

    const router = useRouter();

    const {param} = router.query;

    const [search, setSearch] = React.useState<string>(param as string);
    const [movies, setMovies] = React.useState<Movie[]>(props.movies);



    useEffect(() => {

        setSearch(param as string);

        getMovies(param as string)
            .then((movies) => {
                    setMovies(movies as Movie[])
                }
            );

    }, [param]);

    const {movie, setMovie} = useContext(
        SelectedContext
    ) as SelectedContextType;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const keyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode !== 13) return;
        router.push(`/search/${search}`);
    };

    const clickHandle = (e: any) => {
        router.push(`/search/${search}`);
    }


    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <div className="form-control">
                            <input   id="search"
                                     name="search"
                                     className="input"
                                     type="text"
                                     placeholder="Search"
                                     value={search}
                                     onChange={onChange}
                                     onKeyDown={keyDownHandle} />
                            <button onClick={clickHandle} className="btn btn-primary" >Search</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                 <MovieList movies={movies} />
                </Row>
            </Container>
        </>
    );

}

export default Search;

