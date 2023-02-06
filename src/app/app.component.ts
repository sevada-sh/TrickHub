import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private title: Title, private metaTagService: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("تریک هاب | صفحه اصلی");

    // this.metaTagService.addTags([
    //   { name: 'keywords', content: '' },
    // ]);
  }
}
