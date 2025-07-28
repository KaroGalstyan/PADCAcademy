export interface ILanguageState {
  language: string;
  setLanguage: (lang: string) => Promise<void>;
  loadLanguage: () => Promise<void>;
}
