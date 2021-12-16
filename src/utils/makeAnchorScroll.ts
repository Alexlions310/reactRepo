export const makeAnchorScroll = (id: string) => {
  const anchor = document.querySelector(id)
  anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
