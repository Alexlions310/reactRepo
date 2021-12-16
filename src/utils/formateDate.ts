import moment from 'moment'

export const formateDate = (date) => {
  return moment(date).format('DD MMMM')
}

export const formateDateShort = (date) => {
  return moment(date).format('DD MMM')
}

export const formateDateDay = (date) => {
  return moment(date).format('dddd')
}

export const getDate = (day?) => {
  if (day) {
    return moment().add(day, 'days').format('YYYY-MM-DD')
  }

  return moment().format('YYYY-MM-DD')
}
