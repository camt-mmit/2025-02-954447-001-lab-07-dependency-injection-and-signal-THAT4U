export interface InputModel {
  readonly value: string; 
}

export interface SectionModel {
  name: string;
  readonly inputs: readonly InputModel[];
}

export type SectionData = SectionModel[];