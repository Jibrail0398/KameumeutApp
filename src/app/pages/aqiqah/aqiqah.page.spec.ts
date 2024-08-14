import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AqiqahPage } from './aqiqah.page';

describe('AqiqahPage', () => {
  let component: AqiqahPage;
  let fixture: ComponentFixture<AqiqahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AqiqahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
