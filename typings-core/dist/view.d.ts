import Promise = require('any-promise');
export interface ViewOptions {
}
export declare function viewEntry(raw: string, options: ViewOptions): Promise<{}>;
export declare function viewVersions(raw: string, options: ViewOptions): Promise<{}>;
