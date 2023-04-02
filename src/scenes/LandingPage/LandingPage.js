import React from 'react'
import { Jumbotron } from 'reactstrap';
import styles from './LandingPage.module.scss'

class LandingPage extends React.Component {
  render() {
    return (
      <div className={styles.landingPageContainer}>
        <div className={styles.hero}/>
        <Jumbotron className={styles.jumbotron}>
          <h1 className="display-3">Hi, my name is Amy!</h1>
          <p className="lead">I'm an engineering manager based in NYC 
            working at Nordstrom. I graduated from The University
            of Missouri in 2015 with a B.S. in Computer Science. You can find my
            technical writing on<a href="https://medium.com/@ammmye" target="_blank" rel="noopener noreferrer">Medium</a> 
             and my code on<a href="https://github.com/amyschmidt" target="_blank" rel="noopener noreferrer">Github</a>.
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default LandingPage
