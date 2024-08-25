import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';



import { AlertController } from '@ionic/angular';

@Component({
  standalone:true,
  imports:[IonicModule,CommonModule,FormsModule],
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.scss'],
})
export class ModalInputComponent  implements OnInit {

  //code untuk menampilkan modal

  

  @Input() triggermodal:string="";
  
  presentingElement:any;
  constructor(    
    private alert:AlertController
  ) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-modal');
  }

  
  

  async presentAlert(msg:string,header:string) {
    const alert = await this.alert.create({
      header: header,
      message: msg,
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
    const { role } = await alert.onWillDismiss();
    return role === 'confirm';
  }

  //canDismiss dipanggil ketika ion.dismiss(parameter) di html dijalankan
  canDismiss = async (data: any) => {
      
      //kondisi jika nilai parameter adalah 'saveData'
    if (data === 'saveData') {
      //Menyimpan nilai kembalian dari alert
      const confirmed =  await this.presentAlert("Apakah anda yakin ingin menyimpan data?","Konfirmasi Menyimpan Data");
      if(confirmed===true){

        //Menjalankan triggerData()
        this.triggerSaveData();
      }
      return confirmed;
    }else{
      const confirmed =  await this.presentAlert("Apakah anda yakin ingin menutup form input?","Konfirmasi Batal");
      return confirmed
    }
    
  };
  

  isAnyPhoto:boolean=false;
  transferPhotoStatus(event:any){
    this.isAnyPhoto = event.detail.checked;
  }

  Name:string="";
  @Output()name = new EventEmitter<string>();
  transferName(){
    this.name.emit(this.Name);
  }

  Gender:string="";
  @Output()gender = new EventEmitter<string>();
  transferGender(event:any){
    this.Gender = event.detail.value;
    this.gender.emit(this.Gender);
  }

  Urutan:string = "";
  @Output()urutan = new EventEmitter<string>();
  transferUrutan(event:any){
    this.Urutan = event.detail.value;
    this.urutan.emit(this.Urutan);
  }

  birth: string="";
  @Output() birthChange = new EventEmitter<string>();
  transferBirth() {
    this.birthChange.emit(this.birth);
  }

  Aqiqah:string="";
  @Output()aqiqah = new EventEmitter<string>();
  transferAqiqah(){
    this.aqiqah.emit(this.Aqiqah)
  }

  Father:string = "";
  @Output()father = new EventEmitter<string>();
  transferFather(){
    this.father.emit(this.Father)
  }

  Mother:string = "";
  @Output()mother = new EventEmitter<string>();
  transferMother(){
    this.mother.emit(this.Mother)
  }
  // variabel Menyimpan Hasil Input

  //Jalankan Fungsi saveData
  @Output() saveDataEvent = new EventEmitter<void>();
  async triggerSaveData() {
    
    await this.saveDataEvent.emit();
   
  }


}
