//% color=#AA278D weight=100 icon="\uf15c"
namespace textTools {
    /**
     * Scroll text across the micro:bit display.
     * @param text Text to scroll
     * @param speed Speed in ms per character (50-500)
     */
    //% blockId=texttools_show_scrolling_text
    //% block="show scrolling text %text|speed %speed"
    //% speed.min=50 speed.max=500 speed.defl=150
    export function showScrollingText(text: string, speed: number): void {
        // basic.showString scrolls the text; speed is delay between columns in ms
        basic.showString(text, speed);
    }

    /**
     * Return the reverse of a string.
     * @param text The input string
     */
    //% blockId=texttools_reverse_text
    //% block="reverse text %text"
    export function reverseText(text: string): string {
        let res = "";
        for (let i = text.length - 1; i >= 0; i--) {
            res += text.charAt(i);
        }
        return res;
    }

    /**
     * Count words in a string. This is a simple implementation splitting on whitespace.
     * @param text The input text
     */
    //% blockId=texttools_word_count
    //% block="word count of %text"
    export function wordCount(text: string): number {
        text = text.trim();
        if (text.length == 0) return 0;
        // split on one or more whitespace characters
        let parts = text.split(/\s+/);
        return parts.length;
    }

    /**
     * Check whether `sub` is contained in `text`.
     * @param text The input text
     * @param sub The substring to search for
     */
    //% blockId=texttools_contains
    //% block="%text contains %sub?"
    export function containsSubstring(text: string, sub: string): boolean {
        return text.indexOf(sub) >= 0;
    }

    /**
     * Convert a string to uppercase.
     * @param text The input string
     */
    //% blockId=texttools_to_uppercase
    //% block="to uppercase %text"
    export function toUpperCase(text: string): string {
        // Use JS toUpperCase
        return ("" + text).toUpperCase();
    }
}
