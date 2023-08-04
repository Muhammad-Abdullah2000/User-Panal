import React from 'react';
import '../styles/About.css';
import aboutimg1 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import img13 from '../images/img13.jpg';

const About = () => {
    return (
        <section id='About'>
            <div className="aboutimg">
                <img src={aboutimg1} alt="" />
                <p style={{ fontSize: '25px', fontWeight: 'bold' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ex, dolore!</p> <br />
                <p style={{ fontSize: '13px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam laudantium  voluptates <br /> sit. Similique in eum odit, nostrum deserunt rerum.</p>

                <button>About Us</button>
            </div>

            <div className="aboutus">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, saepe sit. Enim esse ratione doloribus optio! Repellat odit consequuntur iure voluptate vitae impedit sed quos quam numquam tempora ab veritatis optio, voluptates nam, asperiores, odio adipisci velit maxime eaque unde laudantium esse repudiandae aperiam. Iure, et! Incidunt, aliquid iure. Qui sed, fuga aliquam eum at quod ut natus facere eveniet!

                </p>
            </div>
 
            <div className="latestBlogPost">

                <h1>Latest Blog posts</h1>


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


            <div className="Contact">
                <div className="ContactLeft">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <form action="">
                        <input type="text" name="" id="" placeholder='Name' />
                        <input type="email" name="" id="" placeholder='Email' />
                        <textarea name="" id="" cols="30" rows="7" placeholder='Context'></textarea>

                    </form>

                    <div className="subbtn">
                        <button>Send Message</button>
                    </div>



                </div>


                
            </div> 


        </section>
    )
}

export default About