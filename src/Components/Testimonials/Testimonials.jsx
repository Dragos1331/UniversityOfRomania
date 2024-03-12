import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/right.png'
import back_icon from '../../assets/left.png'
import user_1 from '../../assets/people1.jpg.png'
import user_2 from '../../assets/people2.jpg.png'
import user_3 from '../../assets/people3.jpg.png'
import user_4 from '../../assets/people4.jpg.png'
function Testimonials() {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="next" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_1} alt="user1" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, RO</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_2} alt="user2" />
                                <div>
                                    <h3>Ann Jackson</h3>
                                    <span>Edusity, RO</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_3} alt="user3" />
                                <div>
                                    <h3>Ena Patrick</h3>
                                    <span>Edusity, RO</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_4} alt="user4" />
                                <div>
                                    <h3>Dino Jack</h3>
                                    <span>Edusity, RO</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
