import React, { Component } from 'react'
import './Lessons.css'

import LessonsNavigation from './lessonsNavigation/LessonsNavigation'
import LessonsContent from './LessonsContent/LessonsContent'

class Lessons extends Component {

  state = {
    lessonContent: null,
    lessonContentNumber: null
  }


  // displayContent = (num) => {
  //   // console.log('it was clicked')
  //   return this.props.click
  // }
  
  clickThis = (num) => {
    // console.log('this was clicked')
    this.setState({lessonContent: true, lessonContentNumber: num})
    
  }

  render() {

    let lang = null 
    let display = null

     
    
    
    if(!this.props.seltLang) {
      lang = <div className='Lessons'>
        <h1>Welcome to your langauge lessons</h1>
        <p>Please select your language</p>
      </div>
    }  else {
      lang= <LessonsNavigation 
              lessonsNum={this.props.seltLang.numbers}
              lesson={this.props.seltLang.lesson}
              classname={this.props.seltLang.classname}
              click={this.clickThis}
            />
            
      
      
      if(!this.state.lessonContent) {
        display = <LessonsContent 
          switch={this.state.lessonContent}
          greetings={this.props.seltLang.greetings}
          lang={this.props.seltLang.lang}
          classname={this.props.seltLang.classname}
          lesson={this.props.seltLang.lesson}
        />
      } else {
        display = <LessonsContent 
          switch={this.state.lessonContent}
          lessonNum={this.state.lessonContentNum}
          greetings={this.props.seltLang.greetings}
          lang={this.props.seltLang.lang}
          classname={this.props.seltLang.classname}
          lesson={this.props.seltLang.lesson}
          lessonNumber={this.state.lessonContentNumber}
        />
      }
                
    }
                
                
                

    return (
        <div>
          {lang}
          {display}
        </div>
     
    )

  }
}


export default Lessons