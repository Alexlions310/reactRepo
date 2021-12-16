import React, { useState } from 'react'
import Styles from './style.module.scss'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import icon from '@icons/map.svg'
import { useAppSelector } from '@app/redux/hooks'

export const MapComponent = (props) => {
  const dataHandler = useAppSelector((state) => state.consultationPage.data)
  const [ymaps, setYmaps] = useState()
  const loadMap = (ymaps) => {
    console.log(ymaps.map)
    setYmaps(ymaps)
  }
  const createMark = (ymaps, address) => {
    if (!ymaps) {
      return
    }
    const template = ymaps.templateLayoutFactory.createClass(
      `<div class="${Styles.mark_container}">` +
        `<span class="${Styles.mark_img}" />` +
        `<p class="${Styles.text}">${address}</p>` +
        '</div>',
    )

    return template
  }
  return (
    <YMaps>
      <Map
        onLoad={loadMap}
        className={`${Styles.map} ${props.className}`}
        defaultState={{
          center: [dataHandler.coordinateY, dataHandler.coordinateX],
          zoom: 14,
        }}
        modules={['templateLayoutFactory', 'layout.ImageWithContent']}
      >
        <Placemark
          // defaultGeometry={[dataHandler.coordinateY, dataHandler.coordinateX]}
          geometry={[dataHandler.coordinateY, dataHandler.coordinateX]}
          options={{
            iconLayout: 'default#imageWithContent',
            iconImageHref: icon,
            iconImageSize: [38, 54],
            iconImageOffset: [-50, -18],
            iconContentLayout: createMark(ymaps, dataHandler.address),
          }}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        />
      </Map>
    </YMaps>
  )
}
