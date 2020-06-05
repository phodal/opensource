export interface Practise {
  displayName: string;
  source: string;
  default?: boolean;
}

export type Practises = Array<Practise>;

export const practises: Practises = [{ displayName: '示例', source: 'sample' }];
