import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/campus1.png'
import gallery_2 from '../../assets/campus2.png'
import gallery_3 from '../../assets/campus3.png'
import gallery_4 from '../../assets/campus4.png'
import white_arrow from '../../assets/white-arrow.png'

function Campus() {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={gallery_1} alt="photo1" />
                <img src={gallery_2} alt="photo2" />
                <img src={gallery_3} alt="photo3" />
                <img src={gallery_4} alt="photo4" />
            </div>
            <button className='btn dark-btn'>See more here <img src={white_arrow} alt="arrow" /></button>
        </div>
    )
}

export default Campus
