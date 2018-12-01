export class PostResponse {
  comment: any;
  date: string;
  likes: any;
  text: string;
  user: {
    _id: string,
    name: string,
    email: string,
    avatar: string
  };
  _id: string;
}
