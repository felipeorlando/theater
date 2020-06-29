import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import Context from 'views/Home/context';
import * as S from './styles';

const Star = ({ value }) => {
  const { setStore, store: { rating } } = useContext(Context);

  const buttonClickHandler = () => {
    if (value === rating) {
      setStore((prevStore) => ({ ...prevStore, rating: undefined }));
    } else {
      setStore((prevStore) => ({ ...prevStore, rating: value }));
    }
  };


  return (
    <S.Button onClick={buttonClickHandler} isSelected={value <= rating}>
      <S.Icon />
    </S.Button>
  );
};

Star.propTypes = {
  value: PropTypes.number.isRequired,
}

export default React.memo(Star);
