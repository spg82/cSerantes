import { Component, OnInit } from '@angular/core';
import { MailService, IMessage } from '../../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

	message: IMessage = {};
	modal_status: string = '';
	modal_title: string = '';
	modal_message: string = '';
	form_data ={
		name: '',
		email: '',
		comments: '',
	};

	constructor(private mailService: MailService) { }

	ngOnInit() {
	}

	close_dialog(){
		if (this.modal_status == 'OK'){
			this.form_data ={
				name: '',
				email: '',
				comments: '',
			};
		}
  		this.modal_title = '';
  		this.modal_message = '';

  	}

	send(form: IMessage){
  		console.log(form);
  		//if (form.$valid){
	  		window.scrollTo(0, 0);
	  		this.mailService.sendEmail(form).subscribe(res => {
		      console.log('Message send!', res);
		      if (res.status == 200){
		      	/* Show popup with OK message */
		      	this.modal_status = 'OK';
		      	this.modal_title = "Mensaje enviado";
		      	this.modal_message = "Su mensaje ha sido enviada con éxito. Nos pondremos en contacto con usted por correo electrónico tan pronto como nos sea posible.";
		      	//this.showPopup(title, message);	      		      	
		      }
		    }, error => {
		      //console.log('Reservation Error', error);
		      /* Show error popup */
		      this.modal_status = 'ERROR';
		      this.modal_title = "Ha ocurrido un error";
		      this.modal_message = "No ha sido posible enviar el mensaje. Por favor, inténtelo más tarde.";
		      //this.showPopup(title, message);    
		    });

  	}

}
