import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemoonekarhaComponent } from './nemoonekarha.component';

describe('NemoonekarhaComponent', () => {
  let component: NemoonekarhaComponent;
  let fixture: ComponentFixture<NemoonekarhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NemoonekarhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NemoonekarhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
