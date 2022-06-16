import { createContext, useState, useEffect } from "react"
import FeedbackData from "../data/FeedbackData"
import {v4 as uuidv4} from 'uuid'


const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{

    const [isLoading, setIsLoading]=useState(true)
    const [feedback, setFeedback]=useState([])
    const [feedbackEdit, setFeedbackEdit]=useState({
        item:{},
        edit:false
    })

    const deleteFeedback=(id)=>{

        if (window.confirm('Are you sure you want to delete ?')) {
            setFeedback(feedback.filter((item)=>item.id !==id))
        }
    }

    const addFeedback=(newFeedback)=>{
        newFeedback.id= uuidv4()

        setFeedback([newFeedback, ...feedback])

    }

    const updateFeedback=(id, updatedItem)=>{

         setFeedback(feedback.map((item)=>item.id=== id ?{...item, ...updatedItem}:item))

    }
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item, 
            edit:true
        })
    }


    useEffect(()=>{

        fetchFeedback()
    },[])

    const fetchFeedback= async()=>{

       const response=await fetch ('http://localhost:5000/feedback')
       const data= await response.json()
       setFeedback(data)

       setIsLoading(false)
    
    }
    return <FeedbackContext.Provider value={{ 
        feedback,
        deleteFeedback,
        addFeedback,
        isLoading,
        editFeedback,
        feedbackEdit,
        updateFeedback

        }}>

        {children}
        </FeedbackContext.Provider>
}

export default FeedbackContext