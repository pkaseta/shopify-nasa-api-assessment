import React from 'react'
import './WelcomeDisplay.css'
import UserInputOffCanvas from './UserInputOffCanvas'

function WelcomeDisplay(props) {
    const { setStartDateHandler, setEndDateHandler,setStartDate, setEndDate, startDate, endDate, submitButtonHAndler } = props

    return (
        <div>
            <div className='welcome-div'>
                <div className='welcome-div-inner-container'>
                    <p>Welcome to Spacetagram!</p>
                    <p>View the Astronomy pictures/videos of the day since 1996</p>
                    <div className='offCanvas-button-container'>
                        <UserInputOffCanvas
                            setStartDateHandler={setStartDateHandler}
                            setEndDateHandler={setEndDateHandler}
                            startDate={startDate}
                            endDate={endDate}
                            submitButtonHAndler={submitButtonHAndler}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeDisplay
