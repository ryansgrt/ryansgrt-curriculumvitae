export default interface BlogsProps {
  data: BlogsPostProps;
  className?: string;
}

export interface BlogsPostProps {
  title: string;
  date: Date;
  author: string;
  url: string;
}
