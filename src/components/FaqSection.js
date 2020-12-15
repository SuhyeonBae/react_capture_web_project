import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';

const FaqSection = () => {
  return (
      <Faq>
        <h2>Any questions? <span>FAQ</span></h2>
        <Toggle>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum non, ea, animi quod nobis voluptatibus laudantium est laborum enim a ut perferendis tempore? Sequi quos, eaque itaque tempore consequatur unde.</p>
                </div>
            </div>
            <div className="faq__line"></div>
        </Toggle>
        <Toggle>
          <div className="question">
              <h4>Daily Schedule</h4>
              <div className="answer">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, amet!</p>
              </div>
          </div>
          <div className="faq__line"></div>
        </Toggle>
        <Toggle>
          <div className="question">
              <h4>Different Payment Methods</h4>
              <div className="answer">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptate eligendi vitae reprehenderit assumenda illo? Ea natus recusandae iure saepe.</p>
              </div>
          </div>
          <div className="faq__line"></div>
        </Toggle>
        <Toggle>
          <div className="question">
              <h4>What Products do you offer.</h4>
              <div className="answer">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, ducimus! Consequuntur illo doloremque quo temporibus quam natus sequi accusamus fugiat mollitia itaque. Harum, laboriosam iure.</p>
              </div>
              <div className="faq__line"></div>
          </div>
        </Toggle>
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