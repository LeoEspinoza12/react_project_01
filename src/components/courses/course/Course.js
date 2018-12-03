import React from 'react'
import './Course.css'


const Course = (props) => {
  
  const classnames = ['Course', props.courseItem]
  
  return (
    <div className={classnames.join(' ')}>
      <h1 onClick={() => (props.click(props.courseItem))}>
        {props.courseItem}
      </h1>
    </div>
  )
}
  
export default Course