import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioMsjComponent } from './usuario-msj.component';

describe('UsuarioMsjComponent', () => {
  let component: UsuarioMsjComponent;
  let fixture: ComponentFixture<UsuarioMsjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioMsjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioMsjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
