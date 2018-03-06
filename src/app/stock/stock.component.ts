import { Component, OnInit } from '@angular/core';
import { QandsService } from '../services/index';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  model: Object = {};
  Qandsarrys: any;

  constructor(
    private qandsservice: QandsService
  ) {
    this.ongetQandS();
  }

  ngOnInit() {
  }


  ongetQandS() {
    console.log(this.model);
    var qands = this.model;
    this.qandsservice.getQands(qands).subscribe(
      value => {
        console.log("NN:" + JSON.stringify(value));
        this.Qandsarrys = value.quands;
      }
    );

  }

  onSubmitQuandS() {
    console.log(this.model);
    var qands = this.model;
    this.qandsservice.insertQands(qands).subscribe(
      value => {
        console.log("NN:" + JSON.stringify(value));
        
      }
    );
    this.ongetQandS();
  }
  
  onupdateQandS(){
    
  }

  ondeleteQandS(question:any){
    console.log(question);
    var qands =question;
    this.qandsservice.deleteQands(qands).subscribe(
      value => {
        console.log("NN:" + JSON.stringify(value));
       
      }
    );
    this.ongetQandS();
  }

  

}
