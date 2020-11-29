import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
// import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
import StarButton from '../Title/HeaderFile';
import Footer from '../Footer/FooterFile';

const App = () => (
  <React.Fragment>
    <StarButton />
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
    <Footer />
  </React.Fragment>
);

export default App;
