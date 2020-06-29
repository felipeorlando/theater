import React from 'react';

import Star from './Star';

const Stars = () => (
  <div>
    { [1, 2, 3, 4, 5].map((value) => <Star value={value} key={value} />) }
  </div>
);

export default React.memo(Stars);
