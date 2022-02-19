import './loader3Styles.css'

function Loader3()
{
    // console.log(document.querySelector('.rotate'))
    return(
        <>
            <div className='loader3-container'>
                <span className='loader3-item static static1' style={{'--loader3-i':'0'}}></span>
                <span className='loader3-item static static2' style={{'--loader3-i':'1'}}></span>
                <span className='loader3-item static static3' style={{'--loader3-i':'2'}}></span>
                <span className='loader3-item static static4' style={{'--loader3-i':'3'}}></span>
                <span className='loader3-item static static5' style={{'--loader3-i':'4'}}></span>
                <span className='loader3-item static static6' style={{'--loader3-i':'5'}}></span>
                <span className='loader3-item static static7' style={{'--loader3-i':'6'}}></span>
                <span className='loader3-item static static8' style={{'--loader3-i':'7'}}></span>
                <span className='loader3-item rotate rotate1' style={{'--loader3-i':'0'}}></span>
                <span className='loader3-item rotate rotate2' style={{'--loader3-i':'0'}}></span>
                <span className='loader3-item rotate rotate3' style={{'--loader3-i':'0'}}></span>
                <span className='loader3-item rotate rotate4' style={{'--loader3-i':'0'}}></span>
                <span className='loader3-item rotate rotate5' style={{'--loader3-i':'0'}}></span>
                <span className='loader3-item rotate rotate6' style={{'--loader3-i':'0'}}></span>
            </div>
            
            <svg>
                <defs>
                    <filter id='loader3-filter'>
                        <feGaussianBlur in='SourceGraphic' stdDeviation='10' />
                        <feColorMatrix values='
                            1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 20 -10' />
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default Loader3