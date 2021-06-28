import React from 'react';
import { Link } from 'react-router-dom';
import Hello from '../components/Hello/Hello';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Nicole Pi's personal website. Student at Del Norte High School, "
    + 'student researcher at the San Diego Supercomputer Center.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">messages</Link></h2>
          <Hello />
          <p>
            Just hopping on the bandwagon and making myself a personal website.
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me!
      </p>
    </article>
  </Main>
);

export default Index;
