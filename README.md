# Paper _code style_

We ask developers to follow coding conventions across all our projects.

**WebStorm** code style and inspections + **ESLint** work hand-in-hand with each other.

**Be sure to `Fix ESLint Problems`, and `Reformat code` with WebStorm before commit!**

## Requirements
- WebStorm ^2019

## Install

### ESLint

1. `npm i git+ssh://gitlab.com/paper-ai/eslint-config-paper.git#semver:VERSION -D`

2. Then install peerDependencies:

`npm i eslint@^6.5.0 typescript@^3.6.0 eslint-plugin-react@^7.16.0 @typescript-eslint/parser@^2.4.0 @typescript-eslint/eslint-plugin@^2.4.0 -D`

3. In `.eslintrc.json`

```json
{
    "extends": "paper"
}
```

For node environment:

```json
{
    "extends": "paper/node"
}
```

### WebStorm

#### Existing project

Specific files in `.idea` folder are committed, that is why coding conventions are scoped to the project.

Ensure that WebStorm listens to them:

_Code style:_

![Code style](images/1-code-style.png)

_Inspections:_

![Inspections](images/2-inspections.png)

#### New project or a project without this setup

1. Add this to `.gitignore`, to commit local JetBrains settings:

```gitignore
# JetBrains
.idea/*
!.idea/encodings.xml
!.idea/jsLibraryMappings.xml
!.idea/misc.xml
!.idea/inspectionProfiles
!.idea/webResources.xml
!.idea/codeStyles
```

2. Import code style:
- **Import** `webstorm-code-style.xml` scheme;
- Then **Copy to Project** (this option to store the selected scheme in a project level.
The selected code style is saved in the .idea directory in the file codeStyleSettings.xml);
- Select the project level scheme.

3. Import inspections
- **Import** `webstorm-inspections.xml` profile;
- Select imported profile and copy it to project level;
- Select the project level **Paper** profile.

4. Ensure that WebStorm listens to LOCAL (project level) settings.

## Additional rules

### Components/modules structure

There is a common way to name main module file `index.js`.

It is inconvenient to work with multiple `index.js` files opened, in the context of one project,
and search for a specific module, since they are named `index.js`.

There is another approach we used to follow:

**Name the file as its class/folder-name and write path to the main file in `package.json`**.

Examples:
- [notification module](./examples/modules/notification), 
- [TodoItem component](./examples/modules/notification).

### CSS style

Follow classic [BEM methodology](https://en.bem.info/methodology/).

### Visual separator

Use these separators to visually divide pieces of code.

```javascript
// ----------------------------------------------------
```

```javascript
// With comment
// ----------------------------------------------------
```

Place the separator after `imports`:

```javascript
import React, {Component} from 'react'
import {observer} from 'mobx-react'

// ----------------------------------------------------
```