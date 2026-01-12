import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SectionStorage {
  // ทำตามโจทย์ข้อ 3: Store data in localStorage ... by using key ng-section-data
  private readonly keyName = 'ng-section-data';

  get(): number[][] {
    const jsonText = localStorage.getItem(this.keyName);
    return JSON.parse(jsonText ?? '[]');
  }

  set(data: number[][]): void {
    const jsonText = JSON.stringify(data);
    localStorage.setItem(this.keyName, jsonText);
  }
}
