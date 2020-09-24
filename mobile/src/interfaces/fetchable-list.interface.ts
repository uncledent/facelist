export interface FetchableList<T> {
  fetching: boolean;
  errorMessage: string;
  items: { [id: string]: T };
}
