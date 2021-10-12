export default class DomPopulating {
  static createSeason(n) {
    const bHeader = document.getElementById('bottom-header')
    bHeader.innerHTML = ''
    let i = 0
    while (i < n){
      bHeader.innerHTML += `<li>Season ${i+1}</li>`
      i++
      console.log(i)
    }
  }
}