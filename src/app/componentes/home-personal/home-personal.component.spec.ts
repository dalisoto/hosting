import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePersonalComponent } from './home-personal.component';

describe('HomePersonalComponent', () => {
  let component: HomePersonalComponent;
  let fixture: ComponentFixture<HomePersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePersonalComponent]
    });
    fixture = TestBed.createComponent(HomePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
