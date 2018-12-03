import React, { Component } from 'react'

import Courses from '../components/courses/Courses'
import Lessons from'../components/lessons/Lessons'

class Course extends Component {

  state ={
    languages: ['English', 'French', 'German', 'Spanish'],
    english: { 
      switch: false,
      greetings: 'Welcome to your',
      numbers: ['one', 'two', 'three', 'four'],
      lang: 'English',
      lesson: 'lesson',
      classname: 'english'
    },
    french: {
      switch: false,
      greetings: 'Bienvenue à vous',
      numbers: ['un', 'deux', 'troix', 'quatre'],
      lang: 'Français ',
      lesson: 'leçon',
      classname: 'french'
    },
    german: {
      switch: false,
      greetings: 'Willkommen in Ihrem',
      numbers: ['enn', 'twee', 'drie', 'vier'],
      lang: 'Dutch',
      lesson: 'les',
      classname: 'german'
    },
    spanish: {
      switch: false,
      greetings: 'Bienvenido a tu',
      numbers: ['uno', 'dos', 'tres', 'cuantro'],
      lang: 'Espanol',
      lesson: 'leccion',
      classname: 'spanish'
    },
    selectedLang: null
  }

  changeLangStatus = () => {
    // e.preventDefault()
    console.log('asdfasdf we are here')
    // this.setState({selectedLesson: true})
    
  }

  changeLang = (language) => {
    // this.setState({selectedLesson: false})
    if(language === 'English'){
      // this.setState({...english, {switch: true}})
      this.setState({selectedLang: this.state.english})
    } else if (language === 'French'){  
      this.setState({selectedLang: this.state.french})
    } else if (language === 'German'){  
      this.setState({selectedLang: this.state.german})
    } else if (language === 'Spanish'){  
      this.setState({selectedLang: this.state.spanish})
    }
  }


  render() {
    // console.log(this.state.selectedLesson)
    return (
      <div>
        <Courses 
          languages={this.state.languages}
          click={this.changeLang}
          />      
        <Lessons 
          seltLang={this.state.selectedLang}
          />
      </div>
    )
  }
}


export default Course