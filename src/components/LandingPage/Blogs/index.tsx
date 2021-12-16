import React from 'react'
import Parser from 'html-react-parser'
import Styles from './style.module.scss'
import mainBlogImg from '@images/mainBlogImg.png'
import additionalBlog1 from '@images/additionalBlog1.png'
import additionalBlog2 from '@images/additionalBlog2.png'
import additionalBlog3 from '@images/additionalBlog3.png'
import { MainBlog } from './MainBlog'
import { AdditionalBlog } from './AdditionalBlog'
export const Blogs = () => (
  <div className={Styles.Blogs_container}>
    <MainBlog
      img={mainBlogImg}
      heading='Топ 10 самых популярных видов спорта'
      paragraph='В этой статье мы обозначим 10 самых популярных видов спорта. Также узнаем, какой самый популярный вид спорта на сегодняшний день'
      time='8 января'
      type='Питание'
    />
    <div className={Styles.Blogs_container__additionalBlogs}>
      <AdditionalBlog
        img={additionalBlog1}
        heading='Основы здорового образа жизни'
        paragraph='В современном обществе отмечается тенденция здорового образа жизни'
        time='8 января'
        type='Готовка'
      />
      <AdditionalBlog
        img={additionalBlog2}
        heading='Хобби и занятия по интересам'
        paragraph='Резкий переход от вредных к здоровому образу жизни бывает очень сложным'
        time='8 января'
        type='Образ жизни'
      />
      <AdditionalBlog
        img={additionalBlog3}
        heading='Спорт или физическая культура?'
        paragraph={Parser('Что такое спорт и чем он отличается <br /> от физической культуры')}
        time='8 января'
        type='Спорт'
      />
    </div>
  </div>
)
