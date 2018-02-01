import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

  activeTabindex: number;

  constructor(private route: ActivatedRoute) {
    console.log('tabIndex value: ' + this.route.params['index']);
    this.activeTabindex = this.route.params['index'];
  }

  ngOnInit() {
    console.log('tabIndex value: ' + this.route.params['index']);
    this.route.params
      .switchMap((params: Params) => this.activeTabindex = params['index']);
  }

}
