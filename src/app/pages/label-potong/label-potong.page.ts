import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ViewChild, ElementRef } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { SharingService } from 'src/app/service/sharing.service';

@Component({
  selector: 'app-label-potong',
  templateUrl: './label-potong.page.html',
  styleUrls: ['./label-potong.page.scss'],
})
export class LabelPotongPage implements OnInit {

  constructor(private sharing:SharingService) { }

  ngOnInit() {
  }
  
  biodata = this.sharing.getBiodata();
  name = this.biodata.name;
  gender = this.biodata.gender;
  father = this.biodata.father;

  @ViewChild('labelpotong') labelPotong!: ElementRef;

  async generatePDF() {
    try {
      // Tahap screenshot
      const data: any = this.labelPotong.nativeElement;
      const canvas = await html2canvas(data, { scale: 2 });
      const contentDataURL = canvas.toDataURL('image/png');
  
      // Tahap convert PDF
      const pdf = new jsPDF('l', 'pt', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 842, 595);
  
      // Convert PDF ke Blob
      const pdfOutput = pdf.output('blob');
  
      // Convert Blob ke Base64
      const base64data = await this.blobToBase64(pdfOutput);
  
      // Tahap menyimpan ke sistem
      const fileName = `Label Potong ${this.name}.pdf`;
      const filePath = `Kameumeut Farm/Label Potong/${fileName}`;
  
      await Filesystem.writeFile({
        path: filePath,
        data: base64data,
        directory: Directory.Documents,
      });
  
      console.log("File Berhasil Tersimpan");
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  }
  
  // Helper function untuk mengonversi Blob ke Base64
  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
