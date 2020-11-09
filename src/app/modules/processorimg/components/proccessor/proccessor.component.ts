import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-proccessor',
  templateUrl: './proccessor.component.html',
  styleUrls: ['./proccessor.component.css']
})
export class ProccessorComponent implements OnInit {
  image: any;

  constructor(public store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select('login').subscribe(login => {
      if(login.authorized === false){
           this.router.navigate(['login']);
      }
   }); 
  }

  onUploadFinish(event) {
    console.log(event);
    this.image = event;
    let i = new Image();   
    let self = this;
    i.onload = function(){
         console.log(i.width);
         console.log(i.height);   
         self.pdf(i.width, i.height)
    };
    i.src = event.src;
  } 
  pdf(width, height){
      console.log(this.image);
      let horientacion = 'vertical';           
      if(width > 796){
        console.log("hola h");
        horientacion = 'horizontal';        
      }
      let pdf;
      if(horientacion === 'vertical'){
        console.log("hola p");
        pdf = new jsPDF('p','mm','A4');        
      }else{
        console.log("hola l");
        pdf = new jsPDF('l','mm','A4');
      }  
      pdf.addImage( this.image.src, this.image.file.type, 0, 0);/*imagen: es la captura que insertaremos en el pdf, 18: margen izquierdo, 10: margen superior, 260:ancho, 189:alto, pueden jugar con estos valores, de esta forma me quedó prolijo en A4 horizontal*/
      pdf.save('documento.pdf');
  }
}
