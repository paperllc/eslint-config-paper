# Paper _code style_

We ask developers to follow coding conventions across all our projects.

**WebStorm** code style and inspections + **ESLint** work hand-in-hand with each other.

**Be sure to `Fix ESLint Problems`, and `Reformat code` with WebStorm before a commit!**

## Requirements
- WebStorm ^2019

## Install

### ESLint

1. `npm i https://github.com/paperllc/eslint-config-paper.git#semver:x.x.x -D`

2. In `.eslintrc.json`

```json
{
    "extends": ["paper"]
}
```

**You will extend only the rules.**

**You need to configure other option by yourself, as well as installing all the dependencies.**

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
!.idea/dictionaries
!.idea/modules.xml
!.idea/*.iml
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
