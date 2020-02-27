import { TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('DashboardService', () => {
  let service: DashboardService;

  let injector: TestBed;
  let httpMock: HttpTestingController;
  let myProvider: DashboardService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DashboardService]
  }),

  );
  const testBed = getTestBed()
  myProvider = testBed.get(DashboardService);
  httpMock = testBed.get(HttpTestingController);
  service = TestBed.get(DashboardService);

  it('should be created', () => {
    const dashboardservice = TestBed.get(DashboardService);
    expect(dashboardservice).toBeTruthy();
  });
  it('check login', () => {
    const dashboardservice: DashboardService = TestBed.get(DashboardService)
    expect(dashboardservice.isAuthenticated()).toBeFalsy();
  });



  it('return service', () => {
    const someProducts = [

      { id: 1, name: 'Product001', cost: 10, quantity: 100 },

      { id: 2, name: 'Product002', cost: 100, quantity: 200 },

      { id: 3, name: 'Product003', cost: 200, quantity: 300 },

    ];

    myProvider.getDashboard().subscribe((products) => {
      expect(products).toEqual(someProducts)
    });
    const request = httpMock.expectOne(`${myProvider.url}/get`);
    expect(request.request.method).toBe("GET");
    request.flush(someProducts);

    httpMock.verify();
  });
});
