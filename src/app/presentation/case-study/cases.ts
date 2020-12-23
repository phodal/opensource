import { DocRoute } from '@ledge-framework/view/lib/ledge-multiple-docs/doc-route.model';

export type Cases = Array<DocRoute>;

// todo: 优先级根据内容的质量重新排序。现在的是后来的在后面  + 内容多的在前面，随机组合
export const cases: Cases = [
  { displayName: '微软', source: 'microsoft' },
  { displayName: '阿里巴巴', source: 'alibaba' },
  { displayName: 'Google', source: 'google' },
  { displayName: '腾讯', source: 'tencent' },
  { displayName: '百度', source: 'baidu' },
  { displayName: '华为', source: 'huawei' },
  { displayName: 'ThoughtWorks', source: 'thoughtworks' },
];
