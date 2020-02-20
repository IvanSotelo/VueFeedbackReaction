# VueFeedbackReaction

> Helps you to collect feedback and leads using the most spoken language in the world: the emoji.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/afda1cbc405d4ef2844920e9c46772df)](https://www.codacy.com/manual/IvanSotelo/VueFeedbackReaction?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=IvanSotelo/VueFeedbackReaction&amp;utm_campaign=Badge_Grade)
[![NPMVERSION](https://img.shields.io/npm/v/vue-feedback-reaction.svg)](http://npmjs.com/package/vue-feedback-reaction) [![GITHUBSTARS](https://img.shields.io/github/stars/IvanSotelo/VueFeedbackReaction.svg)](https://github.com/IvanSotelo/VueFeedbackReaction/stargazers) [![MadeWithVueJs.com shield](https://madewithvuejs.com/storage/repo-shields/1774-shield.svg)](https://madewithvuejs.com/p/vuefeedbackreaction/shield-link) [![BUILD](https://travis-ci.org/IvanSotelo/VueFeedbackReaction.svg?branch=master)](https://travis-ci.org/IvanSotelo/VueFeedbackReaction) [![DOWNLOADS](https://img.shields.io/npm/dt/vue-feedback-reaction.svg)](https://npmjs.com/package/vue-feedback-reaction)
[![Build Status](https://github.com/IvanSotelo/VueFeedbackReaction/workflows/Build/badge.svg)](https://github.com/IvanSotelo/VueFeedbackReaction/actions)

This project is inspired by [Feedback Reactions](https://dribbble.com/shots/4793955-Feedback-Reactions) from [Mohammad Amiri](https://dribbble.com/pixelamiri)

## Installation

``` bash
# Install with npm
$ npm i -S vue-feedback-reaction

# or yarn
$ yarn add vue-feedback-reaction
```

**Note:** This project exports two components, VueFeedBackReaction, which is the feedback component itself, and VueReactionEmoji, if you'd like to use a single emoji. If you install using `Vue.use`, you will **only** get VueFeedbackReaction component.

## Usage

### VueFeedbackReaction

``` vue
<template>
  <div class="app">
    <vue-feedback-reaction v-model="feedback" />
  </div>
</template>

<script>
  import { VueFeedbackReaction } from 'vue-feedback-reaction';

  export default {
    name: 'demo',
    components: {
      VueFeedbackReaction
    },
    data: () => ({
      feedback: ''
    })
  };
</script>
```

### Props

| Property name   | Type                  | Default | Description                                                                        |
|-----------------|-----------------------|---------|------------------------------------------------------------------------------------|
| value           | String, Number        | ''      | Input value (v-model)                                                              |
| labels          | Array                 | []      | Array of strings that set labels below each emoji reaction, starting from the left |
| labelClass      | Object, Array, String | ''      | Only works if you are using the labels prop. Set a v-bind:class to all the labels  |
| emojiWidth      | String, Number        | ''      | Set a width for all emojis                                                         |
| emojiHeight     | String, Number        | ''      | Set a height for all emojis                                                        |
| containerWidth  | String, Number        | ''      | Set the containers width                                                           |
| containerHeight | String, Number        | ''      | Set the containers height                                                          |

### VueReactionEmoji

``` vue
<template>
  <div class="app">
    <vue-reaction-emoji :reaction="reaction" :is-active="isActive" :is-disabled="isDisabled" />
  </div>
</template>

<script>
  import { VueReactionEmoji } from 'vue-feedback-reaction';

  export default {
    name: 'demo',
    components: {
      VueReactionEmoji
    },
    data: () => ({
      reaction: 'natural',
      isActive: false,
      isDisabled: false
    })
  };
</script>
```

### Props

| Property name   | Type           | Default   | Description                                                                                    |
|-----------------|----------------|-----------|------------------------------------------------------------------------------------------------|
| reaction        | String         | 'natural' | Reaction of the emoji. Must be either `hate`, `disappointed`, `natural`, `good` or `excellent` |
| is-active       | Boolean        | false     | If you want the emoji to start with it's active state, set it to `true`                        |
| is-disabled     | Boolean        | false     | If you want the emoji to have **no** hover or click state, set it to `true`                    |
| width           | String, Number | ''        | Set the emojis width                                                                           |
| height          | String, Number | ''        | Set the emojis height                                                                          |

### Events

It emits an `@input` event when you click an emoji, if `is-disabled` is set to `false`.

## License

```
The MIT License (MIT)

Copyright (c) 2019 Ivan Sotelo Vargas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
