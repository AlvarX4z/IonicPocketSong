import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  message: string = "Looking for a song's lyrics?"

  constructor() { }

  ngOnInit() {
  }

  showLyrics() {
    console.log("TESTING");
  }

}
