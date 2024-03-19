import React from 'react'
import './styles.css'
export default function Home() {
  return (
    <div>
    <div className='homeheader'>
   
    <section class="showcase-area" id="showcase">
      <div class="showcase-container">
        <h1 class="main-title" id="home">Learn right things</h1>
        <a href="#food-menu" class="btn btn-primary">Course</a>
      </div>
    </section>

    <section id="about">
      <div class="about-wrapper container">
        <div class="about-text">
          <p class="small">About Us</p>
          <h2>Elevating Education, Empowering Minds.</h2>
          <p>
            Welcome to our Learning Management System (LMS), where you can master programming languages like C, 
            C++, and Java through online classes and tests. Our platform is designed to provide an engaging learning 
            experience for learners of all levels. With interactive lessons and personalized support from experienced instructors,
             you'll develop a strong foundation in programming. Join us on a journey of discovery and skill-building
              as you unlock your potential with our LMS.
          </p>
        </div>
        <div class="about-img">
          <img src={require("./new5.jpg")} alt="food" />
        </div>
      </div>
    </section>
    <section id="food">
      <h2>Category</h2>
      <div class="food-container container">
        <div class="food-type fruite">
          <div class="img-container">
            <img src={require("./new1.jpg")} alt="error" />
            <div class="img-content">
              <h3>PRACTICE</h3>
              <a
                href="#"
                class="btn btn-primary"
                target="blank"
                >learn more</a
              >
            </div>
          </div>
        </div>
        <div class="food-type vegetable">
          <div class="img-container">
            <img src={require("./new2.jpg")} alt="error" />
            <div class="img-content">
              <h3>TEST</h3>
              <a
                href="#"
                class="btn btn-primary"
                target="blank"
                >learn more</a
              >
            </div>
          </div>
        </div>
        <div class="food-type grin">
          <div class="img-container">
            <img src={require("./new3.jpg")} alt="error" />
            <div class="img-content">
              <h3>Online class  </h3>
              <a
                href="#"
                class="btn btn-primary"
                target="blank"
                >learn more</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="food-menu">
      <h2 class="food-menu-heading">Course</h2>
      <div class="food-menu-container container">
        <div class="food-menu-item">
          <div class="food-img">
            <img src={require("./c logo.png")} alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">course 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">language: c</p>
          </div>
        </div>

        <div class="food-menu-item">
          <div class="food-img">
            <img
              src={require("./c++logo.webp")}
              alt="error"
            />
          </div>
          <div class="food-description">
            <h2 class="food-titile">course 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">language: c++</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src={require("./pythonlogo.png")} alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">course 3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">language:  python</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src={require("./javalogo.png")} alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">course 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">language:  Java</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src={require("./html.jpg")} alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">course 5</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">language: fontend</p>
          </div>
        </div>
        <div class="food-menu-item">
          <div class="food-img">
            <img src={require("./react.jpg")} alt="" />
          </div>
          <div class="food-description">
            <h2 class="food-titile">course 6</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              quae.
            </p>
            <p class="food-price">language: react</p>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials">
      <h2 class="testimonial-title">What Our Testimonial Say</h2>
      <div class="testimonial-container container">
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg" alt="" />
              <p class="customer-name">Ross Lee</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img
                src={require("./female.jpg")}
                alt=""
              />
              <p class="customer-name">Amelia Watson</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg" alt="" />
              <p class="customer-name">Ben Roy</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            voluptas cupiditate aspernatur odit doloribus non.
          </p>
         
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="contact-container container">
        <div class="contact-img">
          <img src={require("./female2.webp")} alt="" />
        </div>

        <div class="form-container">
          <h2>Contact Us</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-Mail" />
          <textarea
            cols="30"
            rows="6"
            placeholder="Type Your Message"
          ></textarea>
          <a href="#" class="btn btn-primary">Submit</a>
        </div>
      </div>
    </section>
    <footer id="footer">
      <h2>learn &copy; all rights things</h2>
    </footer>
    </div>
    </div>
  )
}
