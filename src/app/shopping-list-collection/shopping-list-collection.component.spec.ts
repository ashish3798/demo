import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListCollectionComponent } from './shopping-list-collection.component';

describe('ShoppingListCollectionComponent', () => {
  let component: ShoppingListCollectionComponent;
  let fixture: ComponentFixture<ShoppingListCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
