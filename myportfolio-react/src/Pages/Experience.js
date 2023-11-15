import React from 'react'

const Experience = () => {
  return (
    <div>
    <section id="experience">
    <h2>Experience</h2>
    <hr/>
    <div className="experience-card">
        <div className="experience-logo">
            <img src="Logos/CodSoft.jpg" alt="CodSoft"/>
        </div>
        <div className="experience-details">
            <h3>Web Developer Intern</h3>
            <p>CodSoft · Internship</p>
            <p>I look forward towards using this learning opportunity to develop my skills to the zenith and gain hands-on experience to the best of my ability...</p>
            <embed src="media/Internship Offer Letter - CodSoft.pdf" type="application/pdf" width="100%" height="200px" />
        </div>
    </div>
    <div className="experience-card">
        <div className="experience-logo">
            <img src="Logos/DevTown.jpg" alt="DevTown"/>
        </div>
        <div className="experience-details">
            <h3>Campus Ambassador Intern</h3>
            <p>DevTown · Part-time</p>
            <p>I look forward towards contributing and supporting this community to grow. DevTown at ShapeAI🌍 is a team with an aim to provide students with a platform to research and make projects in the field of AI and ML...</p>
            <embed src="media/DevTown - Campus Ambassador Offer Letter.pdf" type="application/pdf" width="100%" height="200px" />
        </div>
    </div>
    <div className="experience-card">
        <div className="experience-logo">
            <img src="Logos/Tare Zameen Foundation.jpg" alt="Tare Zameen Foundation"/>
        </div>
        <div className="experience-details">
            <h3>Fundraiser Intern</h3>
            <p>Tare Zameen Foundation · Part-time</p>
            <p>I was appointed as a fundraiser intern for the project titled "Meri Pehchan", which provides basic education and books to unprivileged boys and girls...</p>
            <embed src="media/Certificate + Award - Internship at Tare Zameen Foundation.pdf" type="application/pdf" width="100%" height="200px" />
        </div>
    </div>
</section> 
    </div>
  )
}

export default Experience
