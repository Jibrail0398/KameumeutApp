import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor() { }

  formatTanggalIndonesia(date:string){
    const convertdate = new Date(date);
    const options:Intl.DateTimeFormatOptions={
      day:"2-digit",
      month:"long",
      year:"numeric"
    }
    return convertdate.toLocaleDateString('id-ID',options);
  }
  getDate(date:string){
    const convertdate = new Date(date);
    const options:Intl.DateTimeFormatOptions={
      weekday:"long"
    }
    return convertdate.toLocaleDateString('id-ID',options);
  }
  biodata:any;
  setBiodata(data:object){
    this.biodata = data
  }
  getBiodata(){
    return this.biodata;
  }
}
