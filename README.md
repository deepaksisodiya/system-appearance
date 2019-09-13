# system-appearance

## How to Install

```
npm install system-appearance --save
```


function lightMode() {
	console.log('light mode');
}

function darkMode() {
	console.log('dark mode');
}

function hasNoSupport() {
	console.log('You specified no preference for a color scheme or your browser does not support it.');
}

setColorScheme(darkMode, lightMode, hasNoSupport);