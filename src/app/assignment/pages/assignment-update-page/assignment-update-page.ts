import { Component, signal, effect, inject } from '@angular/core';

import { DynamicSectionComponent } from '../../components/dynamic-section/dynamic-section.';
import { SectionStorage } from '../../data/section.storage.ts/section.storage.ts';


@Component({
  selector: 'app-assignment-update-page',
  standalone: true,
  imports: [DynamicSectionComponent],
  template: `
    <div class="lab06-container">
      <div class="page-header">
        <button class="btn-blue add-section-btn" (click)="addSection()">
          <span class="material-symbols-outlined">add_circle</span>
          Add New Section
          <span class="badge">({{ sections().length }})</span>
        </button>
      </div>

      @for (sec of sections(); track $index) {
        <app-dynamic-section
          [idx]="$index"
          [nums]="sec"
          [removable]="sections().length > 1"
          (numsChange)="updateSection($index, $event)"
          (removeSection)="removeSection($index)">
        </app-dynamic-section>
      }
    </div>
  `,
  styles: [`
    .lab06-container { padding: 20px; }
    .page-header {
      text-align: center;
      margin-bottom: 30px;
    }
    .add-section-btn {
      font-size: 1.1em;
      padding: 10px 20px;
    }
    .badge {
      margin-left: 5px;
      background: rgba(255,255,255,0.3);
      padding: 2px 6px;
      border-radius: 10px;
    }

    button {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
      font-weight: bold;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .btn-blue { background-color: #e3f2fd; color: #1976d2; }
    .material-symbols-outlined { font-size: 20px; }
  `]
})
export class AssignmentUpdatePage {
  private readonly storage = inject(SectionStorage);
  readonly sections = signal<number[][]>(this.storage.get());

  constructor() {
    effect(() => {
      this.storage.set(this.sections());
    });

    if (this.sections().length === 0) {
      this.addSection();
    }
  }

  addSection() {
    this.sections.update(old => [...old, [0]]);
  }

  updateSection(index: number, newNums: number[]) {
    this.sections.update(old => {
      const newSections = [...old];
      newSections[index] = newNums;
      return newSections;
    });
  }

  removeSection(index: number) {
    if (this.sections().length > 1) {
      this.sections.update(old => old.filter((_, i) => i !== index));
    }
  }
}
