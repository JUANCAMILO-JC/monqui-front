import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnounceFreightComponent } from './announce-freight.component';

describe('AnnounceFreightComponent', () => {
  let component: AnnounceFreightComponent;
  let fixture: ComponentFixture<AnnounceFreightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnounceFreightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnounceFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
