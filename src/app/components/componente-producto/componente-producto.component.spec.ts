import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteProductoComponent } from './componente-producto.component';

describe('ComponenteProductoComponent', () => {
  let component: ComponenteProductoComponent;
  let fixture: ComponentFixture<ComponenteProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteProductoComponent]
    });
    fixture = TestBed.createComponent(ComponenteProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
