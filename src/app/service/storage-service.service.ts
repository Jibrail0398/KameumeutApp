import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) {
    this.makeStorage();
  }

  async makeStorage(){
    const storage = await this.storage.create();
    this._storage = storage
    
  }

  public set(key:string, value:Array<string>){
    try{

      this._storage?.set(key, value);
      console.log("key dan value berhasil dibuat");

    }catch(error){
      console.log("Terjadi Error saat membuat key dan value: "+error);
    }
    
  }

  async get(name: string): Promise<any> { // Ubah untuk mengembalikan Promise
    try {
      const value = await this._storage?.get(name);
      return value; // Kembalikan nilai yang diperoleh
    } catch (error) {
      console.log("Terjadi Error saat mengambil value: " + error);
      return null; // Kembalikan null jika terjadi error
    }
  }

  async keys():Promise<any>{
    try{
      const key = await this._storage?.keys();
      return key;
    }catch{
      console.log("Terjadi Kesalahan")
    }
  }

}
