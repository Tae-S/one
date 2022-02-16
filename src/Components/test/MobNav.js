import { Link } from 'react-router-dom'
import './mobNavStyles.css'

import Resume from './../../Resume.pdf'

function MobNav()
{
    const onMouseEnter = (index)=>{
        const items = document.querySelectorAll('.navbar-li-mob')
        let item
        const mover = document.querySelector('.mover-mob')
        if(index === 1){
            item = items[0]
            const {x, y,left} = item.getClientRects()[0]
            // console.log(item.getClientRects())

            // console.log(x,y)
            // document.documentElement.style.setProperty('--mover-mob-x',`${x*0.8}px`)
            
            mover.style.left = `calc(${left}px + 16.8%)`
        }
        else if(index === 2){
            
            item = items[1]
            // console.log(item.getClientRects())
            const {x, y,left} = item.getClientRects()[0]
            mover.style.left = `calc(${left}px + 56.8%)`
            // document.documentElement.style.setProperty('--mover-mob-x','-12em')
            
        }
        else if(index === 3){
            
            item = items[2]
            // console.log(item.getClientRects())
            // document.documentElement.style.setProperty('--mover-mob-x','0.65em')
            const {x, y,left} = item.getClientRects()[0]
            mover.style.left = `calc(${left}px + 16.8%)`
        }
        else if(index === 4){
            item = items[3]
            // console.log(item.getClientRects())
            // document.documentElement.style.setProperty('--mover-mob-x','13.25em')
            const {x, y,left} = item.getClientRects()[0]
            mover.style.left = `calc(${left}px + 16.8%)`
        }
    }
    const onMouseLeave = (index)=>{
        return
    }
    const linkStyles = {
        'textDecoration':'none',
        'fontWeight':'700',
        'color':'rgb(41, 211, 98)',
        'zIndex':'1',
        'position':'relative'
    }
    const onClick = (e)=>{
        console.log('clicked')
        const item = e.target
        const index = item.textContent
        // console.log(item)
        if(index === 'Home'){
            const icon = item.querySelector('ion-icon')
            console.log('home')
            const text = item.querySelector('a')
            // icon.classList.add('on-page-icon-mob')
            icon.style.setProperty('--icon-y','-2em')
            icon.style.setProperty('--icon-color','#222')
            // document.documentElement.style.setProperty('--icon-y','-1em')
            // document.documentElement.style.setProperty('--icon-color','#222')
            text.classList.add('on-page-text-mob')
            text.classList.remove('hide-mob')
            console.log(icon.classList,text.classList)
        }
        else if(index === 'Contact'){
            const icon = item.querySelector('ion-icon')
            console.log('contact')
            const text = item.querySelector('a')
            icon.style.setProperty('--icon-y','-2em')
            icon.style.setProperty('--icon-color','#222')
            // icon.classList.add('on-page-icon-mob')
            // document.documentElement.style.setProperty('--icon-y','-1em')
            // document.documentElement.style.setProperty('--icon-color','#222')
            text.classList.add('on-page-text-mob')
        }
        const items = document.querySelectorAll('.navbar-li-mob')
        items.forEach((i)=>{
            if(i.textContent !== index){
                // i.querySelector('ion-icon').classList.remove('on-page-icon-mob')
                // document.documentElement.style.setProperty('--icon-color','#777')
                i.querySelector('a').classList.remove('on-page-text-mob')
                const ic = i.querySelector('ion-icon')
                ic.style.setProperty('--icon-y','0em')
                ic.style.setProperty('--icon-color','#777')
            }
        })
    }
    return(
        <>
            <div className='mobnav-container'>
                <ul className='navbar-ul-mob' style={{'width':window.innerwidth}}>
                    <li onClick={(e)=>onClick(e)} onMouseEnter={()=>onMouseEnter(1)} onMouseLeave={()=>{onMouseLeave(1)}} className='navbar-li-mob'><ion-icon style={{'--icon-color':'#777','--icon-y':'0em'}} name="home-outline" className='mob-icon'></ion-icon><Link className='hide-mob token-link-mob' style={linkStyles} to='/'>Home</Link></li>
                    <li onClick={(e)=>onClick(e)} onMouseEnter={()=>onMouseEnter(2)} onMouseLeave={()=>{onMouseLeave(2)}} className='navbar-li-mob'><ion-icon style={{'--icon-color':'#777','--icon-y':'0em'}} className='mob-icon' name="layers-outline"></ion-icon><a className='hide-mob link-mob token-link-mob' href='/#skills'>Skills</a></li>
                    <li onClick={(e)=>onClick(e)} onMouseEnter={()=>onMouseEnter(3)} onMouseLeave={()=>{onMouseLeave(3)}} className='navbar-li-mob'><ion-icon style={{'--icon-color':'#777','--icon-y':'0em'}} className='mob-icon' name="mail-outline"></ion-icon><Link className='hide-mob token-link-mob' style={linkStyles} to='/contact'>Contact</Link></li>
                    <li onClick={(e)=>onClick(e)} onMouseEnter={()=>onMouseEnter(4)} onMouseLeave={()=>{onMouseLeave(4)}} className='navbar-li-mob'><ion-icon style={{'--icon-color':'#777','--icon-y':'0em'}} className='mob-icon' name="document-text-outline"></ion-icon><a style={{ 'color' : 'rgb(41, 211, 98)','textDecoration': 'none','fontWeight':'700'}} className="hide-mob res-link-mob token-link-mob" href={Resume} download="Resume_mohit" target="_blank">Resume</a></li>
                </ul>
                <div className='mover-mob move-mob'></div>    
                
            </div>
            <div className='rain-mob'>
                    <span className='r-mob r-hide'></span>
                    <span className='r-mob r-hide'></span>
                    <span className='r-mob r-hide'></span>
                    <span className='r-mob r-hide'></span>
                    <span className='r-mob r-hide'></span>
                    <span className='r-mob r-hide'></span>
            </div>
            
        </>
    )
}

export default MobNav