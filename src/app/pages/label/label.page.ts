import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/service/sharing.service';
import html2canvas from 'html2canvas';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ElementRef, ViewChild } from '@angular/core';




@Component({
  selector: 'app-label',
  templateUrl: './label.page.html',
  styleUrls: ['./label.page.scss'],
})
export class LabelPage implements OnInit {

  constructor(
    private sharing:SharingService,
    
   
  ) { }

  ngOnInit() {
    Filesystem.checkPermissions()
    .then((PermissionStatus)=>{
      console.log("Permission Status: ", PermissionStatus)
    })
    .catch((error)=>{
      console.error("Error checking permissions: ",error)
    })
    console.log(this.biodata);
  }

  biodata = this.sharing.getBiodata();

  isAnyPhoto = false;

  Birth = this.biodata.birth;

  gender = this.biodata.gender;
  name = this.biodata.name;
  child = this.biodata.child;
  father = this.biodata.father;
  mother = this.biodata.mother;

  birthday = this.sharing.formatTanggalIndonesia(this.Birth);


  @ViewChild('label')label!: ElementRef;

  
  //Langkah kedua agar download sertifikat dan label masuk ke galeri
  async generatePNG() {
    try {
      const data: any = this.label.nativeElement;
      
      if (!data) {
        throw new Error('Element not found: label');
      }
  
      const options = {
        scale: 10,

      };
  
      const canvas = await html2canvas(data, options);
      const contentDataURL = canvas.toDataURL('image/png');

      const fileName = `Label Rizky Aqiqah ${this.name}.png`;
      const filePath = `Kameumeut Farm/Label/${fileName}`;
  
      await Filesystem.writeFile({
        path: filePath,
        data: contentDataURL,
        directory: Directory.Documents,
        recursive: true // Membuat direktori jika belum ada
      });
      
      console.log("File berhasil disimpan:", filePath);
      
    } catch (error) {
      console.error("Error saat generate PNG:", error);
    }
  }

  
  
  //code di lingkungan pengembangan
  async generatePNGDev() {
    setTimeout(() => {
      const data: any = document.getElementById('label');
      if (data) {
        const options = {
          scale: 5, // sesuaikan dengan skala yang diperlukan
          
        };
  
        html2canvas(data, options).then((canvas) => {
          const contentDataURL = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = contentDataURL;
          link.download = `Label Rizky Aqiqah ${this.name}.png`;
          link.click();
        }).catch(error => {
          console.error('Error generating canvas:', error);
        });
      } else {
        console.error('Element not found: label');
      }
    }, 1000); 
  }

  
}
