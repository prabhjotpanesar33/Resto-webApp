import { trigger } from '@angular/animations';
import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Service1Service } from 'src/app/services/service1.service'
import { category } from 'src/app/models/item'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dotPe';
  closeResult = '';
  items: category[];


  constructor(private modalService: NgbModal,
    private db: Service1Service) {}

  ngOnInit(): void {

    this.db.getItem().subscribe(items => {
      console.log(items);
      this.items = items;

   })
    }


    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }


  }
}
