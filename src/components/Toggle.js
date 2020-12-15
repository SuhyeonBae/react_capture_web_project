import React, {useState} from 'react';
import {motion} from 'framer-motion';

const Toggle = ({children, title}) => { //children extraction
  const [toggle, setToggle] = useState(false);
  return(
    <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
      <motion.h4 layout> {title} </motion.h4>
      {toggle ? children : ''}
      <div className="faq__line"></div>
    </motion.div>
  );
};

export default Toggle;