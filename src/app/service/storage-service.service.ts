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

  
  //Wajib dipanggil karena untuk inisialisasi
  async makeStorage(){
    const storage = await this.storage.create();
    this._storage = storage
    
  }
  //Menambahkan item
  public set(key:string, value:object){
    try{

      this._storage?.set(key, value);
      console.log("key dan value berhasil dibuat");

    }catch(error){
      console.log("Terjadi Error saat membuat key dan value: "+error);
    }
    
  }

  //Mengambil item
  async get(names: Array<string>){ // Ubah untuk mengembalikan Promise
    try {
      if(names.length === 0){
        return "Pesanan masih kosong"
      }
      const value:string[]= [];
      for (const name of names){
        const storeName = await this._storage?.get(name);
        value.push(storeName);
      }
      return value; // Kembalikan nilai yang diperoleh
    } catch (error) {
      console.log("Terjadi Error saat mengambil value: " + error);
      return null; // Kembalikan null jika terjadi error
    }
  }

  //Mengambil semua key 
  async keys():Promise<any>{
    try{
      const key = await this._storage?.keys();
      return key;
    }catch{
      console.log("Terjadi Kesalahan")
    }
  }

  //Menghapus semua key
  async remove(keys:Array<string>){
    try{
      for(const key of keys){
        const remove = await this._storage?.remove(key);
      }
    }catch(error){
      console.log("Terjadi error: ", error)
    }
  } 

}
