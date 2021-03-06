import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'



const FeedbackStats = () => {

  const {feedback}= useContext(FeedbackContext)
    let averageRating= feedback.reduce((acc, cur)=>{

         return acc+=cur.rating
    }, 0) /feedback.length

    averageRating=averageRating.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats' >
        <h4>{feedback.length} Reviews</h4>
        <h4> Average Rating: {isNaN(averageRating) ? 0: averageRating}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {

    feedback:PropTypes.array.isRequired
}

export default FeedbackStats