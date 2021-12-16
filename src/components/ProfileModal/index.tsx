import React from 'react'
import Styles from './style.module.scss'
import { useAppSelector, useAppDispatch } from '@app/redux/hooks'
import { openProfileModal } from './redux/profileSlice'
import closeButton from '@icons/close.svg'
import { DrawerPanel } from '@components/Drawer'
import { ProfileModalHeader } from './components/ProfileModalHeader'
import { EditProfileForm } from '@components/EditProfileForm'
import { ProfileModalInput } from './components/ProfileModalInput'

export const ProfileModal = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user.info)
  const isProfileModalOpen: boolean = useAppSelector((state) => state.profile.modal.isModalOpen)

  return (
    <DrawerPanel width='100%' anchor='right' open={isProfileModalOpen} onClose={() => dispatch(openProfileModal())}>
      <div className={Styles.container}>
        <div>
          <img src={closeButton} className={Styles.closeButton} onClick={() => dispatch(openProfileModal())} />
        </div>
        <ProfileModalHeader />
        {user.role === 'patient' && (
          <>
            <EditProfileForm formTitle='Личные данные'>
              <ProfileModalInput
                placeholder={user.first_name}
                labelName='Имя*'
                inputName='first_name'
                inputType='text'
              />
              <ProfileModalInput
                placeholder={user.last_name}
                labelName='Фамилия'
                inputName='last_name'
                inputType='text'
              />
              <ProfileModalInput
                placeholder={user.birthday}
                labelName='Дата рождения*'
                inputName='birthday'
                inputType='date'
              />
            </EditProfileForm>
            <EditProfileForm formTitle='Контактные данные'>
              <ProfileModalInput placeholder={user.phone} labelName='Телефон*' inputName='phone' inputType='tel' />
              <ProfileModalInput placeholder={user.email} labelName='Email*' inputName='email' inputType='email' />
            </EditProfileForm>
          </>
        )}
        {user.role === 'doctor' && (
          <EditProfileForm formTitle='Личные данные'>
            <ProfileModalInput placeholder={user.first_name} labelName='Имя*' inputName='first_name' inputType='text' />
            <ProfileModalInput
              placeholder={user.last_name}
              labelName='Фамилия'
              inputName='last_name'
              inputType='text'
            />
          </EditProfileForm>
        )}
      </div>
    </DrawerPanel>
  )
}
