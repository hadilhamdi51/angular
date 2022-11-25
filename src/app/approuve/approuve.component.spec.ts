import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprouveComponent } from './approuve.component';

describe('ApprouveComponent', () => {
  let component: ApprouveComponent;
  let fixture: ComponentFixture<ApprouveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprouveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprouveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
