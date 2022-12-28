import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReclamationsComponent } from './add-reclamations.component';

describe('AddReclamationsComponent', () => {
  let component: AddReclamationsComponent;
  let fixture: ComponentFixture<AddReclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReclamationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
