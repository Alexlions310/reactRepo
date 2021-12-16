import React from 'react'
import Styles from './style.module.scss'
import { useAppSelector } from '@app/redux/hooks'
import breakfast from '@icons/reports-breakfast.svg'
import lunch from '@icons/reports-lunch.svg'
import dinner from '@icons/reports-dinner.svg'
import products from '@icons/reports-products.svg'

export const DietReport = ({ onChange, dietValues }) => {
  const reportsErrors = useAppSelector((state) => state.reports.errors)
  return (
    <fieldset name='diet' onChange={onChange} className={Styles.fieldset}>
      <label className={Styles.label}>
        <img src={breakfast} alt='завтрак' /> Завтрак*
      </label>
      <textarea
        name='breakfast'
        value={dietValues?.breakfast}
        className={Styles.textarea}
        placeholder='Введите рекомендации для завтрака'
      />
      <span className={Styles.error}>{reportsErrors && reportsErrors.breakfast}</span>
      <label className={Styles.labelRemark}>Примечание (необязательно)</label>
      <textarea
        name='breakfast_remark'
        value={dietValues?.breakfast_remark}
        className={Styles.textareaRemark}
        placeholder='Введите примечание к рекомендации'
      />
      <label className={Styles.label}>
        <img src={lunch} alt='обед' /> Обед*
      </label>
      <textarea
        name='lunch'
        value={dietValues?.lunch}
        className={Styles.textarea}
        placeholder='Введите рекомендации для обеда'
      />
      <span className={Styles.error}>{reportsErrors && reportsErrors.lunch}</span>
      <label className={Styles.labelRemark}>Примечание (необязательно)</label>
      <textarea
        name='lunch_remark'
        value={dietValues?.lunch_remark}
        className={Styles.textareaRemark}
        placeholder='Введите примечание к рекомендации'
      />
      <label className={Styles.label}>
        <img src={dinner} alt='ужин' /> Ужин*
      </label>
      <textarea
        name='dinner'
        value={dietValues?.dinner}
        className={Styles.textarea}
        placeholder='Введите рекомендации для ужина'
      />
      <span className={Styles.error}>{reportsErrors && reportsErrors.dinner}</span>
      <label className={Styles.labelRemark}>Примечание (необязательно)</label>
      <textarea
        name='dinner_remark'
        value={dietValues?.dinner_remark}
        className={Styles.textareaRemark}
        placeholder='Введите примечание к рекомендации'
      />
      <label className={Styles.label}>
        <img src={products} alt='продукты' /> Продукты*
      </label>
      <textarea
        name='products'
        value={dietValues?.products}
        className={Styles.textarea}
        placeholder='Введите рекомендации для продуктов'
      />
      <span className={Styles.error}>{reportsErrors && reportsErrors.products}</span>
      <label className={Styles.labelRemark}>Примечание (необязательно)</label>
      <textarea
        name='products_remark'
        value={dietValues?.products_remark}
        className={Styles.textareaRemark}
        placeholder='Введите примечание к рекомендации'
      />
    </fieldset>
  )
}
