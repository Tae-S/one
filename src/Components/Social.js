import './socialStyles.css'
import git from './../imgs/social/git.png'
import google from './../imgs/social/google-one.png'
import codepen from './../imgs/social/codepen-one.png'
import whatsapp from './../imgs/social/whatsapp.png'
import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'

function Social()
{
    // const [path,setPath] = useState()
    window.addEventListener('scroll',handleScroll)
    function handleScroll(){
        const socialContainer = document.querySelector('.social-container')
        const socialArrow = document.querySelector('.social-arrow')
        if(window.scrollY > 2){
            // console.log('here')
            

            socialContainer.style.transform = 'translateX(-10em)'
            socialContainer.style.opacity = '0'
            socialArrow.style.transform = 'translateX(-2em)'

            document.documentElement.style.setProperty('--social-arrow-dir','1')

        }
        else{
            socialContainer.style.opacity = '1'
            socialContainer.style.transform = 'none'
            socialArrow.style.transform = 'scaleX(-1) translateX(0em)'

            document.documentElement.style.setProperty('--social-arrow-dir','-1')
        }
    }
    if(window.matchMedia("(any-pointer: coarse)").matches) {
        console.log('touch device')
    }else{
        console.log('mouse/trackpad is being used')
        window.removeEventListener('scroll',handleScroll)
    }
    const onClick = ()=>{
        const socialContainer = document.querySelector('.social-container')
        const socialArrow = document.querySelector('.social-arrow')
        let arrowDir = document.documentElement.style.getPropertyValue('--social-arrow-dir')
        if(arrowDir === '-1'){
            socialContainer.style.transform = 'translateX(-10em)'
            socialContainer.style.opacity = '0'
            socialArrow.style.transform = 'translateX(-2em)'
            document.documentElement.style.setProperty('--social-arrow-dir','1')

        }
        else{
            socialContainer.style.opacity = '1'
            socialContainer.style.transform = 'none'
            socialArrow.style.transform = 'scaleX(-1) translateX(0em)'

            document.documentElement.style.setProperty('--social-arrow-dir','-1')
        }
    }
    const history = useLocation()
    useEffect(()=>{
        
        
        let pathname =history.pathname.split('/').pop()        
        
        // setPath(pathname)
        // console.log(pathname,path)
        
        // console.log(pathname,path)
        document.documentElement.style.setProperty('--social-filter','1')
        if(pathname === 'contact'){
            // console.log('here')
            document.documentElement.style.setProperty('--social-filter','0')
        }
        
            
        
        //return ()=>{}
    },[history])
    

    const onMouseEnter = (indexString)=>{
        if(indexString === 'phone'){
                document.documentElement.style.setProperty('--social-op-phone','1')                
        }
        else if(indexString === 'email'){
            document.documentElement.style.setProperty('--social-op-email','1')
        }
    }

    const onMouseLeave = (indexString)=>{
        if(indexString === 'email'){
            document.documentElement.style.setProperty('--social-op-email','0')
        }
        else if(indexString === 'phone'){
            document.documentElement.style.setProperty('--social-op-phone','0')
        }
    }

    return(
        <>
            <div onClick={()=>onClick()} className='social-arrow'></div>
            <div className='social-container'>
                <p className='social-title'>Social</p>
                <div><a href='https://github.com/Tae-S' target='_blank'><img className='logo git' src={git}/></a></div>
                <div><a href='https://codepen.io/Mc_mc249' target='_blank'><img className='logo codepen' src={codepen}/></a></div>
                <div className='email' onMouseEnter={()=>onMouseEnter('email')} onMouseLeave={()=>onMouseLeave('email')} ><img className='logo google' src={google}/></div>
                <div className='phone' onMouseEnter={()=>onMouseEnter('phone')} onMouseLeave={()=>onMouseLeave('phone')}><img className='logo whatsapp' src={whatsapp}/></div>
            </div>

            <svg>
                <defs>
                    <filter id='squiggley1'>
                        <feTurbulence baseFrequency='0.009' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='5' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggley2'>
                        <feTurbulence baseFrequency='0.001' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='5' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggley3'>
                        <feTurbulence baseFrequency='0.002' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='5' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggley4'>
                        <feTurbulence baseFrequency='0.008' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='20' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggley5'>
                        <feTurbulence baseFrequency='0.1' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='100' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                 </defs>
            </svg>
        </>
    )
}

export default Social