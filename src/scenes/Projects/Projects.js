import React from 'react'
import apptSched from './appointment_sched.png'
import expressPreview from './express_preview.png'
import dailyPull from './daily_pull.png'
import styles from './Projects.module.scss'

class Projects extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1>Featured Projects</h1>
        <p>Some projects I've worked on recently.</p>
        <div className={styles.pageContainer}>
          <div className={styles.projects}>
            <h2><a href="https://trunkclub.com">Trunk Club</a></h2>
            <div className={styles.projectContainer}>
              <div className={styles.details}>
                <h3>Trunk Club Customer Appointment Scheduling</h3>
              </div>
                <div className={styles.imageContainer}>
                  <img src={apptSched} alt='appointment scheduling screen flow'/>
              </div>
            </div>
            <div className={styles.projectContainer}>
              <div className={styles.details}>
                <h3>Trunk Club Express Preview with Outfit Recommendations</h3>
              </div>
                <div className={styles.imageContainer}>
                  <img src={expressPreview} alt='appointment scheduling screen flow'/>
                </div>
            </div>
            <h2>Personal</h2>
            <div className={styles.projectContainer}>
              <div className={styles.details}>
                <h3><a href="https://dailypull.now.sh/">Daily Pull Tarot Card App</a></h3>
              </div>
                <div className={styles.imageContainer}>
                  <img src={dailyPull} alt='appointment scheduling screen flow'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
