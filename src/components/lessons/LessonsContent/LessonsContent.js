import React from 'react'
import './LessonsContent.css'


const LessonsContent = (props) => {

  let classname = ['LessonsContent', props.classname + 'cl']

  let lesson = props.lesson.charAt(0).toUpperCase() + props.lesson.slice(1)
  
  
  
  
  
  
  let lesContent = null
  if(!props.switch){
    console.log('it was false')
    lesContent = <h1>{props.greetings} {props.lang}  {props.lesson}</h1>
  }  else {
    console.log('it was true')
    
    let number = props.lessonNumber.charAt(0).toUpperCase() + props.lessonNumber.slice(1)
    lesContent = <h1>
       {lesson} {number}
    </h1>
  }

  // console.log('switch:', props.switch)
  return (
    <div className={classname.join(' ')}>
      {lesContent}
    </div>
  )
}

export default LessonsContent