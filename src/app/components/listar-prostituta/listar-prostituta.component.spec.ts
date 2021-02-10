import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProstitutaComponent } from './listar-prostituta.component';

describe('ListarProstitutaComponent', () => {
  let component: ListarProstitutaComponent;
  let fixture: ComponentFixture<ListarProstitutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProstitutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProstitutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
