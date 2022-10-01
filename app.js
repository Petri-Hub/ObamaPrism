export default class ObamaPrism{
   constructor(){

      this.firstSide = document.createElement('div')
      this.secondSide = document.createElement('div')
      this.thirdSide = document.createElement('div')
      this.fourthSide = document.createElement('div')
      this.allSides = [
         this.firstSide, 
         this.secondSide, 
         this.thirdSide, 
         this.fourthSide
      ]

      this.allSides.forEach((side, index) => {
         side.classList.add('prismSide')
         side.innerText = index
      })

      document.querySelector('body').append(...this.allSides)
   }
}

new ObamaPrism()