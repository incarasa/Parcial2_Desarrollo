import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  anime: Array<Anime> = [];

  selected: Boolean = false;
  selectedAnime!: Anime;
  episodios : number = 0;

  constructor(private animeService: AnimeService) { }

  getAnime(): void {
    this.animeService.getAnime().subscribe((anime) => {
      this.anime = anime;
      anime.forEach((a) => {
        this.episodios += a.episode
      })
    });
  }

  getPromedio(): void {
    this.animeService.getAnime().subscribe((anime) => {
      
    });
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedAnime = anime;}

  ngOnInit() {
    this.getAnime();
  }

}
