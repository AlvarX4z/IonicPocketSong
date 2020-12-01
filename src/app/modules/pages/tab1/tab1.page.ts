import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  logoPath: string = "/assets/img/music.png";
  appName: string = "PocketSong";
  homeText: string = "<p>Listen to your local music files</p><p>Search lyrics and info about them</p><p>Whenever and wherever you want to!</p>";
  footerText: string = "Training App by Alvaro de Francisco Sanchez";

  constructor() {}

}
