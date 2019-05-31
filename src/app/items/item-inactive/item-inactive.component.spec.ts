import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInactiveComponent } from './item-inactive.component';

describe('ItemInactiveComponent', () => {
  let component: ItemInactiveComponent;
  let fixture: ComponentFixture<ItemInactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
