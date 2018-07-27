import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieresCloneComponent } from './matieres-clone.component';

describe('MatieresCloneComponent', () => {
  let component: MatieresCloneComponent;
  let fixture: ComponentFixture<MatieresCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatieresCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatieresCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
