import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBolidosComponent } from './lista-bolidos.component';

describe('ListaBolidosComponent', () => {
  let component: ListaBolidosComponent;
  let fixture: ComponentFixture<ListaBolidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBolidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBolidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
