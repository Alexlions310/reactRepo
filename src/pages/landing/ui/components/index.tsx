import React from 'react'
import Styles from './style.module.scss'

export const HowItWorksHeadings = (props) => {
  return (
    <>
      <h1 className={Styles.headingNum}>{props.headingNum}</h1>
      <h1 className={Styles.headingTxt}>{props.headingTxt}</h1>
    </>
  )
}

const BlogsLoadingBtn = () => {
  return (
    <>
      <button className={Styles.BlogsLoader}>Еще больше статей</button>
    </>
  )
}

export default BlogsLoadingBtn
