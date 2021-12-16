import React, { useState } from 'react'
import Styles from './style.module.scss'
import { ReferenceEmpty } from '@components/user/ReferenceEmpty'
import { ReferenceFull } from '@components/user/ReferenceFull'
import { WelcomeId } from '@components/user/WelcomeId'
import { ForYou } from '@components/ui/ForYou'
import { useAppSelector } from '@app/redux/hooks'

export const UserSpace = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fullness, setFullnes] = useState(false)
  const name = useAppSelector((state) => state.auth.user.info.first_name)
  return (
    <section className={Styles.section}>
      <WelcomeId name={name} fullness={fullness} />
      {fullness ? <ReferenceEmpty /> : <ReferenceFull fullness={fullness} />}
      {/* <ForYou /> */}
    </section>
  )
}
