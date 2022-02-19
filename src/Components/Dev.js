import { Link } from 'react-router-dom'
import './devStyles.css'

function Dev()
{
    
    return(
        <>
            <div className='devlinks-container'>
                <Link className='dev-link' to='/mobnav'>Mobile Navigation</Link>
                <Link className='dev-link' to='/mobnav2'>Mobile Navigation embedded</Link>
                <Link className='dev-link' to='/mobnav3'>Mobile Navigation hovering </Link>
                <Link className='dev-link' to='/loader'>Loader</Link>
                <Link className='dev-link' to='/loader2'>Basic loader</Link>
                <Link className='dev-link' to='/loader3'>Gooey loader</Link>
                <Link className='dev-link' to='/loader4'>Impossible Loader</Link>
                <Link className='dev-link' to='/homecomponent'>Dark/Light Dial</Link>
            </div>
        </>
    )
}

export default Dev