import imgService from '../../assets/bloco_services.svg'

import './styles.css'

function Services() {
    return(
        <div className="services-container">
            {/* <div className="services-image">
                
            </div> */}

            <img src={imgService} alt="" className='image-service'/>
            
            <div className="services-content">
            
                <h1>The best services ready</h1>
                
                <h1>To serve you</h1>

                <p>
                Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the
                blind texts
                </p>

                <p>
                Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean
                </p>

                <p>
                A small river named Duden flows by their place and
                supplies it with the necessary regelialia.
                </p>

                <button>Know More</button>
        
            </div>

        </div>
    )
}

export default Services