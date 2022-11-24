export interface IButton {
  text: string;
  to: string;
  href?: string;
}

export interface IOptions {
  src: string;
  srcset?: string;
}

export interface ISource {
  [index: number]: {
    type: string;
    srcset: string;
    media: string;
  };
}

export interface IImg {
  options: IOptions;
  source?: ISource;
}

export interface Iitems {
  [index: number]: {
    title: string;
    text: string;
  };
}

export interface ITabs {
  [index: number]: {
    text: string | null;
    items: Iitems;
  };
}

export interface IContent {
  slug?: string;
  tabs: ITabs;
}

export interface IHelpData {
  component: string;
  title: string;
  desc: string;
  content: IContent;
}

export interface ISection1Data {
  params: iFormData;
  title: string;
  desc?: string;
  breadcrumbs?: string[];
  button?: IButton;
  img?: IImg;
}

export interface iFormData {
  path: any;
  image: iFormData;
  form: {
    color: string;
    rewritePadd?: boolean;
  };
  params?: {
    class?: string;
  };
}
