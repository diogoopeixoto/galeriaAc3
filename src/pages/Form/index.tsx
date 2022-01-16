
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import './styles.css';

function Form() {
    const movie = {
        id: 1,
        url: "https://www.youtube.com/watch?v=yjgLLQvESzU&t=4s",
        title: "Titulo",
        count: 2,
        score: 4.5
    };

    return (
        <div className="dsmovie-form-container">
             
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=yjgLLQvESzU&t=4s'
                    width='100%'
                    height='100%'

                />
            
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>

                </Link>
            </div >
        </div >
        </div>
    );

}
export default Form;