import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ec-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path: string = '';
  config: string = '';

  constructor(activatedRoute: ActivatedRoute) {
    this.path = activatedRoute.snapshot.url[0].path
    console.log(this.path)
    this.config = activatedRoute.snapshot.url[1].path;
    console.log(this.config);
  }

  ngOnInit() {
  }

  

}
