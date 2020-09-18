# server
Specification driven server

## Development Setup ##
After checkout run the following command from the root of the
checkout directory to install all node modules for root and
all packages.

```
npm install
```

## Lerna ##
[Lerna](https://github.com/lerna/lerna) is used to manage the monorepo.
There is no need to install this globaly, and instead the following
script alias can be used for any Lerna command.

```
npm run lerna -- [lerna commands]
```

### Tests ###
Tests are package specific so they have to be run via a Lerna command.

```
npm run lerna -- run test
```

Tests are setup to use the mocha configuration from this root project.
Each package has it's own test script to specify the location of its
test files.