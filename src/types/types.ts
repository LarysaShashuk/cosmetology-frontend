export interface ArticleType {
  _id: string;
  title: string;
  text: string;
}

export interface BlogStateType {
  articles: ArticleType[];
  article: ArticleType;
  loading: boolean;
}

export interface RootState{
blog: BlogStateType,
}

export interface NewArticleType {
 _id?: string;
  title: string;
  text: string;
}

export interface ArticleCardTypes {
  article: ArticleType;
  handleFormOpening: any;
  handleDeleteArticle: any;
}

export interface UseParamsTypes {
  id: string;
}

export interface ArticleFormPropsType {
  initialValues: NewArticleType;
  handleReduxAction: any;
  handleClose: any;
  heading?: string;
  isAddingArticle?: boolean;
  isArticlePage?: boolean;
}

export interface BlogItemType {
  article: ArticleType;
}

export interface ConfirmationWindowProps {
  title: string;
  deleteAction: any;
  cancelAction: any;
}

export interface ErrorPageProps {
statusCode?: string;
errorMessage: string;
}
