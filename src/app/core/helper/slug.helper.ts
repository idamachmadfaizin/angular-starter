export function slug(text: string) {
    return text
        .toLowerCase()
        .replace(/ /g, '_')
        .replace(/[^\w-]+/g, '')
        ;
}