import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];
  episodes = 0;

  constructor(private animeService: AnimeService) { }

  
  ngOnInit(){
    this.getAnimes();
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedAnime = anime;
  }

  getAnimes(): void{
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  getEpisodes(): number{
    for (let index = 0; index < this.animes.length; index++) {
      const element = this.animes[index];
      this.episodes = this.episodes + element.episode
    }
    return this.episodes
  }
}
