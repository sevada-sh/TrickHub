import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("تریک هاب | بلاگ");
  }

  public click: boolean = false;
  public liked: number = 0;
  public heart: string = "bi bi-heart";

  firstheartclick() {
    this.heart = "bi bi-heart-fill";
    this.liked++;
    this.click = true;
  }

  secondheartclick() {
    this.heart = "bi bi-heart";
    this.liked--;
    this.click = false;
  }
}

