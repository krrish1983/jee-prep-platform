export type Exam = 'JEE Mains' | 'JEE Advanced' | 'Olympiad';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';
export type QType = 'Single' | 'Multiple' | 'Integer' | 'Paragraph' | 'Matrix';

export type QuestionMeta = {
  chapter: string;
  topic?: string;
  exam: Exam;
  difficulty: Difficulty;
  type: QType;
  sourceFile: string;
  createdAt: string;
};

export type TestKind = 'grand' | 'topicwise' | 'live';
export type TestDef = {
  id: string;
  name: string;
  kind: TestKind;
  createdAt: string;
  questionFiles: string[]; // relative paths under storage/questions
};
