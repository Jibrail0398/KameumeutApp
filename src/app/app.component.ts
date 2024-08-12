import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Filesystem, Directory } from '@capacitor/filesystem';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform:Platform) {
    //Membuat Direktori ketika aplikasi diinstall
    this.initializeApp();

    
  }

  //Fungsi untuk menjalankan logika inisialisasi aplikasi ketika platform Ionic sudah siap. 

  initializeApp(){
    this.platform.ready().then(()=>{
      this.createDirectory(["Label Potong","Label","Sertifikat"]);
    })
  }

  async createDirectory(nameDirectory: Array<string>) {
    await Filesystem.mkdir({
      path: "Kameumeut Farm/",
      directory: Directory.Documents,
      recursive: false
    });
    for (const dir of nameDirectory) {
      try {
        await Filesystem.mkdir({
          path: "Kameumeut Farm/"+dir,
          directory: Directory.Documents,
          recursive: false
        });
        console.log(`Direktori ${dir} berhasil dibuat`);
      } catch (error) {
        console.log("Direktori Gagal dibuat")
      }finally{
        console.log("Direktori Berhasil dibuat")
      }
    }
  }
  


}
