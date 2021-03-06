import { Component, OnInit, Input } from '@angular/core';
declare var Swiper: any;

@Component({
  selector: 'videos-carousel',
  templateUrl: './videos-carousel.component.html',
  styleUrls: ['./videos-carousel.component.scss']
})
export class VideosCarouselComponent implements OnInit {
  @Input() public data: any;
  @Input() public index: any;

  public config: any;

  constructor() { }

  ngOnInit() {
    this.config = {
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      pagination: {
        el: '.swiper-pagination',
      },
      paginationClickable: true,
      navigation: {
      nextEl: `#next${this.index}`,
      prevEl: `#prev${this.index}`,
      },
    };
  }

}
