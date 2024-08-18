import { ReplaySubject } from 'rxjs';

export interface ChatMessage {
  question: string;
  answer: ReplaySubject<string>;
  done: ReplaySubject<boolean>;
}
