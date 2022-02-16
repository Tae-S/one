import './mobNav3Styles.css'
import Resume from './../../Resume.pdf'
import { Link } from 'react-router-dom'

function MobNav3()
{
    let isOnPage = false
    let isOnPageIndex = 0
    const onMouseEnter = (e,index)=>{
        const container = e.target
        const icon = container.querySelector('ion-icon')
        const text = container.querySelector('.mob3-token-link')
        container.classList.remove('mob3-navbar-li-anim')
        text.classList.remove('mob3-hide')
        if(isOnPage) return
        
        icon.style.setProperty('--icon3-y','-2.2em')
        icon.style.setProperty('--icon3-color','#222')
        if(index === 1){
            document.documentElement.style.setProperty('--slider3-x','5.8em')
        }
        else if(index === 2){
            document.documentElement.style.setProperty('--slider3-x','15.6em')

        }
        else if(index === 3){
            document.documentElement.style.setProperty('--slider3-x','26.4em')
        }
        else if(index === 4){
            document.documentElement.style.setProperty('--slider3-x','37.6em')
        }
    }
    const onMouseLeave = (e,index)=>{
        const container = e.target
        const icon = container.querySelector('ion-icon')
        const text = container.querySelector('.mob3-token-link')
        if(index === isOnPageIndex) return
        container.classList.add('mob3-navbar-li-anim')
        text.classList.add('mob3-hide')
        
        if(isOnPage) return
        icon.style.setProperty('--icon3-y','0em')
        icon.style.setProperty('--icon3-color','#888')
        
        if(index === 1){
            document.documentElement.style.setProperty('--slider3-x','5.8em')
        }
        else if(index === 2){
            document.documentElement.style.setProperty('--slider3-x','15.6em')
        }
        else if(index === 3){
            document.documentElement.style.setProperty('--slider3-x','26.4em')
        }
        else if(index === 4){
            document.documentElement.style.setProperty('--slider3-x','37.6em')
        }
    }
    const onClick = (e,index)=>{
        console.log('clicked')
        const container = e.target
        const icon = container.querySelector('ion-icon')
        const text = container.querySelector('.mob3-token-link')
        container.classList.remove('mob3-navbar-li-anim')
        isOnPage = !isOnPage
        
        text.classList.remove('mob3-hide')
        icon.style.setProperty('--icon3-y','-2.2em')
        icon.style.setProperty('--icon3-color','#222')
        isOnPageIndex = index
        if(!isOnPage) isOnPageIndex = 0
        
    }
    const linkStyles = {
        'textDecoration':'none',
        'fontWeight':'700',
        'color':'rgb(41, 211, 98)',
        'zIndex':'1',
        'position':'relative'
    }
    return(
        <>
            
            <div className='mob3-nav-container'>
                <div className='mob3-slider'></div>
                <ul className='mob3-navbar-ul' style={{'width':window.innerwidth}}>
                    <li onClick={(e)=>onClick(e,1)} onMouseEnter={(e)=>onMouseEnter(e,1)} onMouseLeave={(e)=>{onMouseLeave(e,1)}} className='mob3-navbar-li mob3-navbar-li-anim'><ion-icon  style={{'--icon3-color':'#888','--icon3-y':'0em'}} name="home-outline" className='mob3-icon'></ion-icon><Link className='mob3-hide mob3-token-link' style={linkStyles} to='/'>Home</Link></li>
                    <li onClick={(e)=>onClick(e,2)} onMouseEnter={(e)=>onMouseEnter(e,2)} onMouseLeave={(e)=>{onMouseLeave(e,2)}} className='mob3-navbar-li mob3-navbar-li-anim'><ion-icon style={{'--icon3-color':'#888','--icon3-y':'0em'}} className='mob3-icon' name="layers-outline"></ion-icon><a className='mob3-hide mob3-link mob3-token-link' href='/#skills'>Skills</a></li>
                    <li onClick={(e)=>onClick(e,3)} onMouseEnter={(e)=>onMouseEnter(e,3)} onMouseLeave={(e)=>{onMouseLeave(e,3)}} className='mob3-navbar-li mob3-navbar-li-anim'><ion-icon style={{'--icon3-color':'#888','--icon3-y':'0em'}} className='mob3-icon' name="mail-outline"></ion-icon><Link className='mob3-hide mob3-token-link' style={linkStyles} to='/contact'>Contact</Link></li>
                    <li onClick={(e)=>onClick(e,4)} onMouseEnter={(e)=>onMouseEnter(e,4)} onMouseLeave={(e)=>{onMouseLeave(e,4)}} className='mob3-navbar-li mob3-navbar-li-anim'><ion-icon style={{'--icon3-color':'#888','--icon3-y':'0em'}} className='mob3-icon' name="document-text-outline"></ion-icon><a style={{ 'color' : 'rgb(41, 211, 98)','textDecoration': 'none','fontWeight':'700'}} className="mob3-hide mob3-res-link mob3-token-link" href={Resume} download="Resume_mohit" target="_blank">Resume</a></li>
                </ul>
                
            </div>
            <svg>
                <defs>
                    
                    <filter id='mob3-nav-filter0'>
                        <feTurbulence baseFrequency='0.065' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob3-nav-filter1'>
                        <feTurbulence baseFrequency='0.05' type='turbulence' numOctaves='12' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob3-nav-filter2'>
                        <feTurbulence baseFrequency='0.035' type='turbulence' numOctaves='12' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob3-nav-filter3'>
                        <feTurbulence baseFrequency='0.7' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-2' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob3-nav-filter4'>
                        <feTurbulence baseFrequency='0.565' type='fractalNoise' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='2' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob3-nav-filter5'>
                        <feTurbulence baseFrequency='0.95' type='fractalNoise' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='2' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob3-nav-filter6'>
                        <feTurbulence baseFrequency='0.19' type='turbulence' numOctaves='12' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='mob3-nav-filter7'>
                        <feTurbulence baseFrequency='0.0019' type='turbulence' numOctaves='12' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='-3' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    
                </defs>
            </svg>
            
        </>     
    )
}

export default MobNav3