import FinalImage from '../../assets/bloco_final_image.svg'

import './styles.css'

function Membership() {
    return(
        <div className="membership-container">

            <div className='membership-content'>

                <div className='membership-join-content'>
                    <p>Join our membership to get special offer</p>
                    <div className='membership-register'>
                        <input type="text" placeholder="Enter your email address" />
                        <button>Join</button>
                    </div>
                </div>

                <img src={FinalImage} alt="" className='membership-image'/>
                
            </div>
            
        </div>
    )
}

export default Membership