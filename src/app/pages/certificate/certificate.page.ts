import { Component, OnInit } from '@angular/core';
import { SharingService } from 'src/app/service/sharing.service';
import { StorageServiceService } from 'src/app/service/storage-service.service';
import html2canvas from 'html2canvas';
import { ViewChild,ElementRef } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.page.html',
  styleUrls: ['./certificate.page.scss'],
})
export class CertificatePage implements OnInit {

  constructor(
    private sharing:SharingService,
    private storage:StorageServiceService
  ) { }

  async ngOnInit() {
    await this.storage.makeStorage();
    this.storage.set('myuserInfo',["Ahmad"]);
    this.storage.set('myuserInfo',["Feri"]);

    const item = await this.storage.get("myuserInfo");
    const keys = await this.storage.keys();
    console.log(item);
    console.log(keys);
  }

  


  isAnyPhoto = true;

  Birth = "2024-06-30T08:45:07.541Z";
  Aqiqah = "2024-08-11T08:45:07.541Z";

  name = "Nadil Syakir";
  child = "kedua";
  father = "Wahyu Albi Prasetia";
  mother = "Siti Ropi'ah";

  birthday = this.sharing.formatTanggalIndonesia(this.Birth);
  dayAqiqah = this.sharing.getDate(this.Aqiqah);
  dateAqiqah = this.sharing.formatTanggalIndonesia(this.Aqiqah);

  @ViewChild('certificate')certificate!:ElementRef;
  async generatePNG() {
    
    setTimeout(() => {
      const data: any = this.certificate.nativeElement;
      if (data) {
        const options = {
          scale: 10, // sesuaikan dengan skala yang diperlukan
          
        };
        html2canvas(data, options).then(async (canvas) => {
          const contentDataURL = canvas.toDataURL('image/png');
          const fileName = `Sertifikat Rizky Aqiqah ${this.name}.png`;
          const filePath = `Kameumeut Farm/Sertifikat/${fileName}`;
          
          await Filesystem.writeFile({
            path: filePath,
            data: contentDataURL,
            directory: Directory.Documents,
            recursive: true // Membuat direktori jika belum ada
          });
        }).catch(error => {
          console.error('Error generating canvas:', error);
        });
      } else {
        console.error('Element not found: certificate');
      }
    }, 1000); 

    //code lingkungan pengembangan

    //     html2canvas(data, options).then((canvas) => {
    //       const contentDataURL = canvas.toDataURL('image/png');
    //       const link = document.createElement('a');
    //       link.href = contentDataURL;
    //       link.download = `Sertifikat Rizky Aqiqah ${this.name}.png`;
    //       link.click();
    //     }).catch(error => {
    //       console.error('Error generating canvas:', error);
    //     });
    //   } else {
    //     console.error('Element not found: certificate');
    //   }
    // }, 1000); 
  }
}
