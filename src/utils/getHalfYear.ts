import moment from 'moment'

export const getHalfYear = () => {
  moment.locale('ru', { week: { dow: 1 } })

  const today = moment()

  const halfYear = []

  for (let i = 0; i < 6; i++) {
    const newMonth = today.clone().add(i, 'month')
    const nameMonth = newMonth.format('MMMM')
    const numberMonth = newMonth.format('MM')
    const yearMonth = newMonth.format('YYYY')

    const month = { year: yearMonth, month: { name: nameMonth, number: numberMonth }, days: [] }

    const startMonth = newMonth.clone().startOf('month').startOf('week')
    const endMonth = newMonth.clone().endOf('month').endOf('week')
    const startDay = startMonth.clone()

    while (!startDay.isAfter(endMonth)) {
      const day = { month: null, number: null }

      day.month = startDay.clone().format('MM')
      day.number = Number(startDay.clone().format('D'))

      month.days.push(day)
      startDay.add(1, 'day')
    }

    halfYear.push(month)
  }

  return halfYear
}
