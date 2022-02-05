import './homeStyles.css'
import php from './../imgs/social/php.png'
import laravel from './../imgs/social/laravel.png'
import js from './../imgs/social/js.png'
import node from './../imgs/social/node.png'
import html from './../imgs/social/html5.png'
import css from './../imgs/social/css3.png'
import reactjs from './../imgs/social/reactjs.png'
import sass from './../imgs/social/sass.png'
import threejs from './../imgs/social/threejs.png'
import figma from './../imgs/social/figma-two.png'
import ps from './../imgs/social/ps.png'
import ai from './../imgs/social/ai.png'
import git from './../imgs/social/git-two.png'
import mongodb from './../imgs/social/mongodb.png'
import mysql from './../imgs/social/mysql.png'
import pandas from './../imgs/social/pandas.png'
import numpy from './../imgs/social/numpy.png'
import python from './../imgs/social/python.png'
import cpp from './../imgs/social/cpp.png'
import csharp from './../imgs/social/csharp.png'

import Loader from './Loader'
import { useState } from 'react'

function Home()
{
    const loadingTime = Math.random()*6000
    const [loading,setLoading] = useState(true)
    const id = setTimeout(()=>{
        setLoading(false)
        clearTimeout(id)
    },loadingTime)
    window.addEventListener('DOMContentLoaded',initialTimeout)
    function initialTimeout(){
        setTimeout(onDOMContentLoaded,loadingTime+100)
    }
    function onDOMContentLoaded(){
        //secondarycursor
        const mouse = {x:0,y:0}
        const cursor = document.querySelector('.secondary-cursor')
        const name = document.querySelector('.info-name')
        //console.log(name.getClientRects())
        const dx = name.getClientRects()[0].x
        const dy = name.getClientRects()[0].y
        const dw = name.getClientRects()[0].width
        const dh = name.getClientRects()[0].height
        window.addEventListener('mousemove',(e)=>{
            mouse.x = e.x
            mouse.y = e.y
            if(mouse.x >= dx && mouse.x <= dx+dw && mouse.y>=dy && mouse.y <= dy+dh){
                cursor.style.opacity = '1'
                cursor.style.left = `${mouse.x -80}px`
                cursor.style.top = `${mouse.y - 80}px`
            }
            else{
                cursor.style.opacity = 0
            }
            
        })
        
        //typing effect
        let info = document.querySelector('.info-desc')
        info.innerHTML=''
        const infos = ['I am a fullstack developer.','Experience of 3-4 years','Let us get in touch!','My pronouns are he/him','Designer ready to go!','If you like my profile, be sure to drop in a compliment :)','Before you ask, yes I love cats!','Fetching data...','This is NOT a loop','{TimeFlies? Code never dies : null}','...']
        let time = 1000
        let letterId
        let isRunning = false
        const id = setInterval(()=>{
            //clearInterval(letterId)
            if(!isRunning){
                info.innerHTML=''
                isRunning = true
                const message = infos[Math.round(Math.random()*10)]
                const letters = message.split('')
                time = letters.length * 300

                //console.log(letters,letters.length)
                let count = 0
                letterId = setInterval(()=>{
                    info = document.querySelector('.info-desc')
                    //console.log(count,'count')
                    if(count === letters.length){
                        
                        isRunning = false
                        //console.log('here because',count,'=',letters.length)
                        clearInterval(letterId)
                    }
                    if(count < letters.length)info.innerHTML+=letters[count]
                    count++
                },300*Math.random()+50)
                count = 0
                //clearInterval(id)
        }
            
        },time+3500)
    }
    


    
    const onMouseEnter = (skill)=>{
        const messageBox = document.querySelector('.message-box')    
        switch (skill) {
            case 'figma':
                messageBox.innerHTML = 'Figma design conversion'
                break
            case 'ps':
                messageBox.innerHTML = 'Photoshop to HTML from psd files'
                break
            case 'ai':
                messageBox.innerHTML = 'Adobe Illustrator'
                break
            case 'php':
                messageBox.innerHTML = 'Php'
                break
            case 'laravel':
                messageBox.innerHTML = 'Laravel'
                break
            case 'js':
                messageBox.innerHTML = 'Javascript(ES6), Graphql(with apollo-server)'
                break
            case 'node':
                messageBox.innerHTML = 'NodeJS (with express)'
                break
            case 'html':
                messageBox.innerHTML = 'HTML5'
                break
            case 'css':
                messageBox.innerHTML = 'CSS3'
                break
            case 'reactjs':
                messageBox.innerHTML = 'ReactJs, React-router'
                break
            case 'sass':
                messageBox.innerHTML = 'Sass for Scss'
                break
            case 'threejs':
                messageBox.innerHTML = 'Threejs and WebGL shaders'
                break
            case 'git':
                messageBox.innerHTML = 'Git version control'
                break
            case 'mongodb':
                messageBox.innerHTML = 'MongoDB'
                break
            case 'mysql':
                messageBox.innerHTML = 'MySql (also with phpAdmin)'
                break
            case 'pandas':
                messageBox.innerHTML = 'Pandas for Data Analytics'
                break
            case 'numpy':
                messageBox.innerHTML = 'Numpy basics'
                break
            case 'python':
                messageBox.innerHTML = 'Python3'
                break
            case 'cpp':
                messageBox.innerHTML = 'C++'
                break
            case 'csharp':
                messageBox.innerHTML = 'C#'
                break
            default:
                console.log('boo')
                break
        }
    }

    const onMouseLeave = ()=>{
        const messageBox = document.querySelector('.message-box')
        messageBox.innerHTML = ''
    }

    return(
        <>
        {loading?<Loader/>
            :(
            <>
        <div className='container'>
            <div className='info'>
                <p className='info-start'>Hi, I am</p>
                <h2 className='info-name'><strong className='strong-name'>Mohit Chhikara</strong></h2>
                <p className='info-desc'> I am a fullstack developer. </p>
            </div>
            <section id='skills'>
                <p className='skills-title'>SKILLS</p>
                <p className='message-box'></p>
                <div className='skills-container'>
                    <div className='design-container'>
                        <p className='design-title'>Design</p>
                        <div className='design'>
                            <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('figma')}} className='skill-logo figma' src={figma}/></div>
                            <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('ps')}} className='skill-logo ps' src={ps}/></div>
                            <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('ai')}} className='skill-logo ai' src={ai}/></div>
                        </div>
                    </div>
                    <div className='dev-container'>
                        <p className='dev-title'>Development</p>
                            <div className='dev'>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('php')}} className='skill-logo php' src={php}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('laravel')}} className='skill-logo laravel' src={laravel}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('js')}} className='skill-logo js' src={js}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('node')}} className='skill-logo node' src={node}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('reactjs')}} className='skill-logo reactjs' src={reactjs}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('html')}} className='skill-logo html' src={html}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('css')}} className='skill-logo css' src={css}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('sass')}} className='skill-logo sass' src={sass}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('mongodb')}} className='skill-logo mongodb' src={mongodb}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('mysql')}} className='skill-logo mysql' src={mysql}/></div>
                                <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('threejs')}} className='skill-logo threejs' src={threejs}/></div>
                        </div>
                    </div>
                    <div className='misc-container'>
                        <p className='misc-title'>Miscellaneous</p>
                        <div className='misc'>
                            <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('git')}} className='skill-logo git' src={git}/></div>
                            <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('cpp')}} className='skill-logo cpp' src={cpp}/></div>
                            <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('csharp')}} className='skill-logo csharp' src={csharp}/></div>
                            <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('python')}} className='skill-logo python' src={python}/></div>
                            <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('numpy')}} className='skill-logo numpy' src={numpy}/></div>
                            <div><img onMouseLeave={()=>onMouseLeave()} onMouseEnter={()=>{onMouseEnter('pandas')}} className='skill-logo pandas' src={pandas}/></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div className='secondary-cursor'></div>
        <svg>
                <defs>
                    <filter id='squiggley-cursor1'>
                        <feTurbulence baseFrequency='0.09' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='70' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggley-cursor2'>
                        <feTurbulence baseFrequency='0.04' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='50' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggley-cursor3'>
                        <feTurbulence baseFrequency='0.06' type='turbulence' numOctaves='3' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='70' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggley-cursor4'>
                        <feTurbulence baseFrequency='0.1' type='turbulence' numOctaves='3' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='70' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggley-cursor5'>
                        <feTurbulence baseFrequency='0.08' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='70' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggley-cursor6'>
                        <feTurbulence baseFrequency='0.1' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='70' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                 </defs>
            </svg>
        </>)
        }</>
    )
}

export default Home