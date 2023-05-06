declare module '*.scss' {
    interface IClassNames {
        [classname: string]: string
    }
    const classnames: IClassNames;
    export = classnames;
}
