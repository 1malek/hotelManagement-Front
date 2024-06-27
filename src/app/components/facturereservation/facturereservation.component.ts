import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReservationserviceService } from 'src/app/services/reservationservice.service';

@Component({
  selector: 'app-facturereservation',
  templateUrl: './facturereservation.component.html',
  styleUrls: ['./facturereservation.component.css']
})
export class FacturereservationComponent implements OnInit {
  id = this.route.snapshot.params['id'] ;
  reservation:any ;
  constructor(private route:ActivatedRoute , private reservservice:ReservationserviceService) { }

  ngOnInit(): void {
    this.getbydid() ;
  }

  getbydid(){
    this.reservservice.getreserbyid(this.id).subscribe((data)=>{
   this.reservation =data  ;
    })
  }


  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
