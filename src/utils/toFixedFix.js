/**
 * 使用定点表示法来格式化一个数
 * @param {Number} number 计算的数字
 * @param {Number} decimals 小数点后数字的个数
 * @returns {String} result 所给数值的定点数表示法的字符串形式
 */
const toFixedFix = (number, decimals = 2) => {
  if (typeof number === 'string') {
    return number
  }
  if (decimals > 20 || decimals < 0) {
    throw new RangeError('toFixed() digits argument must be between 0 and 20')
  }
  if (isNaN(number) || number >= Math.pow(10, 21)) {
    return number.toString()
  }
  if (typeof decimals === 'undefined' || decimals === 0) {
    return Math.round(number).toString()
  }

  let result = number.toString()
  const arr = result.split('.')

  // 整数的情况
  if (arr.length < 2) {
    result += '.'
    for (let i = 0; i < decimals; i += 1) {
      result += '0'
    }
    return result
  }

  const integer = arr[0]
  const decimal = arr[1]
  if (decimal.length === decimals) {
    return result
  }
  if (decimal.length < decimals) {
    for (let i = 0; i < decimals - decimal.length; i += 1) {
      result += '0'
    }
    return result
  }
  result = integer + '.' + decimal.substr(0, decimals)
  const last = decimal.substr(decimals, 1)

  // 四舍五入，转换为整数再处理，避免浮点数精度的损失
  if (parseInt(last, 10) >= 5) {
    const x = Math.pow(10, decimals)
    result = (Math.round(parseFloat(result) * x) + 1) / x
    result = result.toFixed(decimals)
  }

  return result
}

export default toFixedFix
