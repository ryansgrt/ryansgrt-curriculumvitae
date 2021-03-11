import React from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/nodejs';
import reactIc from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/spring';
import redux from '@iconify/icons-logos/redux';
import mongo from '@iconify/icons-logos/mongodb';
import MySql from '@iconify/icons-logos/mysql';
import postgres from '@iconify/icons-logos/postgresql'
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';

const Text = () => (
  <>
    Saat ini saya sedang bekerja sebagai{' '}
    <span className="font-bold text-gray-800">Full-Stack Developer</span> dan{' '}
    Freelance 
    <span className="font-bold text-gray-800"> UI designer</span>.
     <br></br>
     saya sangat suka membangun website mengunakan teknologi
    <HighlightedTextIcon
      as="a"
      href="https://spring.io/"
      className="mx-2"
      icon={<Icon icon={tailwindcssIcon} />}
    >
      Spring Framework
    </HighlightedTextIcon>{' '}dan{' '}
    <HighlightedTextIcon
      as="a"
      href="https://nodejs.org"
      className="mx-2"
      icon={<Icon icon={reactIcon} />}
    >
      Node JS
    </HighlightedTextIcon>
    sebagai teknologi
    <span className="font-bold text-gray-800"> Back-End </span>
    nya.
    <br></br>
    Serta Pada
    <span className="font-bold text-gray-800"> Front-End </span>
     Saya Mengunakan teknologi
    <HighlightedTextIcon
      as="a"
      href="https://spring.io/"
      className="mx-2"
      icon={<Icon icon={reactIc} />}
    >
      React JS
    </HighlightedTextIcon>{' '}
    dan{' '}
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={<Icon icon={redux} />}
    >
      Redux
    </HighlightedTextIcon>
    dan juga Framework CSS lainnya.
    <br></br>
   Untuk{' '}
    <span className="font-bold text-gray-800">DBMS</span> Saya Terbiasa Mengunakan{' '}
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
