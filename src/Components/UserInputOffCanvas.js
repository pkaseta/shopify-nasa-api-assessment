import React, { useState } from 'react'
import './UserInputOffCanvas.css'
import { Offcanvas, Button } from 'react-bootstrap';
import {notify} from './ErrorToast'

function UserInputOffCanvas(props) {
    const { nasaData, setStartDateHandler, setEndDateHandler, setStartDate, setEndDate, startDate, endDate, submitButtonHAndler,} = props
    const [show, setShow] = useState(false);
    const [data, setData] = useState('')

    let todaysDate = new Date().getTime(),
        enteredStartDate = new Date(startDate).getTime(),
        enteredEndDate = new Date(endDate).getTime();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(todaysDate < enteredStartDate || todaysDate < enteredEndDate){
        setStartDate('')
        setEndDate('')
        return notify('Sorry we cannot see into the future')
    }

    return (
        <div>
            <Button variant="dark" onClick={handleShow}>
                Search Dates
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement='bottom'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Set Date Parameters (All dates must be todays date or prior)</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <h2>Enter a starting date</h2>
                        <input type='date' className='startDate-input' onChange={setStartDateHandler} />
                    </div>

                    {startDate ?
                        (
                            <div>
                                <h2>Enter an ending date (Optional)</h2>
                                <input type='date' name='endDate' onChange={setEndDateHandler}>
                                </input>
                                <br />
                                <Button variant='dark' type='submit' onClick={() => {
                                    submitButtonHAndler()
                                    handleClose()
                                }}>Get Images</Button>
                            </div>
                        )
                        : ''}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default UserInputOffCanvas
