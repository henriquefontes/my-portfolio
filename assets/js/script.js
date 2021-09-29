const handlePageScroll = () => {
  const $header = document.querySelector('.header')
  const isScrollAfterHeader = window.scrollY >= 70

  const setHeaderBackground = isScrollAfterHeader
    ? $header.classList.add('header--background')
    : $header.classList.remove('header--background')
}

const typeMachine = ({ element, messages, interval, loop }) => {
  let typeEffect

  const renderMessageIntoDOM = () => {
    let currentMessageIndex = 0
    let currentLetterIndex = 0
    let currentMessage = ''
    let currentLetters = ''
    let shouldBeRemoved = false

    const renderMessage = () => {
      const isLastMessage = currentMessageIndex == messages.length

      if (isLastMessage) {
        if (loop) {
          currentMessageIndex = 0
        } else {
          clearInterval(typeEffect)
          return
        }
      }

      const changeMessage = () => {
        currentMessage = messages[currentMessageIndex++]
        currentLetterIndex = 0
      }
      
      const addLetter = () => {
        currentMessage = messages[currentMessageIndex]
        currentLetters = currentMessage.slice(0, currentLetterIndex++)
        element.textContent = currentLetters
      }

      const removeLetter = () => {
        currentMessage = messages[currentMessageIndex]
        currentLetters = currentMessage.slice(0, currentLetterIndex--)        
        element.textContent = currentLetters

        if (currentLetters.length == 0) {
          shouldBeRemoved = false
          changeMessage()
        }
      }

      const setState = shouldBeRemoved ? removeLetter : addLetter

      setState()
      
      const isLastLetter = currentLetters.length == currentMessage.length

      if (isLastLetter) {
        shouldBeRemoved = true
      }

    }

    typeEffect = setInterval(renderMessage, interval)
  }

  renderMessageIntoDOM()
}

const bannerMessages = [
  "Web developer",
  "Games enjoyer",
  "Javascript enthusiast"
]

const typeBannerMessages = typeMachine({
  element: document.getElementById('work'),
  messages: bannerMessages,
  interval: 80,
  loop: true
})

window.addEventListener('scroll', handlePageScroll)