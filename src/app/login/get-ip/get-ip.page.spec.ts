import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetIpPage } from './get-ip.page';

describe('GetIpPage', () => {
  let component: GetIpPage;
  let fixture: ComponentFixture<GetIpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetIpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
