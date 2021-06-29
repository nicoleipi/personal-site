import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h6>Nicole Pi</h6>
        <p2><a href="mailto:pinicolei@gmail.com">pinicolei@gmail.com</a></p2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <sidebar-body>Hi, I&apos;m Nicole. I like creating things.
        I am a rising junior at <a href="https://www.powayusd.com/en-US/Schools/HS/DNHS/Home">Del Norte High School </a>
        and student researcher at <a href="https://www.sdsc.edu/">the San Diego Supercomputer Center</a>
        . Organizations I lead include:
        <a href="https://www.team3749.org/">    Team Optix 3749</a>
        , <a href="https://cyberaegis.tech/">CyberAegis</a>
        , <a href="https://etfsd.org/">Elevate the Future</a>
        , <a href="https://www.lightthewayproject.org/">Light the Way Project</a>
        , and <a href="https://www.epicedu.org/">Educational Pathways for Impoverished Children (EPIC)</a>.
      </sidebar-body>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Nicole Pi 2021</p>
    </section>
  </section>
);

export default SideBar;
