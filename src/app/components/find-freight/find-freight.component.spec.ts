import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFreightComponent } from './find-freight.component';

describe('FindFreightComponent', () => {
  let component: FindFreightComponent;
  let fixture: ComponentFixture<FindFreightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFreightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
