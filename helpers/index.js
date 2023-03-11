export const formatMoney = (cantidad) => {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}
