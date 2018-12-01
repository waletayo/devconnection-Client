export class HandleResponse {
  handle:string;
  title:string;
  company:string;
  skill:string;
  location:string;
  website:string;
  bio:string;
  status:string;
  github:string;
  experience:{
    title:string;
    company:string;
    location:string;
    description:string;
    from:string;
    to:string;
    current:string;
  }
  education:{
    school:string;
    degree:string;
    fieldOfStudy:string;
    from:string;
    to:string;
    current:string;
    description:string;
  }

  social:{
    youtube:string;
    twitter:string;
    facebook :string;
    linkdin:string;
    instagram:string;


}
user:{
    name:string;
    email:string;
}
}
