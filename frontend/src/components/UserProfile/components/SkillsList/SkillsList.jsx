import React from 'react';
import "./SkillsList.css";
import Image1 from './dp1.jpg';
import Image2 from './dp2.png';
import Image3 from './dp3.jpg';
import Image4 from './dp4.png';

const teachers = [
    {
        image: Image1,
        name: 'UI/UX Design',
        duration: '2 years Experience',
        cost: '100',
    },
    {
        image: Image2,
        name: 'Data Analyst',
        duration: '1 year Experience',
        cost: '200',
    },
    {
        image: Image3,
        name: 'Web Developer',
        duration: '3 years Experience',
        cost: '50',
    },
    {
        image: Image4,
        name: 'Blockchain',
        duration: '6 months Experience',
        cost: '75',
    },
];
const TeacherList = () => {
  return (
    <div className="teacher--list">
        <div className="list--header">
            <h2>Skills</h2>
            <select>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
            </select>
        </div>
        <div className="list--container">
            {teachers.map((teacher) => (
                <div className="list">
                    <div className="teacher--detail">
                        <img src={teacher.image} alt={teacher.name} />
                        <h2>{teacher.name}</h2>
                    </div>
                    <span>{teacher.duration}</span>
                    <span>${teacher.cost}/hr.</span>
                    <span className='teacher--todo'>:</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TeacherList