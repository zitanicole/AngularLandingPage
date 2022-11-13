import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  products: any[] = 
[ 
  { id: 1, name: "Element 1", description: "First element in the array", imageurl: "https://images.ctfassets.net/cnu0m8re1exe/60KbU1w7lmUCJeXZpdcW1x/ea455b58988d75412f56d4068ba208fc/shutterstock_347288675.jpg" },
  { id: 2, name: "Element 2", description: "Second element in the array", imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3MG6RRWJC3ow0YKb0ckup4neua6wmFsSPlQ&usqp=CAU" },
  { id: 3, name: "Element 3", description: "Third element in the array", imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HH10NoSb-21zQ5Nqrm6eMOIAj9cbARP0PA&usqp=CAU" },
  { id: 4, name: "Element 4", description: "Fourth element in the array", imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNv69pyZkSbgilAseo-bTqRPr5eHwrD_V6hg&usqp=CAU" },
  { id: 5, name: "Element 5", description: "Fifth element in the array", imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Fo6Yo8x6zYDd7u0AL2OI6huYWR0PtPageQ&usqp=CAU" }
];

id: any = 0;

//extra credit
data: any = 
{
  id: 1, name: "Element 1", 
  description: "First element in the array", 
  imageurl: "https://images.ctfassets.net/cnu0m8re1exe/60KbU1w7lmUCJeXZpdcW1x/ea455b58988d75412f56d4068ba208fc/shutterstock_347288675.jpg"
}

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("the route param is:", this.id);

    this.data = this.products.filter(item => item.id == this.id)[0];
  }

}
