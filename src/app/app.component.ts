import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading!: boolean;
  title = 'CV-manager';

  constructor(private loaderService: LoaderService) {
  }
  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
