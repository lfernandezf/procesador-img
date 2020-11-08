import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { jsPDF } from 'jspdf';
import { FileUploadModel } from 'src/app/models/fileUploadedModel';

@Component({
  selector: 'app-proccessor',
  templateUrl: './proccessor.component.html',
  styleUrls: ['./proccessor.component.css']
})
export class ProccessorComponent implements OnInit {
  image: any;
  files: Array<FileUploadModel> = [];

  @ViewChild("imgInput") imgInput;

  constructor(public store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
  //   this.store.select('login').subscribe(login => {
  //     if(login.authorized === false){
  //          this.router.navigate(['login']);
  //     }
  //  }); 
  }

  onUploadFinish(event) {
    console.log(event);
    this.image = event;
  }
  pdf(){
    if(this.image){
      var i = new Image()
      i.onload = function(){
         console.log(i.width);
         console.log(i.height);
      };
      i.src = this.image.src
      // let pdf = new jsPDF('l','mm','A4');/* creamos el pdf con jspdf, l es de landscape, mm: medidas en milímetros, y A4 el formato*/
      // pdf.addImage( this.image.src, 0, 0, 260,189); /*imagen: es la captura que insertaremos en el pdf, 18: margen izquierdo, 10: margen superior, 260:ancho, 189:alto, pueden jugar con estos valores, de esta forma me quedó prolijo en A4 horizontal*/
      // pdf.save( 'documento.pdf' ); /* descargamos el pdf con ese nombre.*/
    }
  }
   
  // addFile(){
  //   var _URL = window.URL || window.webkitURL;
  //   let fi = this.imgInput.nativeElement;
  //   console.log(fi.src);
  //   for (let index = 0; index < fi.files.length; index++) {
  //     const file = fi.files[index];
  //     const paramsImg = fi.getBoundingClientRect();
  //     let src;

  //     let img = new Image();
  //     var objectUrl = _URL.createObjectURL(file);
  //     img.onload = function () {
  //         console.log(this);
  //         _URL.revokeObjectURL(objectUrl);
  //     };
  //     img.src = objectUrl;

  //     console.log(img.width);
  //     console.log(img.height);

  //     this.files.push({
  //       data: file,
  //       src: img,
  //       ancho: paramsImg.width,
  //       largo: paramsImg.height,
  //     });
  //   }
  //   console.log(this.files)
  // }

  // pdf(){
  //   this.files.forEach(function(file){
  //     let pdf = new jsPDF('l','mm','A4');/* creamos el pdf con jspdf, l es de landscape, mm: medidas en milímetros, y A4 el formato*/
  //     pdf.addImage( file.src, 0, 0, 260,189); /*imagen: es la captura que insertaremos en el pdf, 18: margen izquierdo, 10: margen superior, 260:ancho, 189:alto, pueden jugar con estos valores, de esta forma me quedó prolijo en A4 horizontal*/
  //     pdf.save( 'documento.pdf' ); /* descargamos el pdf con ese nombre.*/
  //   });
     
  // }

}
