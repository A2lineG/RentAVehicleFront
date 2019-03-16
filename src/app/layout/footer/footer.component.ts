import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footerInfo: string;
  footerYear = 2019;

  constructor() { }

  ngOnInit() {
  }

}
