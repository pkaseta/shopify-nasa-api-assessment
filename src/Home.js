import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './Home.css'
import Cards from './Components/Cards'
import NavBar from './Components/NavBar'
import WelcomeDisplay from './Components/WelcomeDisplay'
import WaitingAstronautImg from '../src/Assets/Images/waitingAstronaut.png'
import LoadingSpinner from './Components/LoadingSpinner'

function Home() {
    const [nasaData, setNasaData] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [welcomeDisplay, setWelcomeDisplay] = useState(true)
    const [loadingDisplay, setLoadingDisplay] = useState(false)

    const API_KEY = [process.env.REACT_APP_NASA_API_KEY]

    const getNasaImages = async () => {
        setLoadingDisplay(true)
        if (startDate && endDate) {
            let res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`
            );
            const data = await res.json();
            // console.log(data)
            setNasaData(data);
            setLoadingDisplay(false)
        }
        if (startDate && !endDate) {
            setLoadingDisplay(true)
            let res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${startDate}`
            );
            const data = await res.json();
            // console.log(data)
            setNasaData(data);
            setLoadingDisplay(false)
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
        setWelcomeDisplay(false)
    }
    console.log(nasaData)
    return (
        <>
            <NavBar />
            {loadingDisplay ?
                (
                    <div className='loading-display'>
                        <h1>Please Wait...</h1>
                        <div className='load-screen'>
                            <div className='waiting-image'>
                                <img src={WaitingAstronautImg} alt="Cartoon Astronaut" />
                            </div>
                            <div className='loading-spinner'>
                                <LoadingSpinner />
                            </div>
                        </div>
                    </div>
                ) :
                <>
                    {welcomeDisplay && !nasaData.length && !nasaData.image ? (
                        <WelcomeDisplay
                            setStartDateHandler={setStartDateHandler}
                            setEndDateHandler={setEndDateHandler}
                            endDate={endDate}
                            startDate={startDate}
                            submitButtonHAndler={submitButtonHAndler}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                    ) : ''}

                    {nasaData && !nasaData.length ? (
                        <div className='home-container-main'>
                        <div className='reset-button-container'>
                            <Button variant='light' onClick={()=> window.location.reload()}> Restart </Button>
                        </div>
                            <Cards apiCallData={nasaData} />
                        </div>
                    ) : nasaData.length ? (
                        <div className='home-container-main'>
                          <div className='reset-button-container'>
                            <Button variant='light' onClick={()=> window.location.reload()}> Restart </Button>
                        </div>
                            {nasaData.map((data) => (
                                <Cards apiCallData={data} />
                            ))}
                        </div>
                    )
                        : ''}
                </>
            }
        </>
    )
}

export default Home
