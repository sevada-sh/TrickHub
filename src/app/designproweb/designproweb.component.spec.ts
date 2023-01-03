import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignprowebComponent } from './designproweb.component';

describe('DesignprowebComponent', () => {
  let component: DesignprowebComponent;
  let fixture: ComponentFixture<DesignprowebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignprowebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignprowebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
