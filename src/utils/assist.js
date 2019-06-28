import dayjs from 'dayjs'

export const formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date) return date
  return dayjs(date).format(format)
}

export const removeNoChild = data => {
  return data.filter(item => item.children && item.children.length)
}

export const deepCopy = source => {
  let target
  if (source instanceof Array) {
    target = []
    for (const val of source) {
      target.push(deepCopy(val))
    }
  } else if (source instanceof Object) {
    target = {}
    for (const key in source) {
      target[key] = deepCopy(source[key])
    }
  } else {
    target = source
  }
  return target
}

export const sleep = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
