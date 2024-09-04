import React from 'react';
import ContentHeader from '../ContentHeader/ContentHeader';
import './Content.css';
import Card from '../Card/Card';
import SkillsList from '../SkillsList/SkillsList';
import Projects from '../Projects/Projects';
import PortfolioPage from '../Portfolio/Portfolio';
import Certification from '../Certification/Certification';
import Proposals from '../Proposals/Proposals';

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
      {activeItem === 'Proposals' && <Proposals />}
      {activeItem === 'Certifications' && <Certification />}
    </div>
  );
}

export default Content;
