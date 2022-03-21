// import {ReactComponent as Comida_1} from '../../assets/comida_1.svg'
import Comida from '../../assets/comida_1.svg'
import Burguer from '../../assets/comida_2.svg'
import PotatoSalad from '../../assets/comida_3.svg'
import Cobbler from '../../assets/comida_4.svg'
// import {ReactComponent as } from '../../assets/comida_2.svg'
// import {ReactComponent as Comida_3} from '../../assets/comida_3.svg'
// import {ReactComponent as Comida_4} from '../../assets/comida_4.svg'
import './styles.css'

function Recipe() {
    return(
        <div className='best-recipes-content'>
            <h1>Our Best Recipes</h1>

            <p>Far far away, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts</p>

            <div className='recipes-menus'>
                <div className='recipe'>
                    <img src={Comida} alt="" />
                    <div className='recipe-content'>
                        <h1>Broccoli Salad with Bacon</h1>
                        <button>See Recipe</button>
                    </div>
                    
                </div>

                <div className='recipe'>
                    <img src={Burguer} alt="" />
                    <div className='recipe-content'>
                        <h1>Broccoli Salad with Bacon</h1>
                        <button>See Recipe</button>
                    </div>
                    
                </div>

                <div className='recipe'>
                    <img src={PotatoSalad} alt="" />
                    <div className='recipe-content'>
                        <h1>Broccoli Salad with Bacon</h1>
                        <button>See Recipe</button>
                    </div>
                    
                </div>

                <div className='recipe'>
                    <img src={Cobbler} alt="" />
                    <div className='recipe-content'>
                        <h1>Broccoli Salad with Bacon</h1>
                        <button>See Recipe</button>
                    </div>
                    
                </div>
                {/* <img src={<comida_1/>} alt="" /> */}
            </div>
        </div>
    )
}

export default Recipe