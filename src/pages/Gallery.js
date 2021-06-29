import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/Gallery';

const Gallery = () => (
  <Main
    title="Gallery"
    description="Learn about Nicole Pi's through the gallery."
  >
    <article className="post" id="gallery">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/gallery">Gallery</Link></h2>
          <p>Pictures of the things I love and the people I love working with</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Gallery;
