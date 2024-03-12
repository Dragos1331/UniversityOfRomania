import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program1.jpg'
import program_2 from '../../assets/program2.jpg'
import program_3 from '../../assets/program3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

function Programs() {
    return (
        <div className='programs'>
            <div className="program">
                <img src={program_1} alt="program1" />
                <div className="caption">
                    <img src={program_icon_1} alt="program_icon_1" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program_2} alt="program2" />
                <div className="caption">
                    <img src={program_icon_2} alt="program_icon_2" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program_3} alt="program3" />
                <div className="caption">
                    <img src={program_icon_3} alt="program_icon_3" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    )
}

export default Programs
