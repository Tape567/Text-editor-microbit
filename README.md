# Text Tools — MakeCode micro:bit Extension

This small extension adds a few text/string utility blocks and a scrolling text block for the micro:bit.

Included blocks:
- showScrollingText(text, speed) — scrolls text on the micro:bit display
- reverseText(text) — returns reversed string
- wordCount(text) — returns number of words (simple split)
- containsSubstring(text, sub) — true if sub is found in text
- toUpperCase(text) — returns string in uppercase

How to use
1. Open the MakeCode editor for micro:bit (https://makecode.microbit.org/).
2. Click the gear (or the Extensions menu) -> Extensions -> Import URL or My Extensions.
3. Import this package by pasting a GitHub URL or upload a zip containing these files.
4. After importing, the blocks appear under the "Text Tools" category (custom namespace).

Examples in JavaScript (text editor):
- textTools.showScrollingText("Hello!", 120);
- let rev = textTools.reverseText("abc"); // "cba"
- let n = textTools.wordCount("Hello world!"); // 2

Want more?
Tell me which text editor features or micro:bit behaviors you'd like (fonts, static display using custom font matrices, editor integration helpers, etc.) and I'll add them.
