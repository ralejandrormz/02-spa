import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: []
})
export class BuscarComponent implements OnInit {
  heroes:any[] = [];
  constructor(private _heroesService:HeroesService, 
              private activatedRoute:ActivatedRoute,
              private router:Router ) { }
  
  ngOnInit() {

    let name:string;
    this.activatedRoute.params.subscribe(params=>{
      this.heroes = this._heroesService.buscarHeroes(params["name"]);
      
    });
  }

}
