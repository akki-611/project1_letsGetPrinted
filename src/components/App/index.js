import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
// import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
import StarButton from '../Title/HeaderFile';

const App = () => (
  <React.Fragment>
    {/* <GithubCorner /> */}
    <StarButton />
    <main>
      {/* <Filter /> */}
      <Shelf />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
