import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@app/redux/hooks'

import { getUserCardHistory } from './redux/userCardHistory'

import Styles from './style.module.scss'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const questions = useAppSelector((state) => state?.userCard?.userCardHistory)
  const userId = null

  const getPageData = useCallback(() => {
    if (userId) {
      dispatch(getUserCardHistory(userId))
    }
  }, [dispatch, questions])

  useEffect(() => {
    getPageData()
  }, [getPageData])

  return (
    <div className={Styles.main_container}>
      <h1>Home Page</h1>
    </div>
  )
}
