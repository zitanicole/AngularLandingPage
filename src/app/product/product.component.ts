import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() stuff = 
  {
    id: 0,
    name: "placeholder",
    description: "placeholder",
    imageurl: "https://images.ctfassets.net/cnu0m8re1exe/60KbU1w7lmUCJeXZpdcW1x/ea455b58988d75412f56d4068ba208fc/shutterstock_347288675.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
