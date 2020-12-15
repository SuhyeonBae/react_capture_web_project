import React, {useState} from 'react';

const Toggle = ({children}) => { //children extraction
  const [toggle, setToggle] = useState(true);
  return(
    <div onClick={() => setToggle(!toggle)}>
      {toggle ? children : ''}
    </div>
  );
};

export default Toggle;