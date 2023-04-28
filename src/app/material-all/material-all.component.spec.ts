import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAllComponent } from './material-all.component';

describe('MaterialAllComponent', () => {
  let component: MaterialAllComponent;
  let fixture: ComponentFixture<MaterialAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
