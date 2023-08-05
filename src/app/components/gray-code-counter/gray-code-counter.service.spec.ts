import { TestBed } from '@angular/core/testing';

import { GrayCodeCounterService } from './gray-code-counter.service';
import { count } from 'rxjs';

describe('GrayCodeCounterService', () => {
  let service: GrayCodeCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrayCodeCounterService);
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

  describe('Test whichBitChange()', () => {
    it('block negative numbers', () => {
      expect(service.whichBitChange(3)).toThrowError;
    });
    it('0 number', () => {
      expect(service.whichBitChange(0)).toEqual(0);
    });
    it('Test number 9', () => {
      expect(service.whichBitChange(10)).toEqual(1);
    });
    it('Test number 112', () => {
      expect(service.whichBitChange(112)).toEqual(4);
    });
  })


});
