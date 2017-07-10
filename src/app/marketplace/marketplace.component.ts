import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent{
constructor(private router: Router){}

  albums: Album[] = [
    new Album("Ylistis", "Cosmic Church", "2012 album by Finnish black metal band", 1),
    new Album("Balance", "Swollen Members", "1998 hip hop album by Vancouver BC duo", 2),
    new Album("Surfer Rosa", "The Pixies", "1992 record by american band", 3)
  ];

  goToDetailPage(clickedAlbum: Album) {
    this.router.navigate(['albums', clickedAlbum.id]);
  };
}
