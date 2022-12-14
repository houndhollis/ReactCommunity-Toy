export type AuthorType = {
    photoURL?: string;
    displayName: string;
    uid?: string;
  }

export interface DetailListType {
    author: AuthorType;
    content: string;
    createdAt: Date;
    image: string;
    postNum: number;
    repleNum?: number;
    title: string;
    updatedAt: Date;
    __v: number;
    _id: string;
}

export interface DetailInfo {
    postInfo : DetailListType
}

