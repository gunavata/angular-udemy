// The normal way of setting a constructor in typescript, there is a convenient way to do ti as well
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, path: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = path;
  }
}
