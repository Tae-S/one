import React from 'react'
import { useState } from 'react'
import {send} from 'emailjs-com'
import Loader from './Loader'
import './contactStyles.css'
// import Page3 from './Page3'

function Contact()
{
    const [loading,setLoading] = useState(true)
    const id = setTimeout(()=>{
        setLoading(false)
        clearTimeout(id)
    },Math.random()*6000)
    const [popsv,setPopsv] = useState(false) //sent!
    const [poplv,setPoplv] = useState(false) //sending...
    const [popfv,setPopfv] = useState(false) //failed :(
    const [content,setContent] = useState({
        email : '',
        message : ''
    })
    const onSubmit = (e)=>{
        e.preventDefault()
        setPoplv(true)
        send(
            'service_2b4wgnh',
            'template_of2rh7h',
            content,
            'user_9yWzxHoRcTD7vr8VRveK2'
        )
        .then((res)=>{
            console.log('Successfully sent!')
            setPoplv(false)
            setPopsv(true)
            const id = setTimeout(()=>{
                setPopsv((prevState)=>!prevState)
                clearTimeout(id)
            },2000)
        })
        .catch((err)=>{
            console.log('Could not send.', err )
            setPoplv(false)
            setPopfv(true)
            const id = setTimeout(()=>{
                setPopfv((prevState)=>!prevState)
                clearTimeout(id)
            },3000)
        })
    }

    const onChange = (e)=>{
        setContent({...content,[e.target.name] : e.target.value})
    }

    const onClick = (e)=>{
        setPoplv(true)
        setContent({
            email : 'Anonymous',
            message : 'Great work here!'
        })
        send(
            'service_2b4wgnh',
            'template_of2rh7h',
            content.message?content:{email:'Anonymous',message:'This is a cool website!'},
            'user_9yWzxHoRcTD7vr8VRveK2'
        )
        .then((res)=>{
            console.log('Successfully sent!')
            setPoplv(false)
            setPopsv(true)
            const id = setTimeout(()=>{
                setPopsv((prevState)=>!prevState)
                clearTimeout(id)
            },2000)
        })
        .catch((err)=>{
            console.log('Could not send.', err )
            setPoplv(false)
            setPopfv(true)
            const id = setTimeout(()=>{
                setPopfv((prevState)=>!prevState)
                clearTimeout(id)
            },3000)
        })
    }

    const [tipv,setTipv] = useState(false)
    

    return(
        <>
        {loading?<Loader/>
        :
        <>
            <div className='pop-success' style={{'visibility':popsv?'visible':'hidden'}}>Message sent!</div>
            <div className='pop-sending' style={{'visibility':poplv?'visible':'hidden'}}>Sending<span> . . . </span></div>
            <div className='pop-failure' style={{'visibility':popfv?'visibile':'hidden'}}>Message could not be sent. Please reach out to mohitc.bits@gmail.com</div>
            <div className='body'>
                <div className='contact-container'>
                    <div className='title'>Contact</div>
                    <form method="POST" onSubmit={onSubmit}>
                    <div className='fields-container'>
                        <textarea onChange={onChange} name='message' className='field-input message' placeholder='your message here'></textarea>
                        <input onChange={onChange} name='email' type='email' className=' field-input email' placeholder="email"/>
                        <input onMouseEnter={()=>setTipv(true)} onMouseLeave={()=>setTipv(false)}  onClick={onClick} type='button' className='compliment btn' value='compliment'/>
                        <span style={{'visibility':tipv?'visible':'hidden'}} className='compliment-tip'>Send an Anonymous compliment! No need for other fields</span>
                    </div>
                    <input type='submit' className='submit btn' value='send'/>
                    </form>
                </div>
            </div>
            </>
    }</>
    )
}

export default Contact