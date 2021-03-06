import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {
  public config: any;

  constructor() { }

  reset(){
    this.config = {
      slidesPerView: 1,
      spaceBetween: 10,
      paginationClickable: true,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      }
    };
  }

  ngOnInit() {
    this.reset();
  }

}
