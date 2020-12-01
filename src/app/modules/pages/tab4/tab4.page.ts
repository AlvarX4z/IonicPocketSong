import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SongAPIService } from '../../../services/song-api.service';
import { Song } from 'src/app/classes/song';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  /*
   ************************************
   ************** FIELDS **************
   ************************************
   */

  baseUrl: string = "https://orion.apiseeds.com/api/music/lyric/";
  songName: string = '';
  songArtist: string = ''; 
  clientUrl: string = "?apikey=CXS5RvuDuOIy93tsBpSkthRS9CcxjeE5GDYNuCOz0pOAc9v70ImcUjg5EG5d1vHX"
  finalUrl: string;

  resultFromApi: Song;

  message: string = "Looking for a song's lyrics?"

  /*
   *****************************************
   ************** CONSTRUCTOR **************
   *****************************************
   */

  constructor(public api: SongAPIService, public alertController: AlertController) { }

  /*
   *************************************************
   ************** FUNCTIONS / METHODS **************
   *************************************************
   */

  ngOnInit() { }

  showLyrics() { 

    this.finalUrl = this.baseUrl + this.songArtist + "/" + this.songName + this.clientUrl;
    this.getLyrics(this.finalUrl);

  }

  setSongName(name: string) { this.songName = name; }

  setArtistName(artist: string) { this.songArtist = artist; }

  async getLyrics(finalUrl: string) {

    await this.api.getData(finalUrl)
      .subscribe((res: Song) => {

        this.resultFromApi = res;
        this.presentAlert(this.resultFromApi);

      }, err => { console.log(err); }
    );

  }

  async presentAlert(resultFromApi: Song) {

    const alert = await this.alertController.create({
      header: this.songArtist + " - " + this.songName,
      message: this.resultFromApi.result.track.text,
      buttons: ['Back'],
      cssClass: "custom-alert"
    });

    await alert.present();

  }

}
