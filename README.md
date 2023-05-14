`@miladhp/vue-3-click-outside` - a simple, Vue.js composable for handle click outside of an element.

### Installation

npm:

```bash
npm install @miladhp/vue-3-click-outside --save
```

yarn:

```bash
yarn add @miladhp/vue-3-click-outside --save
```

pnpm:

```bash
pnpm install @miladhp/vue-3-click-outside --save
```

### Use

```html
<template>
  <div>
    <div ref="myElement"></div>
  </div>
</template>

<script setup>
  import { useOnClickOutside } from "@miladhp/vue-3-click-outside";

  const myElement = ref(null);
  useOnClickOutside(myElement, () => {
    console.log("Clicked outside");
  });
</script>
```
