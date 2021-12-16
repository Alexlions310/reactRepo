import React from 'react'
import Styles from './style.module.scss'
import { ReferenceList } from '@components/user/ReferenceFull/components/ReferenceList'
import { CardContainer } from '@components/ui/CardContainer'
import { Nutrition } from '../../Сonclusion/components/Nutrition'
import reference1 from '@icons/reference-full1.svg'
import reference2 from '@icons/reference-full2.svg'
import reference3 from '@icons/reference-full3.svg'
import { LifeStyle } from './components/LifeStyle'
import { MedicalReport } from './components/MedicalReport'

interface ReferenceFullProps {
  fullness?: boolean
}

export const ReferenceFull: React.FC<ReferenceFullProps> = () => {
  const listNutraceuticalsEveryDay = [
    'Витамин Д 10000 МЕ',
    'Омега 3 – NFO',
    'Фолат Солгар 400 мкг',
    'АрмоЛипид',
    'Хрома пиколинат Солгар',
    'Артишок',
    'Магния цитрат Солгар 200 мг',
  ]

  const listNutraceuticalsEveryOtherDay = ['Нейробион 3,0 в/м 2']
  const listNutraceuticalsTwoInWeek = ['Нейробион 3,0 в/м 2', 'Магния цитрат Солгар 200 мг']
  const lifeStyle = [
    { id: 1, title: 'Утренняя зарядка', time: '15 минут' },
    { id: 2, title: 'Йога', time: '15 минут' },
    { id: 3, title: 'Тренировка по плаванию', time: '30 минут' },
    { id: 4, title: 'Сон', time: '8 часов' },
  ]
  return (
    <>
      <div className={Styles.reference__container}>
        <CardContainer
          src={reference1}
          title='Нутрицевтики'
          backgroundColor='#FFE4EE;'
          content={
            <>
              <ReferenceList title='Каждый день' list={listNutraceuticalsEveryDay} />
              <ReferenceList title='Через день' list={listNutraceuticalsEveryOtherDay} />
              <ReferenceList title='2 раза в неделю' list={listNutraceuticalsTwoInWeek} />
            </>
          }
        />
        <CardContainer src={reference2} title='Питание' content={<Nutrition />} />
        <CardContainer src={reference3} title='Образ жизни' content={<LifeStyle list={lifeStyle} />} />
      </div>
      <MedicalReport />
      <div className={Styles.reference__mobile}>
        <button className={`${Styles.button} ${Styles.nutraceuticals__mobile}`}>
          <img src={reference1} className={Styles.reference__img} alt='reference' />
          <h6 className={Styles.reference__title}>Нутрицевтики</h6>
        </button>
        <button className={`${Styles.button} ${Styles.nutrition__mobile}`}>
          <img src={reference2} className={Styles.reference__img} alt='reference' />
          <h6 className={Styles.reference__title}>Питание</h6>
        </button>
        <button className={`${Styles.button} ${Styles.life__mobile}`}>
          <img src={reference3} className={Styles.reference__img} alt='reference' />
          <h6 className={Styles.reference__title}>Образ жизни</h6>
        </button>
      </div>
    </>
  )
}
