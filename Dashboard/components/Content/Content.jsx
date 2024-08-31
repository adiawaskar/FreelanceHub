import React from 'react'
import ContentHeader from '../ContentHeader/ContentHeader'
import "./Content.css";
import Card from '../Card/Card';
import TeacherList from '../SkillsList/SkillsList';

const Content = () => {
  return (
    <div className="content">
        <ContentHeader />
        <Card />
        <TeacherList />
    </div>
  )
}

export default Content