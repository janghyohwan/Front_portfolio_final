export type ProjectProps = {
  cards?: CardProps[];
  sectionId?: string;
  title?: string;
};

export type CardProps = {
  imageSrc: string;
  imageLink?: string;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
};
