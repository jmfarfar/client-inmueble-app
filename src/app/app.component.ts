import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NotificationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client-inmueble-app';
  showSpinner = false;

  constructor(private fs:AngularFirestore, private notification: NotificationService){

  }

  OnToggleSpinner() : void {
    this.showSpinner = !this.showSpinner;
  }

  ngOnInit(): void {

    this.fs.collection('test').stateChanges().subscribe(personas => {
      console.log(personas.map(x => x.payload.doc.data()))
    });

  }

  onFilesChanged(urls: string | string[]): void{
    console.log('urls', urls);
  }

  onSuccess(): void{
    this.notification.success("El procedimineto fue exitoso");
  }

  onError(): void{
    this.notification.error("Se encontraron errores en el proceso");
  }

}
