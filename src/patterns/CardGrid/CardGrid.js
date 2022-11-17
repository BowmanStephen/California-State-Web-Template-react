import React from 'react';
import Card from '../Card/Card';

const CardGrid = ({ contentArr }) => {
  // const { titleText, bodyText, imageSrc, altText, buttonHref, buttonText } = contentArr;

  const setColNumber = () => {
    return `col-md-${Math.round(12 / contentArr.length)}`
  }

  return (
    <div className='row' style={contentArr.length % 2 !== 0 ? { justifyContent: 'center' } : null}>
      {
        contentArr.map((item, idx) => (
          <div className={setColNumber()}>
            <Card
              titleText={item.titleText}
              bodyText={item.bodyText}
              imageSrc={item.imageSrc}
              altText={item.altText}
              buttonHref={item.buttonHref}
              buttonText={item.buttonText}
            />
          </div>
        ))
      }
    </div >
  )
}

export default CardGrid