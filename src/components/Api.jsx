import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { PlayerCard } from './Card';
import { Games } from './Games'
import {Fixtures} from './Fixtures'
import { GamesOutlined } from '@material-ui/icons';

export const Api = () => {
    const [players, setPlayers] = useState([])

    const getPlayer = async () => {
        const url = "http://127.0.0.1:8000/player/"

        const response = await fetch(url);
        const responseJson = await response.json();

        

        if (responseJson) {
            setPlayers(responseJson)
        };
    };

    useEffect(() => {
        getPlayer();

    }, [])


    return (
        <div className="container">
            <PlayerCard
                players={players}
            />
        </div>
    )
}


const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

export const getGames = () => api.get('/game').then(res => res.data)


export const getScheduleGames = () => api.get('/game').then(res => res.data)

export const getPastGames = () => api.get('/pastgames').then(res => res.data)

export const getTable = () => api.get('/table').then(res => res.data)