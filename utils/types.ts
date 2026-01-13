export interface IQuickLinkItem {
  title: string;
  route: string;
}

export interface IQuickLink {
  title: string;
  links: IQuickLinkItem[];
}
