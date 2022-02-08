import './navbarStyles.css'
import {Link} from 'react-router-dom'
import Resume from '../Resume.pdf'

function Navbar()
{

    const linkStyles = {
        'textDecoration':'none',
        'fontWeight':'700',
        'color':'rgb(41, 211, 98)',
        'zIndex':'1',
        'position':'relative'
    }
    const onMouseEnter = (index)=>{
        if(index === 1){
            document.documentElement.style.setProperty('--op1','1')
            document.documentElement.style.setProperty('--dur1','0.7s')
            
        }
        else if(index === 2){
            document.documentElement.style.setProperty('--op2','1')
            document.documentElement.style.setProperty('--dur2','0.7s')
        }
        else if(index === 3){
            document.documentElement.style.setProperty('--op3','1')
            document.documentElement.style.setProperty('--dur3','0.7s')
        }
        else if(index === 4){
            document.documentElement.style.setProperty('--op4','1')
            document.documentElement.style.setProperty('--dur4','0.7s')
        }
    }

    const onMouseLeave = (index)=>{
        if(index === 1){
            document.documentElement.style.setProperty('--op1','0')
            document.documentElement.style.setProperty('--dur1','0s')
        }
        else if(index === 2){
            document.documentElement.style.setProperty('--op2','0')
            document.documentElement.style.setProperty('--dur2','0s')
        }
        else if(index === 3){
            document.documentElement.style.setProperty('--op3','0')
            document.documentElement.style.setProperty('--dur3','0s')
        }
        else if(index === 4){
            document.documentElement.style.setProperty('--op4','0')
            document.documentElement.style.setProperty('--dur4','0s')
        }
    }
    return(
        <>
            <ul className='navbar-ul' style={{'width':window.innerwidth}}>
                <li onMouseEnter={()=>onMouseEnter(1)} onMouseLeave={()=>{onMouseLeave(1)}} className='navbar-li'><Link className='token-link' style={linkStyles} to='/'>Home</Link></li>
                <li onMouseEnter={()=>onMouseEnter(2)} onMouseLeave={()=>{onMouseLeave(2)}} className='navbar-li'><a className='link token-link' href='/#skills'>Skills</a></li>
                <li onMouseEnter={()=>onMouseEnter(3)} onMouseLeave={()=>{onMouseLeave(3)}} className='navbar-li'><Link className='token-link' style={linkStyles} to='/contact'>Contact</Link></li>
                <li onMouseEnter={()=>onMouseEnter(4)} onMouseLeave={()=>{onMouseLeave(4)}} className='navbar-li'><a style={{ 'color' : 'rgb(41, 211, 98)','textDecoration': 'none','fontWeight':'700'}} className="res-link token-link" href={Resume} download="Resume_mohit" target="_blank">Resume</a></li>
            </ul>
            <svg>
                <defs>
                    <filter id='squiggle1'>
                        <feTurbulence baseFrequency='0.9' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='5' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggle2'>
                        <feTurbulence baseFrequency='0.01' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='5' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggle3'>
                        <feTurbulence baseFrequency='0.005' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='5' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggle4'>
                        <feTurbulence baseFrequency='0.2' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='5' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggle5'>
                        <feTurbulence baseFrequency='0.02' type='turbulence' numOctaves='2' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='5' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                    <filter id='squiggle6'>
                        <feTurbulence baseFrequency='0.5' type='turbulence' numOctaves='3' result='turbulence'/>
                        <feDisplacementMap in2='turblence' in='SourceGraphic' scale='1' xChannelSelector='R' yChannelSelector='G'/>
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default Navbar