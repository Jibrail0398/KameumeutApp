import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelPotongPage } from './label-potong.page';

describe('LabelPotongPage', () => {
  let component: LabelPotongPage;
  let fixture: ComponentFixture<LabelPotongPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LabelPotongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
