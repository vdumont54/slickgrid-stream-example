import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDetailStreamPreloadComponent } from './row-detail-stream-preload.component';

describe('RowDetailStreamPreloadComponent', () => {
  let component: RowDetailStreamPreloadComponent;
  let fixture: ComponentFixture<RowDetailStreamPreloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowDetailStreamPreloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowDetailStreamPreloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
