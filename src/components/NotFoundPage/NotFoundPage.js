import React from 'react'
import PageHeader from 'components/PageHeader'
import PageDescription from 'components/PageDescription'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => (
  <div className={styles.main}>
    <PageHeader>Oh no! That page doesn't exist.</PageHeader>
    <PageDescription>
      It looks like the page you were trying to reach doesn't exist anymore. Try
      heading back to the
      <a className={styles.link} href="/">
        home page
      </a>.
    </PageDescription>
  </div>
)

export default NotFoundPage
