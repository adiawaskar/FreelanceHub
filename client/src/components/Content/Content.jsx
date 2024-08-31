import React from 'react';
import ContentHeader from '../ContentHeader/ContentHeader';
import './Content.css';
import Card from '../Card/Card';
import SkillsList from '../SkillsList/SkillsList';
import Projects from '../Projects/Projects';
import PortfolioPage from '../Portfolio/Portfolio';
import Certification from '../Certification/Certification';

const Content = ({ activeItem }) => {
  return (
    <div className="content">
      {activeItem === 'Dashboard' && (
        <>
          <ContentHeader />
          <Card />
          <SkillsList />
        </>
      )}
      {activeItem === 'Projects' && <Projects />}
      {activeItem === 'Portfolio' && <PortfolioPage />}
      {activeItem === 'Certifications' && <Certification />}
    </div>
  );
}

export default Content;
