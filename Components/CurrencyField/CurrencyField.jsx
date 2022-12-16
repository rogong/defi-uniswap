import React from 'react';

//INTERNAL IMPORT
import Style from './CurrencyField.module.css';

const CurrencyField = ({
  spinner,
  loading,
  setOpenToken,
  setOpenTokensTwo,
  getSwapPrice,
  tokenName,
  balance,
}) => {
  const getPrice = (value) => {
    getSwapPrice(value);
  };

  return (
    <div className={Style.HeroSection_box_input}>
      {loading ? (
        <div className="spinnerContainer">
          <spinner />
        </div>
      ) : (
        <input
          type="text"
          placeholder="0.0"
          value={value}
          onBlur={(e) => (field === 'input' ? getPrice(e.target.value) : null)}
        />
      )}
      <button onClick={() => setOpenToken(true) || setOpenTokensTwo(true)}>
        <Image
          src={images.image || images.etherlogo}
          width={20}
          height={20}
          alt="ether"
        />
        {tokenName}
        <small>{balance?.toFixed(3)}</small>
      </button>
    </div>
  );
};

export default CurrencyField;
