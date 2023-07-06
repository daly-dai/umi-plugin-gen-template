declare const templateTypes: readonly ['list-page', 'form-page'];

export type templateType = (typeof templateTypes)[number];
