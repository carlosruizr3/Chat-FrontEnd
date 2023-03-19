import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
  ) {
    interface LoginData {
      correo: string,
      pass: string
    }
    
    
    interface Message {
      from?: number;
      message: string;
      fecha: string;
    }
    
    
    interface RegisterData {
      user_id?: string,
      nombre?: string,
      apellido_p?: string,
      apellido_m?: string,
      pass?: string,
      correo?: string,
      foto?: string
    }
    
    interface getId {
      user_id: string
    }
  }
}
