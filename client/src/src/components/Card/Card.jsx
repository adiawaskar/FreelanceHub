import React from 'react'
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi'

const course = [
    {
        title: 'Web Development',
        icon: <BiLogoHtml5 />,
    },
    {
        title: 'App Development',
        icon: <BiLogoAndroid />,
    },
    {
        title: 'UX & UI',
        icon: <BiBuilding />,
    },
];

const Card = () => {
  return (
    <div className="card--container">
        {course.map((item) => (
            <div className="card" key={item.title}>
                <div className="card--cover">{item.icon}</div>
                <div className="card--title">
                    <h2>{item.title}</h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Card
