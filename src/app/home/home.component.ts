import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private elementRef: ElementRef,
              private router: Router) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#1D1B1B";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('/assets/images/background.png')";
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "100%";
    this.elementRef.nativeElement.ownerDocument.body.style.margin = "0";
  }

  goToMaterial() {
    this.router.navigate(['material']);
  }

}
