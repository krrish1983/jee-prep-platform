export type QuestionMeta = {
  chapter: string;
  topic?: string;
  exam: 'JEE Mains' | 'JEE Advanced' | 'Olympiad';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: 'Single' | 'Multiple' | 'Integer' | 'Paragraph' | 'Matrix';
  sourceFile: string;
  createdAt: string;
};
