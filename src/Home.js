import React, { useState, useEffect } from 'react'
import Cards from './Components/Cards'

function Home() {
    const [liked, setLiked] = useState(false)
    const [nasaData, setNasaData] = useState({})
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const API_KEY = [process.env.REACT_APP_NASA_API_KEY]

    let nasaCards;


    const getNasaImages = async () => {
        if (startDate && endDate) {
            let res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`
            );
            const data = await res.json();
            // console.log(data)
            setNasaData(data);
        }
        if (startDate && !endDate) {
            let res = await fetch(
                `https://api.nasa.gov/planetary/apod?date=${startDate}&api_key=${API_KEY}`
            );
            const data = await res.json();
            // console.log(data)
            setNasaData(data);
        }
        else return
    }

    const setStartDateHandler = (e) => {
        setStartDate(e.target.value)
    }

    const setEndDateHandler = (e) => {
        setEndDate(e.target.value)
    }

    const submitButtonHAndler = () => {
        getNasaImages()
        nasaCards = (
            <Cards apiCallData={nasaData} />
        )
    }
    console.log(nasaData)
    console.log(startDate, endDate)
    return (
        <div>
            <h2>Enter a starting date</h2>
            <input type='date' name='startDate' onChange={setStartDateHandler}></input>
            <br />

            {startDate ?
                (
                    <>
                        <h2>Enter an ending date (Optional)</h2>
                        <input type='date' name='endDate' onChange={setEndDateHandler}></input>
                        <br />
                        <button type='submit' onClick={submitButtonHAndler}>Get Images</button>
                    </>
                )
                : ''}
            {nasaData.copyright ? (
                <Cards apiCallData={nasaData} />
            ) : nasaData.length ? (
                nasaData.map((data) => (
                    <Cards apiCallData={data} />
                ))
            ) : ''}

        </div>
    )
}

export default Home
