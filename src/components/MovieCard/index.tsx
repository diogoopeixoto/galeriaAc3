import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import './styles.css';
function MovieCard() {

    const movie = {
        id: 1,
        url: "https://www.youtube.com/watch?v=yjgLLQvESzU&t=4s",
        title: "Titulo",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=yjgLLQvESzU&t=4s'
                    width='100%'
                    height='100%'

                />
                 <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            
                </div>

           
            </div>
        </div>
    );
}

export default MovieCard;

