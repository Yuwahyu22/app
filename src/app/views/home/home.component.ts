import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  /*DUMP API BY LOOPING */
  videos = [
    { id: 11, createdAt: 'Sep 1,20121', createdBy: 'Dr Nice', title:'Solange Knowles Will Release Her New Album on Friday', views:1100, img: 'assets/img/home/05/1.jpg', linkPost: '../17_post_01.html', active: 1 },
    { id: 12, createdAt: 'Sep 1,20121', createdBy: 'Narco', title:'Solange Knowles Will Release Her New Album on Friday', views:1050, img: 'assets/img/home/05/1.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 13, createdAt: 'Sep 1,20121', createdBy: 'Bombasto', title:'Solange Knowles Will Release Her New Album on Friday', views:1090, img: 'assets/img/home/05/1.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 14, createdAt: 'Sep 1,20121', createdBy: 'Celeritas', title:'Solange Knowles Will Release Her New Album on Friday', views:1800, img: 'assets/img/home/05/1.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 15, createdAt: 'Sep 1,20121', createdBy: 'Magneta', title:'Solange Knowles Will Release Her New Album on Friday', views:1010, img: 'assets/img/home/05/1.jpg', linkPost: '../17_post_01.html', active: 0  },
  ];

  articles = [
    { id: 11, createdAt: 'Sep 22,2018', createdBy: 'Dr Nice', title:'What You Missed While Not Watching the Debate', views:1100, img: 'assets/img/side/01/1.jpg', linkPost: '../17_post_01.html', active: 0 },
    { id: 12, createdAt: 'Sep 22,2018', createdBy: 'Narco', title:'What You Missed While Not Watching the Debate', views:1050, img: 'assets/img/side/01/1.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 13, createdAt: 'Sep 22,2018', createdBy: 'Bombasto', title:'What You Missed While Not Watching the Debate', views:1090, img: 'assets/img/side/01/1.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 14, createdAt: 'Sep 22,2018', createdBy: 'Celeritas', title:'What You Missed While Not Watching the Debate', views:1800, img: 'assets/img/side/01/1.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 15, createdAt: 'Sep 22,2018', createdBy: 'Magneta', title:'What You Missed While Not Watching the Debate', views:1010, img: 'assets/img/side/01/1.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 16, createdAt: 'Sep 22,2018', createdBy: 'Magneta', title:'What You Missed While Not Watching the Debate', views:1010, img: 'assets/img/side/01/1.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 17, createdAt: 'Sep 22,2018', createdBy: 'Magneta', title:'What You Missed While Not Watching the Debate', views:1010, img: 'assets/img/side/01/1.jpg', linkPost: '../17_post_01.html', active: 0  },
  ]


  peoples = [
    { id: 11, createdAt: 'Sep 22,2020', createdBy: 'Dr Nice', title:'Solange Knowles Will Release Her New Album on Friday', views:1100, img: 'assets/img/home/05/2.jpg', linkPost: '../17_post_01.html', active: 1 },
    { id: 12, createdAt: 'Sep 22,2020', createdBy: 'Narco', title:'Solange Knowles Will Release Her New Album on Friday', views:1050, img: 'assets/img/home/05/2.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 13, createdAt: 'Sep 22,2020', createdBy: 'Bombasto', title:'Solange Knowles Will Release Her New Album on Friday', views:1090, img: 'assets/img/home/05/2.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 14, createdAt: 'Sep 22,2020', createdBy: 'Celeritas', title:'Solange Knowles Will Release Her New Album on Friday', views:1800, img: 'assets/img/home/05/2.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 15, createdAt: 'Sep 22,2020', createdBy: 'Magneta', title:'Solange Knowles Will Release Her New Album on Friday', views:1010, img: 'assets/img/home/05/2.jpg', linkPost: '../17_post_01.html', active: 0  },
  ];

  channels = [
    { id: 11, createdAt: 'Sep 22,2019', createdBy: 'Dr Nice', title:'Google', views:1100, img: 'assets/img/category/08/2.jpg', linkPost: '../17_post_01.html', active: 0 },
    { id: 12, createdAt: 'Sep 22,2019', createdBy: 'Narco', title:'Youtube', views:1050, img: 'assets/img/category/08/2.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 13, createdAt: 'Sep 22,2019', createdBy: 'Bombasto', title:'Gmail', views:1090, img: 'assets/img/category/08/2.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 11, createdAt: 'Sep 22,2019', createdBy: 'Dr Nice', title:'Tiktok', views:1100, img: 'assets/img/category/08/2.jpg', linkPost: '../17_post_01.html', active: 0 },
    { id: 12, createdAt: 'Sep 22,2019', createdBy: 'Narco', title:'Twitter', views:1050, img: 'assets/img/category/08/2.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 13, createdAt: 'Sep 22,2019', createdBy: 'Bombasto', title:'Instagram', views:1090, img: 'assets/img/category/08/2.jpg', linkPost: '../17_post_01.html', active: 0  },
  ]

  documents = [
    { id: 11, createdAt: 'Sep 22,2018', createdBy: 'Dr Nice', title:'Twitter Stock Surges On Disney Takeover Rumor', views:1100, img: 'assets/img/home/01/slider/3.jpg', linkPost: '../17_post_01.html', active: 1 },
    { id: 12, createdAt: 'Sep 22,2018', createdBy: 'Narco', title:'Twitter Stock Surges On Disney Takeover Rumor', views:1050, img: 'assets/img/home/01/slider/3.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 13, createdAt: 'Sep 22,2018', createdBy: 'Bombasto', title:'Twitter Stock Surges On Disney Takeover Rumor', views:1090, img: 'assets/img/home/01/slider/3.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 14, createdAt: 'Sep 22,2018', createdBy: 'Celeritas', title:'Twitter Stock Surges On Disney Takeover Rumor', views:1800, img: 'assets/img/home/01/slider/3.jpg', linkPost: '../17_post_01.html', active: 0  },
    { id: 15, createdAt: 'Sep 22,2018', createdBy: 'Magneta', title:'Twitter Stock Surges On Disney Takeover Rumor', views:1010, img: 'assets/img/home/01/slider/3.jpg', linkPost: '../17_post_01.html', active: 0  },
  ];
  ngOnInit(): void {
  }

}
