import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelPage } from './label.page';

describe('LabelPage', () => {
  let component: LabelPage;
  let fixture: ComponentFixture<LabelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
