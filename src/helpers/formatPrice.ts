export const formatPrice = (price: string | number) => {
  const newPrice = typeof price === 'string' ? price.replace(/\s+/g, '') : price || 0

  const [whole, fractional] = String(newPrice).split('.')

  return [whole.replace(/\B(?=(\d{3})+(?!\d))/g, ' '), fractional].filter((v) => v).join('.')
}
