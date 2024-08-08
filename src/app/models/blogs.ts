export class Blog {
  id!: number;
  blogImg!: string;
  category!: string;
  description!: string;
  username!: string;
  userImg!: string;
  nowDate = new Date();
  date = this.nowDate;
}
