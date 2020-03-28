import { sha256, sha224 } from 'js-sha256';

export class FileHash {
    // public static base64 = (file: Blob) => new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = () => resolve((reader.result.toString()).split('base64,')[1]);
    //     reader.onerror = error => reject(error);
    // })

    /**
     * Convert file to base64
     * @param file file in blob type
     */
    public static async base64(file: Blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve((reader.result.toString()).split('base64,')[1]);
            reader.onerror = error => reject(error);
        }).catch(err => Error(err));
    }

    /**
     * Convert file to sha256 checksum
     * @param file file in blob type
     */
    public static async sha256(file: Blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            // reader.readAsDataURL(file);
            reader.onload = (f) => {
                resolve(sha256(reader.result));
            };
            reader.onerror = error => reject(error);
            reader.readAsArrayBuffer(file);
        }).catch(err => Error(err));
    }

    /**
     * Convert file to sha224 checksum
     * @param file file in blob type
     */
    public static async sha224(file: Blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            // reader.readAsDataURL(file);
            reader.onload = (f) => {
                resolve(sha224(reader.result));
            };
            reader.onerror = error => reject(error);
            reader.readAsArrayBuffer(file);
        }).catch(err => Error(err));
    }
}
