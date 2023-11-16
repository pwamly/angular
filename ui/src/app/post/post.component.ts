import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  //@ts-ignore
  @Input() public gotfromparent:string;

  constructor(){
  }

  ngOnInit(): void {
    
  }

  message:string='Hi there pwamly!';

}
