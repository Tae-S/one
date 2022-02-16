import './mobNav2Styles.css'
import Resume from './../../Resume.pdf'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function MobNav2()
{
    // let isOnPage = false
    // let isOnPageIndex = 0
    const [isMob,setMob] = useState(false)
    useEffect(()=>{
        if(window.matchMedia("(any-pointer: coarse)").matches) setMob(true)
    },[])
    
    const onMouseEnter = (e,index)=>{
        console.log('span clicked')
        const containers = document.querySelectorAll('.mob-navbar-li')
        let container = containers[index-1]
        const icon = container.querySelector('ion-icon')
        const text = container.querySelector('.mob-token-link')
        // container.classList.remove('mob-navbar-li-anim')
        // text.classList.remove('mob-hide')
        // if(isOnPage) return
        console.log(icon,text.textContent)
       
        
        icon.style.setProperty('--icon2-y','-1.8em')
        icon.style.setProperty('--icon2-color','#222')
        for(let i=0; i<4; i++){
            if(i !== index-1){
                // console.log(containers[i].querySelector('ion-icon'))
                containers[i].classList.add('mob-navbar-li-anim')
                containers[i].querySelector('ion-icon').style.setProperty('--icon2-y','0em')
                containers[i].querySelector('ion-icon').style.setProperty('--icon2-color','#888')
                containers[i].querySelector('.mob-token-link').classList.add('mob-hide')    
            }else{
                containers[i].classList.remove('mob-navbar-li-anim')
                containers[i].querySelector('.mob-token-link').classList.remove('mob-hide')
                containers[i].querySelector('ion-icon').style.setProperty('--icon2-y','-1.8em')
                containers[i].querySelector('ion-icon').style.setProperty('--icon2-color','#222')
            }
            
        }
        if(index === 1){
            document.documentElement.style.setProperty('--slider-x','5.7em')
            
        }
        else if(index === 2){
            document.documentElement.style.setProperty('--slider-x','15.5em')
            

        }
        else if(index === 3){
            document.documentElement.style.setProperty('--slider-x','26.3em')
            
        }
        else if(index === 4){
            document.documentElement.style.setProperty('--slider-x','37.5em')
            
            
        }
    }
    const onMouseLeave = (e,index)=>{
        const container = e.target
        const icon = container.querySelector('ion-icon')
        const text = container.querySelector('.mob-token-link')
        // if(index === isOnPageIndex) return
        container.classList.add('mob-navbar-li-anim')
        text.classList.add('mob-hide')
        
        // if(isOnPage) return
        icon.style.setProperty('--icon2-y','0em')
        icon.style.setProperty('--icon2-color','#888')
        
        if(index === 1){
            document.documentElement.style.setProperty('--slider-x','5.8em')
        }
        else if(index === 2){
            document.documentElement.style.setProperty('--slider-x','15.6em')
        }
        else if(index === 3){
            document.documentElement.style.setProperty('--slider-x','26.4em')
        }
        else if(index === 4){
            document.documentElement.style.setProperty('--slider-x','37.6em')
        }
    }
    const onClick = (e,index)=>{
        console.log('clicked')
        const containers = document.querySelectorAll('.mob-navbar-li')
        let container = containers[index-1]
        const icon = container.querySelector('ion-icon')
        const text = container.querySelector('.mob-token-link')
        container.classList.remove('mob-navbar-li-anim')
        // isOnPage = !isOnPage
        
        text.classList.remove('mob-hide')
        icon.style.setProperty('--icon2-y','-2.2em')
        icon.style.setProperty('--icon2-color','#222')
        // isOnPageIndex = index
        // if(!isOnPage) isOnPageIndex = 0
        
    }
    const linkStyles = {
        'textDecoration':'none',
        'fontWeight':'700',
        'color':`${isMob?'rgb(41, 211, 98)':'color:rgb(248, 90, 62)'}`,
        'zIndex':'1',
        'position':'relative'
    }
    const onMouseEnter2 = (e,index)=>{
        return
    }
    const onMouseLeave2 = (e,index)=>{
        return
    }
    return(
        <>
            
            <div className='mob-nav-container'>
                <div className='mob-slider'></div>
                <ul className='mob-navbar-ul' style={{'width':window.innerwidth}}>
                    <li onMouseLeave={(e)=>{onMouseLeave2(e,1)}} className='mob-navbar-li mob-navbar-li-anim'><span onClick={(e)=>onMouseEnter(e,1)}><ion-icon  style={{'--icon2-color':'#888','--icon2-y':'0em'}} name="home-outline" className='mob-icon'></ion-icon></span><Link className='mob-hide mob-token-link' style={linkStyles} to='/'>Home</Link></li>
                    <li onMouseLeave={(e)=>{onMouseLeave2(e,2)}} className='mob-navbar-li mob-navbar-li-anim'><span onClick={(e)=>onMouseEnter(e,2)}><ion-icon style={{'--icon2-color':'#888','--icon2-y':'0em'}} className='mob-icon' name="layers-outline"></ion-icon></span><a className='mob-hide mob-link mob-token-link' href='/#skills'>Skills</a></li>
                    <li onMouseLeave={(e)=>{onMouseLeave2(e,3)}} className='mob-navbar-li mob-navbar-li-anim'><span onClick={(e)=>onMouseEnter(e,3)}><ion-icon style={{'--icon2-color':'#888','--icon2-y':'0em'}} className='mob-icon' name="mail-outline"></ion-icon></span><Link className='mob-hide mob-token-link' style={linkStyles} to='/contact'>Contact</Link></li>
                    <li onMouseLeave={(e)=>{onMouseLeave2(e,4)}} className='mob-navbar-li mob-navbar-li-anim'><span onClick={(e)=>onMouseEnter(e,4)}><ion-icon style={{'--icon2-color':'#888','--icon2-y':'0em'}} className='mob-icon' name="document-text-outline"></ion-icon></span><a style={{ 'color' : 'rgb(41, 211, 98)','textDecoration': 'none','fontWeight':'700'}} className="mob-hide mob-res-link mob-token-link" href={Resume} download="Resume_mohit" target="_blank">Resume</a></li>
                </ul>
                
            </div>
            <svg>
                <defs>
                    
                    <filter id='mob-nav-filter0'>
                        <feTurbulence baseFrequency='0.065' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob-nav-filter1'>
                        <feTurbulence baseFrequency='0.05' type='turbulence' numOctaves='12' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob-nav-filter2'>
                        <feTurbulence baseFrequency='0.035' type='turbulence' numOctaves='12' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob-nav-filter3'>
                        <feTurbulence baseFrequency='0.7' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-2' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob-nav-filter4'>
                        <feTurbulence baseFrequency='0.565' type='fractalNoise' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='2' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob-nav-filter5'>
                        <feTurbulence baseFrequency='0.95' type='fractalNoise' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='2' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob-nav-filter6'>
                        <feTurbulence baseFrequency='0.19' type='turbulence' numOctaves='12' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob-nav-filter7'>
                        <feTurbulence baseFrequency='0.0019' type='turbulence' numOctaves='12' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    
                </defs>
            </svg>
            
        </>     
    )
}

export default MobNav2