# system-appearance

## How to Install

```
npm install system-appearance --save
```

### How to use it with vanila JavaScript

```
setColorScheme(darkModeListener, lightModeListener, hasNoSupport);

function lightModeListener() {
	console.log('light mode');
}

function darkModeListener() {
	console.log('dark mode');
}

function hasNoSupport() {
	console.log('You specified no preference for a color scheme or your browser does not support it.');
}
```

### How to use it with vue.js

```
<template>
  <div>
    Appearance is {{ appearance }}
  </div>
</template>

<script>
import systemAppearance from "system-appearance";

export default {
  name: "Appearance",
  data() {
    return {
      appearance: null,
    }
  }
  mounted() {
    systemAppearance(this.dark, this.light, this.hasNoSupport);
  },
  methods: {
    darkModeListener() {
			this.appearance = 'dark';
    },

    lightModeListener() {
			this.appearance = 'light';
    },

    hasNoSupport() {
      this.appearance = null;
      console.log('You specified no preference for a color scheme or your browser does not support it.');
    }
  }
};
</script>
```

