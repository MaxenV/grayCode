import { TestBed } from '@angular/core/testing';

import { GreyCodeCounterService } from './grey-code-counter.service';
import { count } from 'rxjs';

describe('GreyCodeCounterService', () => {
  let service: GreyCodeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreyCodeCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('Test decimalToGray()', () => {
    it('block negative numbers', () => {
      expect(service.decimalToGray(3)).toThrowError;
    });
    it('0 number', () => {
      expect(service.decimalToGray(0)).toEqual([0]);
    });
    it('Test number 9', () => {
      expect(service.decimalToGray(9)).toEqual([1, 1, 0, 1]);
    });
    it('Test number 84', () => {
      expect(service.decimalToGray(84))
        .toEqual([1, 1, 1, 1, 1, 1, 0]);
    });
    it('Test number 9367', () => {
      expect(service.decimalToGray(9367))
        .toEqual([1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0]);
    });
  })

  describe('Test wchichBitChange()', () => {
    it('block negative numbers', () => {
      expect(service.wchichBitChange(3)).toThrowError;
    });
    it('0 number', () => {
      expect(service.wchichBitChange(0)).toEqual(0);
    });
    it('Test number 9', () => {
      expect(service.wchichBitChange(10)).toEqual(1);
    });
    it('Test number 112', () => {
      expect(service.wchichBitChange(112)).toEqual(4);
    });
  })


});
