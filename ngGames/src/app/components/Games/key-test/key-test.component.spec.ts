import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyTestComponent } from './key-test.component';

describe('KeyTestComponent', () => {
  let component: KeyTestComponent;
  let fixture: ComponentFixture<KeyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
