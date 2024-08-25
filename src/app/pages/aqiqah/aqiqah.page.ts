import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageServiceService } from 'src/app/service/storage-service.service';
import { SharingService } from 'src/app/service/sharing.service';




@Component({
  selector: 'app-aqiqah',
  templateUrl: './aqiqah.page.html',
  styleUrls: ['./aqiqah.page.scss'],
  
})


export class AqiqahPage implements OnInit {

  
  constructor(
    private storage:StorageServiceService,
    private router:Router,
    private sharing:SharingService
  ) { }


  async ngOnInit() {
    await this.storage.makeStorage(); 
    this.loadData();
    
  }
  
  

  //mengambil data diri customer dari storage
  
  mycustomer:any;
  
  biodata = {
    id:"",
    name:"",
    gender:"",
    child:"",
    birth:"",
    Aqiqah:"",
    father:"",
    mother:"",

  }
  

  //Menerima hasil inputan dari komponen
  name="";
  receiveName(name:any){
    this.biodata.name = name;
  }

  gender = "";
  receiveGender(gender:any){
    this.biodata.gender = gender;
  }

  child:string="";
  receiveUrutan(urutan:string){
    this.biodata.child = urutan;
  }

  birth: string="";
  receiveBirth(birth: string) {
    this.biodata.birth = birth;
    console.log('Received birth:', this.birth); // untuk debugging
  }

  Aqiqah:string="";
  receiveAqiqah(aqiqah:string){
    this.biodata.Aqiqah = aqiqah;
  }

  father = "";
  receiveFather(father:string){
    this.biodata.father = father;
  }

  mother = "";
  receiveMother(mother:string){
    this.biodata.mother = mother;
  }
  // Menerima hasil inputan dari komponen

  generateRandomId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  handleRefresh(event:any) {
    setTimeout(async () => {
      // Any calls to load data go here
      event.target.complete();
      location.reload();
    }, 1000);
  }


  async saveData(){
    const randomId: string = this.generateRandomId(10);
    this.biodata.id = randomId;
    await this.storage.set(randomId,this.biodata);
    this.loadData();
  }

  async loadData(){
    const keys = await this.storage.keys();
    const customer = await this.storage.get(keys);
    if(customer && Array.isArray(customer)){
      this.mycustomer = customer;
    } 
  }

  toLabel(id:string){
    const getItem = this.mycustomer.find((find:any)=> find.id === id);
    this.router.navigate(['/pages/label'])
    this.sharing.setBiodata(getItem);
  }
  toCertificate(id:string){
    const getItem = this.mycustomer.find((find:any)=> find.id === id);
    this.router.navigate(['/pages/certificate'])
    this.sharing.setBiodata(getItem);
  }
  toLabelPotong(id:string){
    const getItem = this.mycustomer.find((find:any)=> find.id === id);
    this.router.navigate(['/pages/label-potong'])
    this.sharing.setBiodata(getItem);
  }

}
