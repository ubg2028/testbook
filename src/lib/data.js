import exams from '../data/exams.json';
import series from '../data/series.json';
import papers from '../data/papers.json';
import bank from '../data/questions.json';

// Test settings used everywhere (lists + player)
export const CFG = { duration: 15, correct: 1, neg: 0.25 };

export { exams, series, papers };
export const examMap = Object.fromEntries(exams.map(e => [e.slug, e]));
export const cats = [...new Set(exams.map(e => e.cat))];

// Drop a file at src/data/questions/<test-id>.json to give a test its own questions.
const custom = import.meta.glob('../data/questions/*.json', { eager: true, import: 'default' });
export const hasCustom = id => `../data/questions/${id}.json` in custom;
export const questionsFor = id => custom[`../data/questions/${id}.json`] ?? bank;

export const allTests = [
  ...papers.map(p => ({ id: p.id, exam: p.exam, title: p.title })),
  ...series.flatMap(s => s.tests.map(t => ({ id: t.id, exam: s.exam, title: `${examMap[s.exam].name} ${t.name}` }))),
];
