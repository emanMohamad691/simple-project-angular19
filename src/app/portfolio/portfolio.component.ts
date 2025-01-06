import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
images:string[] = ['images/poert1.png','images/port2.png','images/port3.png',
  'images/poert1.png','images/port2.png','images/port3.png'
]

imagesrc:string = ''
isDisplay:boolean = false;

displayFullOverlay(e:MouseEvent):void{
  
let id:string = (e.target as HTMLElement).id  
  
if(id === "portfolioContentOverlay" || id === 'plusIcon'){
  this.isDisplay = true;

}
else if(id === "overlayFullPage"){
  this.isDisplay = false;
}  


}

displayImage(image:string){
this.imagesrc = image;
}
}
