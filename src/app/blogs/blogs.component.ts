import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class blogsComponent {
  constructor(private title: Title) {

  }

  ngOnInit(): void {
    this.title.setTitle("تریک هاب | بلاگ ها");
  }
}
