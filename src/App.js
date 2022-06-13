import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackItem from './components/FeedbackItem'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'


const App=()=>{

    const [feedback, setFeedback]=useState(FeedbackData)

      
    return ( 
        <FeedbackProvider>
        <Router>
        <Header/>
        <div className='container'>
            <Routes>
        <Route exact path='/' element={
            <>
             <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats/>   
        <FeedbackList  />
            </>
        }>
       
        </Route>
        
        <Route path='/about' element={<AboutPage/>}/>
         </Routes>
        <AboutIconLink />
        </div>

        </Router>
        </FeedbackProvider>
    )
}

export default App