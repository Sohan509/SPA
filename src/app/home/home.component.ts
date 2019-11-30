import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public multi = [
    {
      name: 'UI/UX Design',
      series: [
        {
          name: 'Minimum',
          value: 800
        },
        {
          name: 'maximum',
          value: 5000
        },
        {
          name: 'extra',
          value: 0
        }
      ]
    },
    {
      name: 'Web Design',
      series: [
        {
          name: 'Minimum',
          value: 1000
        },
        {
          name: 'maximum',
          value: 6000
        }
      ]
    },
    {
      name: 'Front-end Development',
      series: [
        {
          name: 'Minimum',
          value: 2000
        },
        {
          name: 'maximum',
          value: 10000
        }
      ]
    },
    {
      name: 'Back-end API',
      series: [
        {
          name: 'Minimum',
          value: 5000
        },
        {
          name: 'maximum',
          value: 10000
        }
      ]
    }
  ];

  view: any[] = [550, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Solutions';
  showYAxisLabel = true;
  yAxisLabel = 'Price($)';
  timeline = true;

  colorScheme = {
    domain: ['#95C0FF', '#07B681', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  ngOnInit() {
  }
  onSelect($event) {
    console.log($event);
  }
  slickInit(e) {
    console.log('slick initialized');
  }

}
