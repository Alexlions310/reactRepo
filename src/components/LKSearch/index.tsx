import React, { useState } from 'react'
import Styles from './style.module.scss'

const mockData = {
  nutrition: [
    {
      title: 'Тест первый',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
    {
      title: 'Тест второй',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
    {
      title: 'Тест третий',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
    {
      title: 'Тест четвертый',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
    {
      title: 'Тест пятый',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
    {
      title: 'Тест шестой',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
    {
      title: 'Тест седьмой',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
    {
      title: 'Тест восьмой',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
    {
      title: 'Тест девятый',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
    {
      title: 'Тест десятый',
      description: 'Описание достаточно длинное, что не влезает в контейнер',
    },
  ],
}

const handleSubmit = (e) => {
  e.preventDefault()
}

export const LKSearch = () => {
  const [result, setResult] = useState('')
  return (
    <>
      <form className={Styles.inputForm} onSubmit={handleSubmit}>
        <input type='text' placeholder=' ' className={Styles.input} onChange={(e) => setResult(e.target.value)} />
        <button type='reset' className={Styles.resetButton} onClick={() => setResult('')} />
        {result === '' ? null : (
          <ul className={Styles.result}>
            {mockData.nutrition.map(
              (item, index) =>
                item.title.toLowerCase().includes(result.toLowerCase()) && (
                  <li key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ),
            )}
          </ul>
        )}
      </form>
    </>
  )
}
