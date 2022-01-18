import React from 'react';
import { useParams } from 'react-router-dom';

const Routes = () => {
  const { value, color1, color2 } = useParams();

  const style = {
    color: `${color1}`,
    backgroundColor: `${color2}`
  }

  return (
    <div>
      <h3 className='p-5 rounded-3' style={style}>
        {
          isNaN(value) ?
            `The word is: ${value}` :
            `The number is: ${value}`
        }
      </h3>
    </div>
  )
}

export default Routes
