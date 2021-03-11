import React from 'react';
import { Icon } from '@iconify/react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import reactIcon from '@iconify/icons-logos/nodejs';
import reactIc from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/spring';
import redux from '@iconify/icons-logos/redux';
import mongo from '@iconify/icons-logos/mongodb';
import MySql from '@iconify/icons-logos/mysql';
import postgres from '@iconify/icons-logos/postgresql'
// import mysql from '@iconify/icons-logos/mysql';

const Text = () => (
  <>
    I’m currently working as a{' '}
    <span className="font-bold text-gray-800">Full-Stack Developer</span> and{' '}
    Freelance 
    <span className="font-bold text-gray-800"> UI designer</span>.
     <br></br>
     I enjoy building web apps using
    <HighlightedTextIcon
      as="a"
      href="https://spring.io/"
      className="mx-2"
      icon={<Icon icon={tailwindcssIcon} />}
    >
      Spring Framework
    </HighlightedTextIcon>{' '}and{' '}
    <HighlightedTextIcon
      as="a"
      href="https://nodejs.org"
      className="mx-2"
      icon={<Icon icon={reactIcon} />}
    >
      Node JS
    </HighlightedTextIcon>
    as a
    <span className="font-bold text-gray-800"> Back-End </span>
    technology.
    <br></br>
    And on the 
    <span className="font-bold text-gray-800"> Front-End </span>
     I use 
    <HighlightedTextIcon
      as="a"
      href="https://spring.io/"
      className="mx-2"
      icon={<Icon icon={reactIc} />}
    >
      React JS
    </HighlightedTextIcon>{' '}
    and{' '}
    <HighlightedTextIcon
      as="a"
      href="https://redux.js.org"
      className="mx-2"
      icon={<Icon icon={redux} />}
    >
      Redux
    </HighlightedTextIcon>
    and various other CSS frameworks.
    <br></br>
   For{' '}
    <span className="font-bold text-gray-800">DBMS</span> i'm familiar with{' '}
    <HighlightedTextIcon
      as="a"
      href="https://mongodb.com"
      className="mx-2"
      icon={<Icon icon={mongo} />}
    >
      MongoDB
    </HighlightedTextIcon>
    <HighlightedTextIcon
      as="a"
      href="https://mysql.com"
      className="mx-2"
      icon={<Icon icon={MySql} />}
    >
      MySql
    </HighlightedTextIcon>
    <HighlightedTextIcon
      as="a"
      href="https://postgresql.org"
      className="mx-2"
      icon={<Icon icon={postgres} />}
    >
      Postgresql
    </HighlightedTextIcon>

  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
