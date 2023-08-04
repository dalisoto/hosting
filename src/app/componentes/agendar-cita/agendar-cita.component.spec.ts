import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaComponent } from './agendar-cita.component';

describe('AgendarCitaComponent', () => {
let component: CitaComponent;
let fixture: ComponentFixture<CitaComponent>;

beforeEach(() => {
TestBed.configureTestingModule({
declarations: [CitaComponent]
});
fixture = TestBed.createComponent(CitaComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});
});

