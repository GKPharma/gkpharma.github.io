import * as React from 'react';

import MainContainer from './common/MainContainer.js';
import Blog from './feed/Blog.js';

export default function App() {
  return (
    <MainContainer content={<Blog/>}/>
  );
}
