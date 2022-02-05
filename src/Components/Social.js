import './socialStyles.css'
import git from './../imgs/social/git.png'
import google from './../imgs/social/google-one.png'
import codepen from './../imgs/social/codepen-one.png'
import whatsapp from './../imgs/social/whatsapp.png'
import { useState } from 'react'


function Social()
{
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
            <div className='social-container'>
                <p className='social-title'>Social</p>
                <div><a href='https://github.com/Tae-S' target='_blank'><img className='logo git' src={git}/></a></div>
                <div><a href='https://codepen.io/Mc_mc249'><img className='logo codepen' src={codepen}/></a></div>
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