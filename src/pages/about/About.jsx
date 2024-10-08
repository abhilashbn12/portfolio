import React from 'react'
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import Skills from '../../components/Skills';
import CV from '../../assets/AbhilashBN.pdf';
import { resume } from '../../data';
import './about.css';
import ResumeItem from '../../components/ResumeItem';
const About = () => {
    return (
        <main className="section container">
            <section className="about">
                <h2 className="section_title">
                    About <span>Me</span>
                </h2>
                <div className="about_container grid">
                    <div className="about_info">
                        <h3 className="section_subtitle">
                            Personal Infos
                        </h3>
                        <ul className="info_list grid">
                            <Info />
                        </ul>
                        <a href={CV} download='' className='button'>Download Cv{' '} <span className='button_icon'>
                            <FaDownload />
                        </span></a>
                    </div>
                    <div className="stats grid">
                        <Stats />
                    </div>
                </div>
            </section>

            <div className="separator"></div>
            <section className="skills">
                <h3 className="section_subtitle subtitle_center">My Skills</h3>
                <div className="skills_container grid">
                    <Skills />
                </div>
                <div className="separator"></div>
                <h3 className="section_subtitle subtitle_center">Education</h3>

                <div className="resume_container grid">
                    <div className="resume_data">
                        {resume.map((val) => {
                            return <ResumeItem key={val.id} {...val} />
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About