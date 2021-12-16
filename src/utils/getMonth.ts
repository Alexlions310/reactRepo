import moment from 'moment'

export const getMonth = () => {
  moment.locale('ru', { week: { dow: 1 } })

  const today = moment()
  const startMonth = today.clone().startOf('month').startOf('week')
  const endMonth = today.clone().endOf('month').endOf('week')
  const startDay = startMonth.clone()

  const month = []

  while (!startDay.isAfter(endMonth)) {
    month.push(startDay.clone().format('D'))
    startDay.add(1, 'day')
  }

  return month
}
