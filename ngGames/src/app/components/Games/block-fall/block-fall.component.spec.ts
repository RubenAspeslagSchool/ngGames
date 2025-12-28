import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFallComponent } from './block-fall.component';

describe('BlockFallComponent', () => {
  let component: BlockFallComponent;
  let fixture: ComponentFixture<BlockFallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockFallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockFallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
