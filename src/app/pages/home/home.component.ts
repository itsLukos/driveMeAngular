import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '@coreui/angular';
import { IconComponent } from '@coreui/icons-angular'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Lujo',
      subtitle: 'Disponible en nuestra web'
    };
    this.slides[1] = {
      id: 1,
      src: 'https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Comfort',
      subtitle: 'Disponible en nuestra web'
    }
    this.slides[2] = {
      id: 2,
      src: 'https://images.pexels.com/photos/754595/pexels-photo-754595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Aventura',
      subtitle: 'Disponible en nuestra web'
    }
  }
}