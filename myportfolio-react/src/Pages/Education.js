import React from 'react'

const Education = () => {
  return (
    <div>
    <section id="education">
    <h2>Education</h2>
    <hr/>
    <div className="education-container">
        <div className="education-card">
            <div className="education-logo">
                <img src="Logos/JGEC.png" alt="Jalpaiguri Government Engineering College"/>
            </div>
            <div className="education-details">
                <h3>Jalpaiguri Government Engineering College</h3>
                <p>Bachelor of Technology - BTech, Information Technology</p>
                <p>Nov 2022 - Jul 2026</p>
            </div>
        </div>
        
        <div className="education-card">
            <div className="education-logo">
                <img src="Logos/DPS Siliguri.jpg" alt="Delhi Public School, Siliguri"/>
            </div>
            <div className="education-details">
                <h3>Delhi Public School, Siliguri</h3>
                <p>Senior Secondary, Physical Sciences, Mathematics, Computer Science, Economics, English</p>
                <p>Apr 2020 - Jun 2022</p>
                <p>Grade: 95%</p>
            </div>
        </div>
        
        <div className="education-card">
            <div className="education-logo">
                <img src="Logos/DPS Siliguri.jpg" alt="Delhi Public School, Siliguri"/>
            </div>
            <div className="education-details">
                <h3>Delhi Public School, Siliguri</h3>
                <p>Secondary, Science, Mathematics, History and Politics, Geography, Economics, English, Bengali</p>
                <p>Apr 2010 - Mar 2020</p>
                <p>Grade: 95.6%</p>
            </div>
        </div>
    </div>
    
</section>     
    </div>
  )
}

export default Education
