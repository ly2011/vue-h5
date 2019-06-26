import dayjs from 'dayjs'

export const formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date) return date
  return dayjs(date).format(format)
}
