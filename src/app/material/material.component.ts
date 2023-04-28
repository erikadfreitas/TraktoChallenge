import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  designs: [] = [];

  constructor(private elementRef: ElementRef,
              private router: Router,
              private api: ApiService) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#EFF2F9";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "none";
    this.elementRef.nativeElement.ownerDocument.body.style.margin = "0";
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.api.list10Designs()
    .subscribe({
      next: (result: any) => {
        this.designs = result.data;
      },
  
      error: (error) => {
        console.log(error);
        throw error.message;
      },
    });
  }

  scrollToTheLeft() {
    document.getElementsByClassName("box-design")[0].scrollLeft -= 500;
  }

  scrollToTheRight() {
    document.getElementsByClassName("box-design")[0].scrollLeft += 500;
  }

  goToFullList() {
    this.router.navigate(['material-all']);
  }

}
