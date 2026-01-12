import { InputModel, SectionModel, SectionData } from './types';


export function createInput(value: string = ''): InputModel {
  return { value };
}


export function createSection(name: string = '', values?: string[]): SectionModel {
  return {
    name: name,
    inputs: values ? values.map(v => createInput(v)) : [createInput()]
  };
}


export function addInputToSection(section: SectionModel): SectionModel {
  return {
    ...section,
    inputs: [...section.inputs, createInput()]
  };
}


export function removeInputFromSection(section: SectionModel, index: number): SectionModel {
  return {
    ...section,
    inputs: section.inputs.filter((_, i) => i !== index)
  };
}


export function createSectionData(data?: {name: string, values: string[]}[]): SectionData {

  return data?.map(s => createSection(s.name, s.values)) ?? [createSection()];
}
export function addSection(data: SectionData): SectionData {
  return [...data, createSection()];
}

export function removeSection(data: SectionData, index: number): SectionData {
  return data.filter((_, i) => i !== index);
}
export function calcResult(section: SectionModel): number {
  return section.inputs.reduce((sum, input) => sum + (Number(input.value) || 0), 0);
}