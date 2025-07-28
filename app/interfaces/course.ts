export interface ICountry {
  id: number;
  name: string;
}

export interface IChapterItem {
  title: string;
}

export interface IChapter {
  name: string;
  tasks?: IChapterItem[];
  miniProjects?: IChapterItem[];
  lectures?: IChapterItem[];
}

export interface ILecturer {
  fullName: string;
}
