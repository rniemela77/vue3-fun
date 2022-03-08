interface Person {
  name: string;
  id: number;
  age?: number;
  pets?: Array<"r">; // how to force it to take a certain value
}
