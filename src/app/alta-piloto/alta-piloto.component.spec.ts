import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPilotoComponent } from './alta-piloto.component';

describe('AltaPilotoComponent', () => {
  let component: AltaPilotoComponent;
  let fixture: ComponentFixture<AltaPilotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPilotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
