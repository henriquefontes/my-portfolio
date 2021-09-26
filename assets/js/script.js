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

    const renderWord = () => {
      const isLastMessage = currentMessageIndex == messages.length

      if (isLastMessage) {
        if (loop) {
          currentMessageIndex = 0
        } else {
          clearInterval(typeEffect)
          return
        }
      }

      currentMessage = messages[currentMessageIndex]
      currentLetters = currentMessage.slice(0, currentLetterIndex++)
      
      element.textContent = currentLetters
      
      const isLastLetter = currentLetters.length == currentMessage.length

      if (isLastLetter) {
        currentMessageIndex++
        currentLetterIndex = 0
      }

    }

    typeEffect = setInterval(renderWord, interval)
  }

  renderMessageIntoDOM()
}

const bannerMessages = [
  "Web developer",
  "Games enjoyer",
  "Zula Hater"
]

const typeMessages = typeMachine({
  element: document.getElementById('work'),
  messages: bannerMessages,
  interval: 200,
  loop: true
})

window.addEventListener('scroll', handlePageScroll)