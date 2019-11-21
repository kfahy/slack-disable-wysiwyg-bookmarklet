# Slack Disable WYSIWYG Bookmarklet

*Disables the WYSIWYG editor in Slack.*

## Motivation

On 2019-11-20 Slack rolled out a new version of the editor. This editor features
[WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) functionality, which shows all
message formatting inline in the text box.

As of this time, Slack does not allow users to disable this functionality and
revert back to the plaintext markdown editor. Until Slack implements this
functionality, you can use this bookmarklet to temporarily disable all
WYSIWYG A/B tests, which should restore the old editor functionality.

## Usage
1. Copy the contents of `index.js`
2. Paste into the URL field of a browser bookmark
3. Navigate to a Slack workspace in that browser
4. Execute the bookmarklet to disable the WYSIWYG editor
5. Repeat each time you reload slack
