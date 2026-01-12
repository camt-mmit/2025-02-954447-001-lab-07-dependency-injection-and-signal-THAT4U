import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
  numberAttribute,
  computed,
} from '@angular/core';

import { 
  createInput, 
  calcResult, 
  addInputToSection, 
  removeInputFromSection 
} from '../../helpers';
import { SectionModel } from '../../types';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './dynamic-input.html',
  styleUrl: './dynamic-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicInput {

  readonly number = input(NaN, { transform: numberAttribute });

  readonly section = model.required<SectionModel>();

  readonly removable = input(true, { transform: booleanAttribute });

  readonly remove = output<void>();

  protected readonly inputCount = computed(() => this.section().inputs.length);

  protected readonly totalResult = computed(() => calcResult(this.section()));

  protected addInput(): void {
    this.section.update(section => addInputToSection(section));
  }

  protected removeInput(index: number): void {

    this.section.update(section => removeInputFromSection(section, index));
  }


  protected changeInput(index: number, value: string): void {
    this.section.update(section => ({
      ...section,
      inputs: section.inputs.map((v, i) =>
        i === index ? { ...v, value: value } : v
      ),
    }));
  }
}