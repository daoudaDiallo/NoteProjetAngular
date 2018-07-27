import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieresParentComponent } from './matieres-parent.component';

describe('MatieresParentComponent', () => {
  let component: MatieresParentComponent;
  let fixture: ComponentFixture<MatieresParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatieresParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
