# cmd-enter

Every textarea should let you submit comments by pressing cmd-enter or ctrl-enter.
For every site that doesn't support it, a kitten weeps. Here's to fixing that.

## Requirements

- [dotjs](https://github.com/defunkt/dotjs)

## Supported Sites

- [dribbble](dribbble.com.js)
- [reddit](reddit.com.js)

## Contributing

Contributing is easy. Say reddit.com is giving you issues, just create a reddit.js.com
file and add your fix. jQuery is available from dotjs regardless if the target site has
it or not.

Here is an example file:

```js
$(document).on('keydown', '.usertext-edit textarea', function(e) {
  if(e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
    $(this).parents('form').submit()
  }
})
```

Hints:

- `.usertext-edit textarea` is the selector for all textareas we are listening.
- `e.keyCode == 13` - 13 is the enter key.
- `(e.metaKey || e.ctrlKey)` is either the command key or ctrl key.

## Note on Patches/Pull Requests

- Fork the project.
- Add the cmd-enter behavior to a site.
- Send me a pull request.