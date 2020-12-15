import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {UseScroll} from './useScroll';
import {scrollReveal} from '../animation';

const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
      <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
        <h2>Any questions? <span>FAQ</span></h2>
        <AnimateSharedLayout>
          <Toggle title='How Do I Start?'>
              <div className="question">
                  <div className="answer">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum non, ea, animi quod nobis voluptatibus laudantium est laborum enim a ut perferendis tempore? Sequi quos, eaque itaque tempore consequatur unde.</p>
                  </div>
              </div>
          </Toggle>

          <Toggle title='Daily Schedule'>
              <div className="answer">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, amet!</p>
              </div>
          </Toggle>

          <Toggle title='Different Payment Methods'>
              <div className="answer">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptate eligendi vitae reprehenderit assumenda illo? Ea natus recusandae iure saepe.</p>
              </div>
          </Toggle>

          <Toggle title='What Products do you offer.'>
              <div className="answer">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ducimus! Consequuntur illo doloremque quo temporibus quam natus sequi accusamus fugiat mollitia itaque. Harum, laboriosam iure.</p>
              </div>
          </Toggle>          
        </AnimateSharedLayout>
      </Faq>
  )
};

const Faq = styled(About)`
  display: block; 
  span{
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq__line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .qeustion {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;