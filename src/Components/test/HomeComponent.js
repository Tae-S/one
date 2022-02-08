import './homeComponentStyles.css'
import Home from './../Home'
import { useState } from 'react'

function HomeComponent()
{
    const [tX,setTX] = useState(0)

    let tx = 0
    let ty = 0
    let item 
    let dial
    let swatch
    let isMouseDown = false
    const mouseDir = {
        x:0,
        y:0,
        ix:0,//itemX
        iy:0,
        iw:0,
        ih:0,
        dx:0,
        dy:0
    }
    let oldAngle
    document.addEventListener('DOMContentLoaded',()=>{
        item = document.querySelector('.test-item')
        dial = document.querySelector('.dial')
        swatch = document.querySelector('.swatch')
        // console.log(dial)
        oldAngle = dial.style.transform
        // console.log(oldAngle)
        oldAngle = parseFloat(oldAngle.substring(8,oldAngle.length-4))
    })
    
    
    const onMouseDown = (e)=>{
        e = window.event
        e.preventDefault()
        isMouseDown = true
        item = document.querySelector('.test-item')
        dial = document.querySelector('.dial')
        swatch = document.querySelector('.swatch')
        dial.classList.add('dial-mouse-down')
        item.classList.add('test-item-mouse-down')
        swatch.classList.add('swatch-mouse-down')
        //console.log(dial.getClientRects())
        const dialRects = dial.getClientRects()
        // console.log(dialRects[0].x)
        mouseDir.x = e.x
        mouseDir.y = e.y
        mouseDir.ix = dialRects[0].x
        mouseDir.iy = dialRects[0].y
        mouseDir.iw = dialRects[0].width
        mouseDir.ih = dialRects[0].height
        // console.log('drag started')
        oldAngle = dial.style.transform
        // console.log(oldAngle,'mousedown')
        oldAngle = parseFloat(oldAngle.substring(8,oldAngle.length-4))
        // oldAngle = parseFloat(oldAngle.substring(8,oldAngle.length-4))
        window.addEventListener('mouseup',onMouseUp)
        window.addEventListener('mousemove',onMouseMove)
        //ix+ih is 100%
    }
    function onMouseMove(e){
        e = window.event
        isMouseDown = true
        // console.log('mousemove',isMouseDown)
        // console.log(oldAngle+1000.0)
        mouseDir.dx = e.x
        mouseDir.dy = e.y
        tx = mouseDir.dx-mouseDir.x
        ty = mouseDir.dy-mouseDir.y
        tx  = (mouseDir.iw/260)*tx + oldAngle
        setTX(tx)
        
        // console.log(tx)
        if(tx>=0 && tx <= 255) setTX(tx)
        else if(tx<0)setTX(0)
        else if(tx>260) setTX(255)

        document.documentElement.style.setProperty('--oldAngle',`${Math.floor(tx)}`)

        
    }
    
        
    function onMouseUp(){
        isMouseDown = false
        // console.log('mouseUp')
        item = document.querySelector('.test-item')
        dial = document.querySelector('.dial')
        swatch = document.querySelector('.swatch')
        dial.classList.remove('dial-mouse-down')
        item.classList.remove('test-item-mouse-down')
        swatch.classList.remove('swatch-mouse-down')
        window.removeEventListener('mousemove',onMouseMove)
        window.removeEventListener('mouseup',onMouseUp)
    }

    const dialStyles = {
        'transform':`rotateZ(${tX}deg)`
    }

    const onMouseEnter = ()=>{
    }

    const onMouseLeave = (parity)=>{     
    }
    const onClick = ()=>{
        const dialText = document.querySelector('.dial-text')
        const body = document.querySelector('body')
        const navbarLinks = document.querySelectorAll('.token-link')
        dial = document.querySelector('.dial')
        swatch = document.querySelector('.swatch')
        if(tX === 0){
            
            dialText.innerHTML = 'Light'
            setTX(255)
            oldAngle = 255
            const r = Math.floor(((oldAngle-120) + (Math.random()-0.5)*120))
            const g = Math.floor(((oldAngle-120) + (Math.random()-0.5)*120))
            const b = Math.floor(((oldAngle-120) + (Math.random()-0.5)*120))
            body.style.background = `rgb(${r},${g},${b})`
            dial.style.background = `rgb(${r},${g},${b})`//+16 +8 26
            swatch.style.background = `rgb(${r},${g},${b})`//+16 +8 26
            document.documentElement.style.setProperty('--dial-one',`rgb(${r+16},${g+8},${b+26})`)
            document.documentElement.style.setProperty('--item-one',`rgb(${r-30},${g-8},${b-56})`)//-30,-8,-56
            document.documentElement.style.setProperty('--name-two',`rgb(${r+14},${g+4},${b+24})`)//+14,+4,+24 
            // document.documentElement.style.setProperty('--swatch-1',`rgb(${r-30},${g-8},${b-56})`)//#000
            if(r<130 && g<130 && b<130){
                document.documentElement.style.setProperty('--item-four',`rgb(${r+9},${g+2},${b+17})`)//+9,+2,17
                document.documentElement.style.setProperty('--swatch-1',`rgb(${0},${0},${0})`)//#000
                document.documentElement.style.setProperty('--social-filter','1')//#000
                document.documentElement.style.setProperty('--social-filter-hover','0.5')//#000
                document.documentElement.style.setProperty('--info-start','greenyellow')
                document.documentElement.style.setProperty('--info-desc','#777')
                // dialText.style.color = '#222'
            }
            else{
                document.documentElement.style.setProperty('--item-four',`rgb(${r+19},${g+12},${b+27})`)//+9,+2,17
                document.documentElement.style.setProperty('--swatch-1',`rgb(${70},${70},${70})`)//#555
                document.documentElement.style.setProperty('--social-filter','0')//#000
                document.documentElement.style.setProperty('--social-filter-hover','0.3')//#000
                document.documentElement.style.setProperty('--info-start','rgb(230, 29, 29)')
                document.documentElement.style.setProperty('--info-desc','#222')
                // dialText.style.color = '#999'
            }
            dialText.style.color = '#222'
            document.documentElement.style.setProperty('--dial-two',`rgb(${r-5},${g-1},${b-10})`)//-5,-1,-10

            document.documentElement.style.setProperty('--swatch-one',`rgb(${r+29},${g+14},${b+49})`)/*+29,+14,49*/
            document.documentElement.style.setProperty('--swatch-two',`rgb(${r+16},${g+8},${b+26})`)/*+16,+8,+26*/
            document.documentElement.style.setProperty('--swatch-four',`rgb(${r-11},${g-4},${b-22})`)/*-11,-4,-22*/
            const nr = Math.floor(((oldAngle-120) - (Math.random())*120))
            const ng = Math.floor(((oldAngle-120) - (Math.random())*120))
            const nb = Math.floor(((oldAngle-120) - (Math.random())*120))
            navbarLinks.forEach((navbarLink)=>{
                navbarLink.style.color = `rgb(${nr},${ng},${nb})`
            })
            document.documentElement.style.setProperty('--oldAngle',`${oldAngle}`)
        }
        else{
            dialText.innerHTML = 'Dark'
            dialText.style.color = '#999'
            setTX(0)
            oldAngle = 0
            const r = Math.floor(((120-oldAngle) - (Math.random())*120))
            const g = Math.floor(((120-oldAngle) - (Math.random())*120))
            const b = Math.floor(((120-oldAngle) - (Math.random())*120))
            // console.log(r,g,b)
            body.style.background = `rgb(${r},${g},${b})`
            dial.style.background = `rgb(${r},${g},${b})`//+16 +8 26
            swatch.style.background = `rgb(${r},${g},${b})`//+16 +8 26
            document.documentElement.style.setProperty('--dial-one',`rgb(${r+16},${g+8},${b+26})`)
            document.documentElement.style.setProperty('--item-one',`rgb(${r-30},${g-8},${b-56})`)//-30,-8,-56
            document.documentElement.style.setProperty('--name-two',`rgb(${r+14},${g+4},${b+24})`)//+14,+4,+24 
            // document.documentElement.style.setProperty('--swatch-1',`rgb(${r-30},${g-8},${b-56})`)//#000
            if(r<50 && g<50 && b<50){
                document.documentElement.style.setProperty('--item-four',`rgb(${r+9},${g+2},${b+17})`)//+9,+2,17
                document.documentElement.style.setProperty('--swatch-1',`rgb(${0},${0},${0})`)//#000
                document.documentElement.style.setProperty('--social-filter','1')//#000
                document.documentElement.style.setProperty('--social-filter-hover','0.5')//#000
                document.documentElement.style.setProperty('--info-start','greenyellow')
                document.documentElement.style.setProperty('--info-desc','#777')
            }
            else{
                document.documentElement.style.setProperty('--item-four',`rgb(${r+19},${g+12},${b+27})`)//+9,+2,17
                document.documentElement.style.setProperty('--swatch-1',`rgb(${70},${70},${70})`)//#555
                document.documentElement.style.setProperty('--social-filter','0')//#000
                document.documentElement.style.setProperty('--social-filter-hover','0.3')//#000
                document.documentElement.style.setProperty('--info-start','rgb(230, 29, 29)')
                document.documentElement.style.setProperty('--info-desc','#222')
            }
            document.documentElement.style.setProperty('--dial-two',`rgb(${r-5},${g-1},${b-10})`)//-5,-1,-10

            document.documentElement.style.setProperty('--swatch-one',`rgb(${r+29},${g+14},${b+49})`)/*+29,+14,49*/
            document.documentElement.style.setProperty('--swatch-two',`rgb(${r+16},${g+8},${b+26})`)/*+16,+8,+26*/
            document.documentElement.style.setProperty('--swatch-four',`rgb(${r-11},${g-4},${b-22})`)/*-11,-4,-22*/
            const nr = Math.floor(((120-oldAngle) + (Math.random())*100))
            const ng = Math.floor(((120-oldAngle) + (Math.random())*100))
            const nb = Math.floor(((120-oldAngle) + (Math.random())*100))
            navbarLinks.forEach((navbarLink)=>{
                navbarLink.style.color = `rgb(${nr},${ng},${nb})`
            })
            


            document.documentElement.style.setProperty('--oldAngle',`${oldAngle}`)
        }
    }
    return(
        <>
            {/* <Home/> */}
            <span onClick={()=>onClick()} className='dial-text'>Dark</span>
            <div className='component-container'>
                <div onClick={()=>onClick()} onMouseEnter={()=>onMouseEnter()} onMouseLeave={()=>onMouseLeave(isMouseDown)} onMouseDown={()=>onMouseDown()} className='test-item'>
                    <div className='dial' style={dialStyles}>
                        <div className='swatch'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponent