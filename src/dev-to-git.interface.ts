export type Repository = {
  readonly username: string;
  readonly name: string;
};

export interface ArticleConfigFile {
  id: number;
  relativePathToArticle: string;
}

export interface ArticleConfig extends ArticleConfigFile {
  repository: Repository;
}

// https://dev.to/api#available-json-parameters
export interface ArticleApi {
  body_markdown: string;
}

export enum UpdateStatus {
  UPDATED = 'Updated',
  ERROR = 'Error',
  // @todo handle that case
  ALREADY_UP_TO_DATE = 'AlreadyUpToDate',
  FAILED_TO_EXTRACT_FRONT_MATTER = 'FailedToExtractFrontMatter',
}

export type ArticlePublishedStatus = {
  articleId: number;
} & (
  | {
      articleTitle: string;
      updateStatus: Exclude<UpdateStatus, UpdateStatus.FAILED_TO_EXTRACT_FRONT_MATTER>;
    }
  | {
      updateStatus: UpdateStatus.FAILED_TO_EXTRACT_FRONT_MATTER;
    });
