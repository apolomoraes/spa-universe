const linkHome = document.querySelector('.link-home')
const linkUniverse = document.querySelector('.link-universe')
const linkExplorer = document.querySelector('.link-explorer')

linkHome.classList.add('click')

function setActiveLink(element) {
  for (const link of [linkHome, linkUniverse, linkExplorer]) {
    link.classList.remove('click')
  }
  element.classList.add('click')
}

function setBg(bg) {
  document.body.className = ''
  document.body.className = bg
}

function homeClick() {
  setActiveLink(linkHome)
  setBg('home')
}

function universeClick() {
  setActiveLink(linkUniverse)
  setBg('universe')
}

function explorerClick() {
  setActiveLink(linkExplorer)
  setBg('exploration')
}

export { homeClick, universeClick, explorerClick }
