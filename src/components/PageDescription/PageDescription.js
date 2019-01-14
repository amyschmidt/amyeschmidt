import React from 'react'
import type { Node } from 'react'
import cx from 'classnames'
import styles from './PageDescription.module.scss'

type PropsT = {
  children?: ?Node,
  className?: ?string,
}

export const PageDescription = ({ children, className, ...props }: PropsT) => (
  <p className={cx(styles.pageDescription, className)} {...props}>
    {children}
  </p>
)

export default PageDescription
