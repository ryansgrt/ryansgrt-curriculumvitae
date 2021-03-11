import React from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';
import reduxIcon from '@iconify/icons-logos/redux';
import SpringBoot from '@iconify/icons-logos/spring';
import Hibernate from '@iconify/icons-logos/hibernate';
import Mysql from '@iconify/icons-logos/mysql'
import postgres from '@iconify/icons-logos/postgresql';
import MonggoDB from '@iconify/icons-logos/mongodb';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
// import nextjsIcon from '@iconify/icons-logos/nextjs';
// import mongodb from '@iconify/icons-logos/mongodb';

const skills = [
  <a href="https://reactjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={reactIcon} />
  </a>,
  <a href="https://redux.js.org" className="focus:outline-none">
  <Icon className="text-5xl" icon={reduxIcon} />
</a>,
  <a href="https://tailwindcss.com" className="focus:outline-none">
    <Icon className="text-4xl" icon={tailwindcssIcon} />
  </a>,
  <a href="https://getboostrap.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={bootstrapIcon} />
  </a>,
  <a href="https://nextjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={SpringBoot} />
  </a>,
  <a href="https://nextjs.org" className="focus:outline-none">
  <Icon className="text-5xl" icon={Hibernate} />
</a>,
<a href="https://nextjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={Mysql} />
  </a>,
  <a href="https://nextjs.org" className="focus:outline-none">
  <Icon className="text-5xl" icon={postgres} />
</a>,
<a href="https://nextjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={MonggoDB} />
</a>,
];

export default skills;
