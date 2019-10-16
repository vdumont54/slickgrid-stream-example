import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDetailStreamComponent } from './row-detail-stream.component';

describe('RowDetailStreamComponent', () => {
  let component: RowDetailStreamComponent;
  let fixture: ComponentFixture<RowDetailStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowDetailStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowDetailStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
