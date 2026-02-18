
export type ScriptFormat = 'tamil' | 'tanglish';

export interface ScriptLineVersions {
  spoken: string;
  tanglish: string;
  syncShort: string;
}

export interface ScriptLine {
  person: string;
  startTime: string;
  endTime: string;
  dialogue: string; // Legacy support
  versions: ScriptLineVersions;
  emotion?: string;
  confidenceScore?: number;
  actionDescription?: string;
  originalMeaning?: string;
}

export interface ProcessingState {
  isProcessing: boolean;
  step: number;
  message: string;
}

export type AppTab = 'script' | 'visuals' | 'analysis' | 'audio';
