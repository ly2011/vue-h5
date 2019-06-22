import dayjs from 'dayjs'
import toFixedFix from '@/utils/toFixedFix'

/**
 * 格式化日期
 * @param {Number, String, Date} value
 * @param {String} format
 */
export const formatDate = (value, format = 'YYYY-MM-DD') => (value ? dayjs(value).format(format) : value)
/**
 * 格式化月份
 * @param {Number, String, Date} value
 * @param {String} format
 */
export const formatMonth = (value, format = 'YYYY-MM') => formatDate(value, format)
/**
 * 格式化金额
 * @param {Number} value
 * @param {Number} decimals
 */
export const formatCurrency = (value, decimals = 2) => (typeof value === 'number' ? toFixedFix(value, decimals) : value)
