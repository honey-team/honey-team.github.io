export type Favicons = {
    [key: string]: string | null;
};
export type Descriptions = {
    [key: string]: string | null;
};
export type Titles = {
    [key: string]: string;
};
export type OGs = {
    [key: string]: string | null;
};

export enum Langs {
    py = 'py',
    js = 'js',
    cpp = 'cpp',
    c_sharp = 'csh',
    java = 'java',
    lua = 'lua',
    unity_engine = 'unity',
    godot_engine = 'godot',
    unreal_engine = 'unreal',
    web = 'web',
    react_framework = 'react',
    flutter_framework = 'flutter',
    qt_framework = 'qt',
    databases = 'db'
};

export type Socials = {
    tg?: string,
    ds?: string,
    site?: string,
    gh?: string
}

export type Member = {
    gh: string,
    banner?: string,
    bio?: string,
    langs?: Langs[],
    socials?: Socials,
    projects?: string[]
};

export type Project = {
    gh: string,
    title?: string,
    image?: string,
    description?: string,
    socials?: Socials
};