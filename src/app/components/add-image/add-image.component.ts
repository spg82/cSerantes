import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styles: []
})
export class AddImageComponent implements OnInit {

	category:any = {};
	files: any;
	categories = [
		{'title':'Cierres','value':'closures'},
		{'title':'Cubiertas','value':'covering'},
		{'title':'Acabados','value':'finishes'},
		{'title':'Viviendas unifamiliares','value':'livings'},
		{'title':'Piscinas','value':'pools'},
		{'title':'Estructuras','value':'structures'},
		{'title':'Cubiertas de madera','value':'wood-covers'},
		{'title':'Instalaciones','value':'installations'},
		{'title':'Fachadas','value':'frontages'}
	]

  constructor(private image:ImagesService,
              private upload:ImageService) { }

  onChange(event) {
    var files = event.srcElement.files;
    this.files = files;
    console.log(files);
  }

  uploadImage(){
  	var url = "./assets/img/gallery/" + this.category.value + "/" + this.files[0].name;
  	var node = {
  		"id":200,
  		"category":this.category.value,
  		"filename":this.files[0].name,
  		"url": url
  	}
  	this.image.addImage(node);

    this.upload.uploadFile(node).subscribe(res => {
          console.log('Reservation Success', res);
          if (res.status == 200){
            console.log("SUCCESS");                 
          }
        }, error => {
           console.log("ERROR"); 
        });
  }

  ngOnInit() {
  }

}
