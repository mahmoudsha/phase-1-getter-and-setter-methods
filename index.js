// Add your Circle class here
let circle;
class Circle{
    constructor(rad){
      this.rad = rad
    }
   get radius(){
    return this.rad
   }
   set radius(newRad){
    this.rad = newRad
   } 
   set diameter(diameter){
    this.rad = diameter / 2
   }
   set circumference(circumference){
    this.rad = (circumference / (2 * Math.PI))
   }
   set area(area){
    this.rad = Math.sqrt(area / Math.PI  ) 
   }
  get diameter(){
    return this.rad * 2
   }
  get circumference(){
    return 2 * this.rad * Math.PI
   }
  get area(){
    return (this.rad**2) * Math.PI 
   }
}

circle = new Circle( 6 )

