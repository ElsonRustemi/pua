import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  pageTitle = 'default page title';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe(
      (data: Data) => {
        this.pageTitle = data['title'];
      }
    );

  }

}
