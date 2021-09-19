import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import './Cards.css'
import ThumbsUp from '../Assets/Images/thumbsUp.png'
import ThumbsDown from '../Assets/Images/thumbsDown.png'

function Cards(props) {
    const [liked, setLiked] = useState(false)
    const [likeButtonImage, setLikeButtonImage] = useState(ThumbsDown)
    const [altText, setAltText] = useState('Thumbs Up')
    const { apiCallData } = props

    const likeButtonHandler = () => {
        if(!liked){
            setLiked(true)
            setLikeButtonImage(ThumbsUp)
            setAltText('Thumbs Down')
            console.log('Liked')
            return
        }
        setLiked(false)
        setLikeButtonImage(ThumbsDown)
        setAltText('Thumbs Up')
        console.log('Not Like')
    }

    return (
        <>
            <Card>
                <Card.Header>
                   {apiCallData.copyright ? <h6>&copy; {apiCallData.copyright}</h6> : <h6>&copy; NASA</h6>}
                </Card.Header>

                {apiCallData.media_type === 'image' ? (
                    <Card.Img variant="top" src={apiCallData.hdurl} alt={apiCallData.title} />
                ) : apiCallData.media_type === 'video' ? (
                    <video src={apiCallData.url} controls="controls" autoPlay={true} />
                ) :
                    ''}

                <Card.Body>
                 <h6>{apiCallData.date}</h6>
                    <Card.Title>{apiCallData.title}</Card.Title>
                    {apiCallData.explanation}
                </Card.Body>

                    <Card.Footer>
                    <Button variant='dark' onClick={likeButtonHandler}>{!liked ? 'Like' : 'Unlike'}</Button>
                        <Card.Img src={likeButtonImage} alt={altText} />
                    </Card.Footer>
            </Card>
        </>
    )
}

export default Cards