import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegridComponent } from './tablegrid.component';

describe('TablegridComponent', () => {
  let component: TablegridComponent;
  let fixture: ComponentFixture<TablegridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablegridComponent]
    });
    fixture = TestBed.createComponent(TablegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
