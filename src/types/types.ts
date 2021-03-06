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

export interface AuthStateType {
  user: any, 
  userData: any,
  loading: boolean,
  error: any,
}

export interface RootState {
  blog: BlogStateType;
  auth: AuthStateType;
}

export interface AddArticleFormType {
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
  initialValues: AddArticleFormType;
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
  deleteButton: string;
   cancelButton: string;
}

export interface ErrorPageProps {
  statusCode?: string;
  errorMessage: string;
}

export interface UserDataType {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  phone: string;
}


