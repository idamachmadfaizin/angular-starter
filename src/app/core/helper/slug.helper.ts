export function slug(text: string, hyphen: string = '_') {
    return text
        .toLowerCase()
        .replace(/ /g, hyphen)
        .replace(/[^\w-]+/g, '')
        ;
}
