import React from 'react';
import './AllCat.css';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img8 from '../images/img8.jpg';
import Rating from '../Rating/Ratings';


const All_Categories = () => {
  const cards = [
    {
      imgSrc: img1,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 4, // Replace this with the actual rating for the first card
    },
    {
      imgSrc: img2,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 4, // Replace this with the actual rating for the first card
    },
    {
      imgSrc: img3,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 3, // Replace this with the actual rating for the first card
    },
    {
      imgSrc: img4,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 1, // Replace this with the actual rating for the first card
    },
    {
      imgSrc: img5,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 5, // Replace this with the actual rating for the first card
    },
    {
      imgSrc: img6,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 4, // Replace this with the actual rating for the first card
    },
    {
      imgSrc: img8,
      title: 'How to Clean the Filter All parts Checking on your air conditioner',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet animi deleniti fuga et quo numquam, ullam sint magni exercitationem ab nihil ipsam quam omnis aliquam ea quod odit! Ea!',
      rating: 2, // Replace this with the actual rating for the first card
    },
  ];
  return (
    <section id="Categories">

      <div className="CardContainer">

        <div className="leftContainerCard">
           {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="cardimg">
                <img src={card.imgSrc} alt="" />
              </div>

              <div className="cardDetails">
                <h1>{card.title}</h1>
                <p style={{ position: 'relative', top: '20px', left: '10px', textAlign: 'justify', width: '315px' }}>
                  <Rating rating={card.rating} />
                  {card.description}
                </p>



                <div className="btn1">
                  <button>
                    <Link to='/cardcontent' style={{ textDecoration: 'none', color: 'black' }}>Read More</Link><AiOutlineArrowRight id='arrow' />
                  </button>
                </div>
              </div>
            </div>
          ))} 
         
        </div>
      </div>




      <div className="rightContainerCard">
        <div className="center">
          <div className="topPost">
            <h1>Top Posts</h1>
          </div>

          <div className="posts" style={{ paddingTop: '150px' }}>

            <div className="imgCon" style={{ marginTop: '50px' }}>
              <div className="imgdiv">
                <img src={img1} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>

            <div className="imgCon">
              <div className="imgdiv">
                <img src={img2} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>

            <div className="imgCon">
              <div className="imgdiv">
                <img src={img3} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>


            <div className="imgCon">
              <div className="imgdiv">
                <img src={img4} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>

            <div className="imgCon">
              <div className="imgdiv">
                <img src={img5} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>


            <div className="imgCon">
              <div className="imgdiv">
                <img src={img6} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>


            <div className="imgCon">
              <div className="imgdiv">
                <img src={img5} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>


            <div className="imgCon">
              <div className="imgdiv">
                <img src={img8} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>


            <div className="imgCon">
              <div className="imgdiv">
                <img src={img4} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>


            <div className="imgCon">
              <div className="imgdiv">
                <img src={img2} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>

            <div className="imgCon">
              <div className="imgdiv">
                <img src={img3} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>

            <div className="imgCon">
              <div className="imgdiv">
                <img src={img8} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>

            <div className="imgCon">
              <div className="imgdiv">
                <img src={img1} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>

            <div className="imgCon" style={{ marginBottom: '50px' }}>
              <div className="imgdiv">
                <img src={img5} alt="" />
              </div>


              <div className="contentdiv">
                <p style={{ fontWeight: 'bold' }}>How to Clean the Filter All parts</p>
                <p style={{ fontWeight: 'bold', color: 'gray', fontSize: '12px' }}>03 Jan 3000</p>
              </div>

            </div>




          </div>
        </div>
      </div>

    </section>
  );
};

export default All_Categories;