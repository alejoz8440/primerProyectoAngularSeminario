import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveItemsComponent } from './inactive-items.component';

describe('InactiveItemsComponent', () => {
  let component: InactiveItemsComponent;
  let fixture: ComponentFixture<InactiveItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
