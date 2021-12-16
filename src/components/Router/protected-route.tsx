import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAppSelector } from '@app/redux/hooks'

export const ProtectedRoute = ({ component: Component, allowedUsersTypes, ...rest }) => {
  const user = useAppSelector((state) => state.user.userData)
  const renderComponent = (props) => {
    return user ? (
      allowedUsersTypes.some((role) => user?.roles?.map((item) => item.name).includes(role)) ? (
        <Component {...props} />
      ) : (
        <Redirect to='/access-denied' />
      )
    ) : (
      <Redirect to='/' />
    )
  }

  return <Route {...rest} component={renderComponent} />
}
