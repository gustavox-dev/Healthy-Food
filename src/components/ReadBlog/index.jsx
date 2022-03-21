import blogImage_1 from '../../assets/blog_image_1.svg'
import blogImage_2 from '../../assets/bloco_image_2.svg'
import blogImage_3 from '../../assets/bloco_image_3.svg'
import blogImage_4 from '../../assets/bloco_image_4.svg'

import perfil_1 from '../../assets/perfil_1.jpg'
import perfil_2 from '../../assets/perfil_2.jpg'
import perfil_3 from '../../assets/perfil_3.jpg'
import perfil_4 from '../../assets/perfil_4.jpg'

import './styles.css'

function ReadBlog() {
    return(
        <div className='read-blog-container'>
            <h1>Read our Blog</h1>

            <p>Far far away, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts</p>
            <div className='read-blog-content'>
                <div className='card-blog'>
                    <img src={blogImage_1} alt="" srcset="" />
                    <div className='card-content'>
                        <h2>Quick-start guide to nuts and seeds</h2>
                        <div className='user-post'>
                            <img src={perfil_1} alt="" srcset="" />
                            <span>Kevin Ibrahim</span>
                        </div>
                    </div>
                </div>
                <div className='card-blog'>
                    <img src={blogImage_2} alt="" srcset="" />
                    <div className='card-content'>
                        <h2>Nutrition: Tips for Iproving Your Health</h2>
                        <div className='user-post'>
                            <img src={perfil_2} alt="" srcset="" />
                            <span>Mike Jackson</span>
                        </div>
                    </div>
                </div>
                <div className='card-blog'>
                    <img src={blogImage_3} alt="" srcset="" />
                    <div className='card-content'>
                        <h2>The top 10 benefits of eating healthy</h2>
                        <div className='user-post'>
                            <img src={perfil_3} alt="" srcset="" />
                            <span>Bryan McGregor</span>
                        </div>
                    </div>
                </div>
                <div className='card-blog'>
                    <img src={blogImage_4} alt="" srcset="" />
                    <div className='card-content'>
                        <h2>Quick-start guide to nuts and seeds</h2>
                        <div className='user-post'>
                            <img src={perfil_4} alt="" srcset="" />
                            <span>Kevin Ibrahim</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadBlog