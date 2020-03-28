import { sha256, sha224 } from 'js-sha256';
import { sha3_256, sha3_512 } from 'js-sha3';

export class Hash {
    /**
     * Convert string to sha256
     * @param text string
     */
    public static sha256(text: string) { return sha256(text); }
    /**
     * Convert string to sha224
     * @param text string
     */
    public static sha224(text: string) { return sha224(text); }
    /**
     * Convert string to sha3-256
     * @param text string
     */
    public static sha3_256(text: string) { return sha3_256(text); }
    /**
     * Convert string to sha3-512
     * @param text string
     */
    public static sha3_512(text: string) { return sha3_512(text); }
}
