import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-material-all',
  templateUrl: './material-all.component.html',
  styleUrls: ['./material-all.component.css']
})
export class MaterialAllComponent {

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
    this.api.listAllDesigns()
    .subscribe({
      next: (result: any) => {
        this.designs = result.data;
        console.log(result.data);
      },
  
      error: (error) => {
        console.log(error);
        throw error.message;
      },
    });
  }

}
