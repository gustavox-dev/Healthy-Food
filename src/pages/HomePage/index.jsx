import Illustration from '../../assets/Illustration.svg'


import { Header } from '../../components/Header'
import Membership from '../../components/Membership'
import ReadBlog from '../../components/ReadBlog'
import Recipe from '../../components/Recipes/index'
import Services from '../../components/Services'

import './styles.css'

export function HomePage() {
    
    return(
        <>
        <div className='home-page-content'>
            
            <Header className="home-page-header" />
            <div className='home-page-container'>
                <div className='home-page-first-container'>
                    <div className='left-content'>
                        <p>Ready for Trying a new recipe?</p>
                        <div className='left-content-search'>
                            <input type="text" placeholder='Search healthy recipes'/>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <img src={Illustration} alt="" className='img-content'/>
                </div>
            </div>
                <div className='recipes-content'>
                    <Recipe />
                </div>

                <div >
                    <Services className='services-content'/>
                </div>

                <div>
                    <ReadBlog />
                </div>

                <div>
                    <Membership />
                </div>

                <footer>
                    <p>&copy; Copyrights 2019 Stack. All Rights Reserved.</p>

                    <div className='terms'>
                        <span>Privacy Policy</span>
                        <span>Terms and Conditions</span>
                    </div>
                </footer>
        </div>

        </>
    )
}

