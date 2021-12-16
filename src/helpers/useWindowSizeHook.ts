import React from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  })

  React.useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: document.documentElement.clientWidth, height: document.documentElement.clientHeight })

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
