import './loaderStyles.css'

function Loader()
{
    return(
        <>
        <div className='loader-container'>
            <div className='box'>
                <div className='loader'></div>
                <div className='loader'></div>
                <div className='loader'></div>
            </div>
            <div className='particles'>
                <span className='particle'></span>
                <span className='particle'></span>
                <span className='particle'></span>
                <span className='particle'></span>
                <span className='particle'></span>
                {/* <span className='particle'></span> */}
            </div>
        </div>
        <p className='loading'>Loading...</p>
        </>
    )
}

export default Loader