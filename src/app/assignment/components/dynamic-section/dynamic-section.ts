import { ChangeDetectionStrategy, Component, model, inject, effect } from '@angular/core';
import { DynamicInput } from '../dynamic-input/dynamic-input';
import { createSection, addSection, removeSection } from '../../helpers';
import { SectionModel } from '../../types';
import { SectionStorage } from '../../services/section.storage'; // ตรวจสอบ path ไฟล์ storage ของคุณ

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [DynamicInput],
  templateUrl: './dynamic-section.html',
  styleUrl: './dynamic-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSection {
  private readonly storage = inject(SectionStorage);

  readonly sections = model<readonly SectionModel[]>(
    this.storage.get() ?? [createSection()]
  );

  constructor() {
    effect(() => {
      this.storage.set([...this.sections()]);
    });
  }

  protected addSection(): void {
    this.sections.update(sections => addSection([...sections]));
  }

  protected removeSection(index: number): void {
    this.sections.update(sections => removeSection([...sections], index));
  }

  protected changeSection(index: number, value: SectionModel): void {
    this.sections.update(sections =>
      sections.map((section, i) => (i === index ? value : section))
    );
  }
}