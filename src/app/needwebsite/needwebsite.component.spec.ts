import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedwebsiteComponent } from './needwebsite.component';

describe('NeedwebsiteComponent', () => {
  let component: NeedwebsiteComponent;
  let fixture: ComponentFixture<NeedwebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeedwebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedwebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
