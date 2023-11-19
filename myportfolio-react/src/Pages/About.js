import React from 'react'

const About = () => {
  return (
    <div>
    <section id="about">
    <div className="about-content">
        <img src="Logos/profile-image.jpg" alt="Sagnik Chakraborty"/>
        <div className="social-media">
            <a href="https://github.com/eccentriccoder01" target="_blank" rel="noreferrer"><img src="./Logos/github.png" alt="GitHub"/></a>
            <a href="http://www.linkedin.com/in/sagnik-chakraborty-9aa473248" target="_blank" rel="noreferrer"><img src="./Logos/linkedin.png" alt="LinkedIn"/></a>
            <a href="https://www.instagram.com/mr.eccen.tric/" target="_blank" rel="noreferrer"><img src="./Logos/instagram.png" alt="Instagram"/></a>
            <a href="https://pin.it/7ewYiFJ" target="_blank" rel="noreferrer"><img src="./Logos/pinterest.png" alt="Pinterest"/></a>
            <a href="https://twitter.com/Mr_Eccen_tric" target="_blank" rel="noreferrer"><img src="./Logos/twitter.png" alt="Twitter"/></a>
        </div>
        <div className="buttons">
            <button id="contact-button"><a href="#contact">Contact Me</a></button>
        </div>
    </div>
    <div className="about-text">
        <h1>Sagnik Chakraborty</h1>
        <p>I'm Sagnik Chakraborty, a student pursuing BTech in Information Technology, a dynamic and aspiring enthusiast eager to explore and excel in DSA and in the fields of Front-End Web Development, Ethical Hacking and Embedded Systems. I also hold a deep fascination for Quantum Computing, Astronomy and extraterrestrials... Let's connect and collaborate on cutting-edge projects that can make a difference❕</p>
    </div>
</section>
    </div>
  )
}

export default About
