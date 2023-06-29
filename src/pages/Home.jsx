import React, { useEffect, useState } from 'react'
import user from '../assets/Icons/user.svg'
import Socials from '../reuseables/socials'
import { experiences } from '../data'


const Home = () => {
  return (
    <>
      {/* <SectionIntro /> */}
      <SectionExperience />
    </>
  )
}

const SectionIntro = () => {
  return (
    <div>
    <section className='main-intro'>
      <div className="my-img-container">
        <img src={user} alt="user" className='my-img'/>
      </div>

      <div className='my-intro'>
        <p>Hello There!</p>
        <h1>I'm covenant</h1>
        <h3>I'm a web developer</h3>
        <Socials />
      </div>
    </section>
  </div>
  )
}

const SectionExperience = () => {
  const [currentExp, setCurrentExp] = useState('BrainBench')

  const current = experiences.find((experience) => experience.nameTag === currentExp)

  const handleExp = (event) => {
    setCurrentExp(event.target.textContent)
  }

  return (
    <>
      <h2 className='sectionTitle'>Experiences</h2>

      <div className='experiences'>
        {experiences.map((experience, index) => {
          return (
            <button key={index}className='exp-btn' onClick={handleExp}>{experience.nameTag}</button>
            )
          })}
      </div>
      
      <div className="expInfo">
        {current.nameTag}
      </div>
    </>
  )
}

export default Home