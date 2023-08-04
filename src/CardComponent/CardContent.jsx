import React from 'react';
import '../CardComponent/CardComponent.css';
import cardimg1 from '../images/img1.1.jpg';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg'

import cimg from '../images/img1.jpg'

const CardContent = () => {
  return (
    <section id='CardContent'>
      <div className="CardContentimg">
        <img src={cardimg1} alt="" />
        <p>JUNE 10, 2019</p>
        <h1>Discover Your Inner Genius To Better </h1>
      </div>

      <div className="CardContent">
        <div className="oneCon">
          <h1 style={{ color: 'black' }}>Your Content here!</h1>
          <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum assumenda, ab debitis doloremque enim sed ullam. Debitis, aliquam corporis!</p>
        </div>

        <div className="contentImg">
          <img src={cardimg1} alt="" />

        </div>

        <div className="ContentDescription">
          <h1>1. Nemo enim ipsam voluptatem quia</h1>
          <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et, perspiciatis odio laboriosam corporis esse nobis nesciunt? Sapiente reprehenderit atque saepe voluptatibus voluptatem nobis labore deserunt ullam, est inventore earum ea suscipit et dolores sed dolor ab quo numquam repudiandae. dolores sed dolor ab quo numquam repudiandae.</p>


          <h5>1.1 VERO EOS ET ACCUSAMUS ET IUSTO</h5>
          <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore tenetur ad possimus ex omnis voluptatibus soluta iure nobis vel!</p>


          <h5>1.2 ET HARUM QUIDEM RERUM FACILIS</h5>
          <p style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa delectus enim esse, nulla quam quos. Cumque dignissimos dolore dolorem dolores explicabo maxime natus nihil nisi perferendis, placeat quae qui vel? Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit</p> 
        </div>

        <div className="share">
          <p>Share this: </p> <AiFillFacebook style={{ color: '#3b5998' }} /> <AiFillTwitterSquare style={{ color: '#00acee' }} /> <AiFillGooglePlusCircle style={{ color: 'red' }} /> <BsLinkedin style={{ color: '#0A66C2' }} />
        </div>

        <hr />

        <div className="comments">
          <div className="heading">
            <h1 style={{ color: 'black' }}>5 Comments</h1>
          </div>

          <div className="commentBox">

            <div className="com">
              <div className="CommentImg">
                <img src={cimg} alt="" />
              </div>

              <div className="comment">
                <p style={{ fontWeight: 'bold' }}> Elmer Schmidt - <span style={{ color: 'gray', fontSize: '12px' }}>Jul 12, 2020 AT 8:30 PM</span></p>
                <p>Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.</p>
                <p style={{ color: 'red' }}>Reply</p>
              </div>
            </div>




            <div className="com">
              <div className="CommentImg">
                <img src={cimg} alt="" />
              </div>

              <div className="comment">
                <p style={{ fontWeight: 'bold' }}> Elmer Schmidt - <span style={{ color: 'gray', fontSize: '12px' }}>Jul 12, 2020 AT 8:30 PM</span></p>
                <p>Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.</p>
                <p style={{ color: 'red' }}>Reply</p>
              </div>
            </div>

            <div className="com">
              <div className="CommentImg">
                <img src={cimg} alt="" />
              </div>

              <div className="comment">
                <p style={{ fontWeight: 'bold' }}> Elmer Schmidt - <span style={{ color: 'gray', fontSize: '12px' }}>Jul 12, 2020 AT 8:30 PM</span></p>
                <p>Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.</p>
                <p style={{ color: 'red' }}>Reply</p>
              </div>
            </div>


            <div className="com">
              <div className="CommentImg">
                <img src={cimg} alt="" />
              </div>

              <div className="comment">
                <p style={{ fontWeight: 'bold' }}> Elmer Schmidt - <span style={{ color: 'gray', fontSize: '12px' }}>Jul 12, 2020 AT 8:30 PM</span></p>
                <p>Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.</p>
                <p style={{ color: 'red' }}>Reply</p>
              </div>
            </div>

            <div className="com">
              <div className="CommentImg">
                <img src={cimg} alt="" />
              </div>

              <div className="comment">
                <p style={{ fontWeight: 'bold' }}> Elmer Schmidt - <span style={{ color: 'gray', fontSize: '12px' }}>Jul 12, 2020 AT 8:30 PM</span></p>
                <p>Cras id nulla at metus congue auctor. Suspendisse auctor dictum orci quis interdum.</p>
                <p style={{ color: 'red' }}>Reply</p>
              </div>
            </div>



          </div>


        </div>
 

        <div className="reply">
          <div className="likereply">

            <h1 style={{ color: 'black' }}>Leave a Reply</h1>
            <p>Connect with </p>

            <div className="logog">
              <AiFillFacebook style={{ fontSize: '35px', color: '#3b5998' }} />
              <AiFillGooglePlusCircle style={{ fontSize: '35px', color: 'red' }} />
              <AiFillTwitterSquare style={{ fontSize: '35px', color: '#00acee' }} />
            </div>


          </div>

          <form action="">

            <div className="Lname">
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
            </div>

            <div className="Lname">
              <input type="text" placeholder='Subject' style={{ width: '92.5%' }} />
            </div>

            <div className="Lname" style={{ height: '20vh' }}>
              <input type="text" placeholder='Your Messages' style={{ width: '92.5%', height: '15vh' }} />
            </div>

            <div className="button" >
              <button>Post Comment</button>
            </div>


          </form> 


        </div> 
dsfsa

      </div>






      <div className="latestBlogPost1">

        <h1>Related Blogs</h1>


        <div className="blogCards">

          <div className="Blogcard">
            <div className="blogimg">
              <img src={img10} alt="" />
            </div>

            <div className="blogtext">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, inventore dolorum minima qui tempore ipsa consectetur iusto minus cumque consequuntur.</p>

              <button>Read More</button>
            </div>
          </div>

          <div className="Blogcard">
            <div className="blogimg">
              <img src={img11} alt="" />
            </div>

            <div className="blogtext">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, inventore dolorum minima qui tempore ipsa consectetur iusto minus cumque consequuntur.</p>

              <button>Read More</button>
            </div>
          </div>


          <div className="Blogcard">
            <div className="blogimg">
              <img src={img12} alt="" />
            </div>

            <div className="blogtext">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, inventore dolorum minima qui tempore ipsa consectetur iusto minus cumque consequuntur.</p>

              <button>Read More</button>
            </div>
          </div>

        </div>
      </div> 



    </section>
  )
}

export default CardContent