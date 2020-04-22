import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const AddMovie = ({addMovieSubmit, newMovie, setNewMovie}) => {

    const { push } = useHistory()

    const { id } = useParams()

    // const [newMovie, setNewMovie] = useState({
    //     title: '',
    //     director: '',
    //     metascore:'',
    //     stars: []
    // })

    // const handleSubmit = (e) => {
    //     axios.post("http://localhost:5000/api/movies", newMovie)
    //     console.log('Here is the new movie', newMovie)
    //     push(`/`)
    // }

    const handleChange = (e) => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === 'stars') {
            value = value.split(',')
        } 
        if (e.target.name === 'metascore') {
            value = parseInt(value, 10);
        }

        setNewMovie({
            ...newMovie,
            [e.target.name]: value
        });
    }

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/api/movies/${id}`)
    //     .then(res => {
    //         setMovie(res.data)
    //     })
    // }, [id])

    return (
        <div>
            <form onSubmit={addMovieSubmit}>
                <input type='text' name='title' onChange={handleChange} value={newMovie.title} placeholder='Title'/>
                <br/>
                <input type='text' name='director' onChange={handleChange} value={newMovie.director} placeholder='Director'/>
                <br/>
                <input type='text' name='metascore' onChange={handleChange} value={newMovie.metascore} placeholder='Metascore'/>
                <br/>
                <input type='text' name='star' onChange={handleChange}  placeholder='Stars'/>
                <br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default AddMovie