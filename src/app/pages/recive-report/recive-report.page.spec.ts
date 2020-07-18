import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReciveReportPage } from './recive-report.page';

describe('ReciveReportPage', () => {
  let component: ReciveReportPage;
  let fixture: ComponentFixture<ReciveReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciveReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReciveReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
