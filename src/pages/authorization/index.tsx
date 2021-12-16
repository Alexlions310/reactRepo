import React from 'react'
import Styles from './style.module.scss'
import { AuthorizationForm } from './components/AuthorizationForm'
import { InfoColumn } from './components/AuthorizationForm/InfoColumn'

export const AuthorizationPage = () => {
  return (
    <section className={Styles.section}>
      <InfoColumn />
      <AuthorizationForm />
    </section>
  )
}
