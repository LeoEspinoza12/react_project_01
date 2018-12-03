import React from 'react'
import './LessonsNavigation.css'


const LessonsNavigation = (props) => {
  
  let names = ['LessonsNavigation', props.classname]
  let les = props.lesson.charAt(0).toUpperCase() + props.lesson.slice(1)
  let lesson = props.lessonsNum.map((num) => {
    const lesNum = num.charAt(0).toUpperCase() + num.slice(1)
    return(
      <button 
        key={num}
        onClick={()=> (props.click(num))}>
          {les} {lesNum}
      </button>
    )
  })

// console.log(names.join(' '))
  return (
      <div className={names.join(' ')}>
        {lesson}
      </div>
  )
}

export default LessonsNavigation