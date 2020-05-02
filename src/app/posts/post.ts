export interface Post {
  id?: string,
  title: string,
  body: string,
  likes?: number,
  dislikes?: number,
  date:  Date,
  comments?: string[],
}
