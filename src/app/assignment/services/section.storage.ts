import { APP_ID, Injectable, inject } from '@angular/core';
import { SectionData } from '../types';

const keyName = 'section-data';

@Injectable({
  providedIn: 'root',
})
export class SectionStorage {
  private readonly keyName = `${inject(APP_ID)}-${keyName}` as const;

  get(): SectionData | null {
    const jsonText = localStorage.getItem(this.keyName);
    return JSON.parse(jsonText ?? 'null');
  }

  set(data: SectionData): void {
    const jsonText = JSON.stringify(data);
    localStorage.setItem(this.keyName, jsonText);
  }
}
