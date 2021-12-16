import React from 'react'
import Styles from './style.module.scss'

import fileIcon from '@icons/file-icon.png'
import arrowIcon from '@icons/arrow-down-small.svg'

export const Documents: React.FC = () => {
  return (
    <div className={Styles.documents}>
      <div className={Styles.block}>
        <div className={Styles.content}>
          <div className={Styles.file}>
            <div className={Styles.icon}>
              <img src={fileIcon} alt='Иконка' />
              <span className={Styles.format}>pdf</span>
            </div>
            <div className={Styles.wrap}>
              <span className={Styles.name}>1222_232332442.pdf</span>
              <div className={Styles.info}>
                <img src={arrowIcon} alt='Иконка' />
                <span>17 KB&nbsp;|&nbsp;1 марта, 2021 г, 12:24</span>
              </div>
            </div>
          </div>
          <div className={Styles.file}>
            <div className={Styles.icon}>
              <img src={fileIcon} alt='Иконка' />
              <span className={Styles.format}>pdf</span>
            </div>
            <div className={Styles.wrap}>
              <span className={Styles.name}>1222_232332442.pdf</span>
              <div className={Styles.info}>
                <img src={arrowIcon} alt='Иконка' />
                <span>17 KB&nbsp;|&nbsp;1 марта, 2021 г, 12:24</span>
              </div>
            </div>
          </div>
          <div className={Styles.file}>
            <div className={Styles.icon}>
              <img src={fileIcon} alt='Иконка' />
              <span className={Styles.format}>pdf</span>
            </div>
            <div className={Styles.wrap}>
              <span className={Styles.name}>1222_232332442.pdf</span>
              <div className={Styles.info}>
                <img src={arrowIcon} alt='Иконка' />
                <span>17 KB&nbsp;|&nbsp;1 марта, 2021 г, 12:24</span>
              </div>
            </div>
          </div>
          <div className={Styles.file}>
            <div className={Styles.icon}>
              <img src={fileIcon} alt='Иконка' />
              <span className={Styles.format}>pdf</span>
            </div>
            <div className={Styles.wrap}>
              <span className={Styles.name}>1222_232332442.pdf</span>
              <div className={Styles.info}>
                <img src={arrowIcon} alt='Иконка' />
                <span>17 KB&nbsp;|&nbsp;1 марта, 2021 г, 12:24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.block}>
        <span className={Styles.title}>Вчера</span>
        <div className={Styles.content}>
          <div className={Styles.file}>
            <div className={Styles.icon}>
              <img src={fileIcon} alt='Иконка' />
              <span className={Styles.format}>pdf</span>
            </div>
            <div className={Styles.wrap}>
              <span className={Styles.name}>1222_232332442.pdf</span>
              <div className={Styles.info}>
                <img src={arrowIcon} alt='Иконка' />
                <span>17 KB&nbsp;|&nbsp;1 марта, 2021 г, 12:24</span>
              </div>
            </div>
          </div>
          <div className={Styles.file}>
            <div className={Styles.icon}>
              <img src={fileIcon} alt='Иконка' />
              <span className={Styles.format}>pdf</span>
            </div>
            <div className={Styles.wrap}>
              <span className={Styles.name}>1222_232332442.pdf</span>
              <div className={Styles.info}>
                <img src={arrowIcon} alt='Иконка' />
                <span>17 KB&nbsp;|&nbsp;1 марта, 2021 г, 12:24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
