import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPsicoComponent } from './agenda-psico.component';

describe('AgendaPsicoComponent', () => {
  let component: AgendaPsicoComponent;
  let fixture: ComponentFixture<AgendaPsicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaPsicoComponent]
    });
    fixture = TestBed.createComponent(AgendaPsicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
