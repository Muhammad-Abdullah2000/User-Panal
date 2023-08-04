import React from 'react';
import '../styles/Air_Conditioners.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from '../images/img1.jpg';
import img5 from '../images/img5.jpg';
import img7 from '../images/img7.jpg';

const All_Categories = () => {
  return (
    <section id='Categories1'>

      <div className="CardContainer1">

        <div className="card1">
          <div className="cardimg">
            <img src={img1} alt="" />
          </div>

          <div className="cardDetails">
            <h1>How to Clean the Filter All parts Checking on your air conditioner</h1>
            <p style={{ position: 'relative', top: '20px', left: '10px', textAlign: 'justify', width: '315px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!</p>

            <div className='btn1'>

              <button>Read More <AiOutlineArrowRight id='arrow' /></button>

            </div>


          </div>




        </div>

        <div className="card1">
          <div className="cardimg">
            <img src={img5} alt="" />
          </div>

          <div className="cardDetails">
            <h1>How to Clean the Filter All parts Checking on your air conditioner</h1>
            <p style={{ position: 'relative', top: '20px', left: '10px', textAlign: 'justify', width: '315px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!</p>

            <div className='btn1'>

              <button>Read More <AiOutlineArrowRight id='arrow' /></button>

            </div>


          </div>




        </div>

        <div className="card1">
          <div className="cardimg">
            <img src={img7} alt="" />
          </div>

          <div className="cardDetails">
            <h1>How to Clean the Filter All parts Checking on your air conditioner</h1>
            <p style={{ position: 'relative', top: '20px', left: '10px', textAlign: 'justify', width: '315px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!</p>

            <div className='btn1'>

              <button>Read More <AiOutlineArrowRight id='arrow' /></button>

            </div>


          </div>




        </div>



      </div>
    </section>
  )
}

export default All_Categories