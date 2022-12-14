
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

export interface PostId {
    postId: string
}
  
export interface RepleListType {
author: AuthorType;
content: string;
createdAt: Date;
postId: string;
reple: string;
updatedAt: Date;
__v: number;
_id: string;
}

export interface RepleType {
    reple: RepleListType;
}