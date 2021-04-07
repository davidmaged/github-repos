export class Repo {
  id: number;
  name: string;
  description: string;
  stars: number;
  issues: number;
  avatar: string;

  constructor(
      id: number,
      name: string,
      description: string,
      stars: number,
      issues: number,
      avatar: string
    )
    {
      this.id = id;
      this.name = name;
      this.description = description;
      this.stars = stars;
      this.issues = issues;
      this.avatar = avatar;
    }
}
