

import React from 'react'
import './Courses.css'

import Course from './course/Course'

const Courses = (props) => {
  
  let courseItems = props.languages.map((lang) => {
    return (
      <Course 
        courseItem={lang}
        key={lang}
        click={props.click}/>
      )
    })
    
  return (
    <div className='Courses'>
      {courseItems}
    </div>
  )

}

export default Courses