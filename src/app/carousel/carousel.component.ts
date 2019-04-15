import { Component} from '@angular/core';
import { LazyLoadScriptService } from '../lazy-load-script.service';

declare var $;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  constructor(private lazyLoadService: LazyLoadScriptService) { }

  ngAfterContentInit() {
    this.lazyLoadService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js')
      .subscribe(_ => {
        $('.slick-container').slick({
          dots: false,
          infinite: true,
          speed: 300,
          nextArrow:"<div class='next-slide'><i class='fa fa-arrow-circle-right'></i></div>",
          prevArrow:"<div class='prev-slide'><i class='fa fa-arrow-circle-left'></i></div>",
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
            { 
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1, 
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
              },
            },
            {
              breakpoint: 576,
              settings: {
                prevArrow: false,
                nextArrow: false,
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              },
            }
          ]
        });

      });
  }
}