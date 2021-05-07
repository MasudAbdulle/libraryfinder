# Implementation

## Introduction- masud 

The current version of the system is v1.0, the data set is the Libraries data set from Open data Bristol. It contains the library name, full address, telephone and  URL to the website of the libraries. There is one issue with the map as it says there is no geo-location, in its current state it does fulfil use-case 1 but it would be better without out the message of "geo-location isnt supported" message. The configuration data (conf.json) contains the port for the ports for development and testing along with the user names and password to access the mysql data. 

## Project Structure - masud 
```
C:\Users\masud\OneDrive\Documents\GitHub\libraryfinder
├───docs
│   └───images
├───documentation templates
│   └───documentation templates
│       └───docs
├───documentation_templates
│   ├───documentation_templates
│   │   └───docs
│   │       ├───images
│   │       └───New folder
│   └───__MACOSX
│       └───documentation templates
│           └───docs
│               └───images
├───e2e
├───node_modules
│   ├───.bin
│   ├───@babel
│   │   ├───code-frame
│   │   │   └───lib
│   │   ├───compat-data
│   │   │   └───data
│   │   ├───core
│   │   │   ├───lib
│   │   │   │   ├───config
│   │   │   │   │   ├───files
│   │   │   │   │   ├───helpers
│   │   │   │   │   └───validation
│   │   │   │   ├───gensync-utils
│   │   │   │   ├───parser
│   │   │   │   │   └───util
│   │   │   │   ├───tools
│   │   │   │   └───transformation
│   │   │   │       ├───file
│   │   │   │       └───util
│   │   │   ├───node_modules
│   │   │   │   ├───.bin
│   │   │   │   ├───debug
│   │   │   │   │   └───src
│   │   │   │   ├───ms
│   │   │   │   └───semver
│   │   │   │       └───bin
│   │   │   └───src
│   │   │       ├───config
│   │   │       │   └───files
│   │   │       └───transformation
│   │   │           └───util
│   │   ├───generator
│   │   │   └───lib
│   │   │       ├───generators
│   │   │       └───node
│   │   ├───helper-annotate-as-pure
│   │   │   └───lib
│   │   ├───helper-builder-binary-assignment-operator-visitor
│   │   │   └───lib
│   │   ├───helper-compilation-targets
│   │   │   ├───lib
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───semver
│   │   │           └───bin
│   │   ├───helper-create-class-features-plugin
│   │   │   └───lib
│   │   ├───helper-create-regexp-features-plugin
│   │   │   └───lib
│   │   ├───helper-define-polyfill-provider
│   │   │   ├───esm
│   │   │   ├───lib
│   │   │   │   ├───browser
│   │   │   │   ├───node
│   │   │   │   └───visitors
│   │   │   ├───node_modules
│   │   │   │   ├───.bin
│   │   │   │   ├───debug
│   │   │   │   │   └───src
│   │   │   │   ├───ms
│   │   │   │   └───semver
│   │   │   │       └───bin
│   │   │   └───src
│   │   │       ├───browser
│   │   │       └───node
│   │   ├───helper-explode-assignable-expression
│   │   │   └───lib
│   │   ├───helper-function-name
│   │   │   └───lib
│   │   ├───helper-get-function-arity
│   │   │   └───lib
│   │   ├───helper-hoist-variables
│   │   │   └───lib
│   │   ├───helper-member-expression-to-functions
│   │   │   └───lib
│   │   ├───helper-module-imports
│   │   │   └───lib
│   │   ├───helper-module-transforms
│   │   │   └───lib
│   │   ├───helper-optimise-call-expression
│   │   │   └───lib
│   │   ├───helper-plugin-utils
│   │   │   └───lib
│   │   ├───helper-remap-async-to-generator
│   │   │   └───lib
│   │   ├───helper-replace-supers
│   │   │   └───lib
│   │   ├───helper-simple-access
│   │   │   └───lib
│   │   ├───helper-skip-transparent-expression-wrappers
│   │   │   └───lib
│   │   ├───helper-split-export-declaration
│   │   │   └───lib
│   │   ├───helper-validator-identifier
│   │   │   ├───lib
│   │   │   └───scripts
│   │   ├───helper-validator-option
│   │   │   └───lib
│   │   ├───helper-wrap-function
│   │   │   └───lib
│   │   ├───helpers
│   │   │   └───lib
│   │   ├───highlight
│   │   │   └───lib
│   │   ├───parser
│   │   │   ├───bin
│   │   │   ├───lib
│   │   │   └───typings
│   │   ├───plugin-bugfix-v8-spread-parameters-in-optional-chaining
│   │   │   └───lib
│   │   ├───plugin-proposal-async-generator-functions
│   │   │   └───lib
│   │   ├───plugin-proposal-class-properties
│   │   │   └───lib
│   │   ├───plugin-proposal-decorators
│   │   │   └───lib
│   │   ├───plugin-proposal-dynamic-import
│   │   │   └───lib
│   │   ├───plugin-proposal-export-namespace-from
│   │   │   └───lib
│   │   ├───plugin-proposal-json-strings
│   │   │   └───lib
│   │   ├───plugin-proposal-logical-assignment-operators
│   │   │   └───lib
│   │   ├───plugin-proposal-nullish-coalescing-operator
│   │   │   └───lib
│   │   ├───plugin-proposal-numeric-separator
│   │   │   └───lib
│   │   ├───plugin-proposal-object-rest-spread
│   │   │   └───lib
│   │   ├───plugin-proposal-optional-catch-binding
│   │   │   └───lib
│   │   ├───plugin-proposal-optional-chaining
│   │   │   └───lib
│   │   ├───plugin-proposal-private-methods
│   │   │   └───lib
│   │   ├───plugin-proposal-unicode-property-regex
│   │   │   └───lib
│   │   ├───plugin-syntax-async-generators
│   │   │   └───lib
│   │   ├───plugin-syntax-class-properties
│   │   │   └───lib
│   │   ├───plugin-syntax-decorators
│   │   │   └───lib
│   │   ├───plugin-syntax-dynamic-import
│   │   │   └───lib
│   │   ├───plugin-syntax-export-namespace-from
│   │   │   └───lib
│   │   ├───plugin-syntax-flow
│   │   │   └───lib
│   │   ├───plugin-syntax-import-meta
│   │   │   └───lib
│   │   ├───plugin-syntax-json-strings
│   │   │   └───lib
│   │   ├───plugin-syntax-jsx
│   │   │   └───lib
│   │   ├───plugin-syntax-logical-assignment-operators
│   │   │   └───lib
│   │   ├───plugin-syntax-nullish-coalescing-operator
│   │   │   └───lib
│   │   ├───plugin-syntax-numeric-separator
│   │   │   └───lib
│   │   ├───plugin-syntax-object-rest-spread
│   │   │   └───lib
│   │   ├───plugin-syntax-optional-catch-binding
│   │   │   └───lib
│   │   ├───plugin-syntax-optional-chaining
│   │   │   └───lib
│   │   ├───plugin-syntax-top-level-await
│   │   │   └───lib
│   │   ├───plugin-transform-arrow-functions
│   │   │   └───lib
│   │   ├───plugin-transform-async-to-generator
│   │   │   └───lib
│   │   ├───plugin-transform-block-scoped-functions
│   │   │   └───lib
│   │   ├───plugin-transform-block-scoping
│   │   │   └───lib
│   │   ├───plugin-transform-classes
│   │   │   └───lib
│   │   ├───plugin-transform-computed-properties
│   │   │   └───lib
│   │   ├───plugin-transform-destructuring
│   │   │   └───lib
│   │   ├───plugin-transform-dotall-regex
│   │   │   └───lib
│   │   ├───plugin-transform-duplicate-keys
│   │   │   └───lib
│   │   ├───plugin-transform-exponentiation-operator
│   │   │   └───lib
│   │   ├───plugin-transform-flow-strip-types
│   │   │   └───lib
│   │   ├───plugin-transform-for-of
│   │   │   └───lib
│   │   ├───plugin-transform-function-name
│   │   │   └───lib
│   │   ├───plugin-transform-literals
│   │   │   └───lib
│   │   ├───plugin-transform-member-expression-literals
│   │   │   └───lib
│   │   ├───plugin-transform-modules-amd
│   │   │   └───lib
│   │   ├───plugin-transform-modules-commonjs
│   │   │   └───lib
│   │   ├───plugin-transform-modules-systemjs
│   │   │   └───lib
│   │   ├───plugin-transform-modules-umd
│   │   │   └───lib
│   │   ├───plugin-transform-named-capturing-groups-regex
│   │   │   └───lib
│   │   ├───plugin-transform-new-target
│   │   │   └───lib
│   │   ├───plugin-transform-object-super
│   │   │   └───lib
│   │   ├───plugin-transform-parameters
│   │   │   └───lib
│   │   ├───plugin-transform-property-literals
│   │   │   └───lib
│   │   ├───plugin-transform-react-display-name
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx
│   │   │   └───lib
│   │   ├───plugin-transform-react-jsx-development
│   │   │   └───lib
│   │   ├───plugin-transform-react-pure-annotations
│   │   │   └───lib
│   │   ├───plugin-transform-regenerator
│   │   │   └───lib
│   │   ├───plugin-transform-reserved-words
│   │   │   └───lib
│   │   ├───plugin-transform-runtime
│   │   │   ├───lib
│   │   │   │   └───get-runtime-path
│   │   │   ├───node_modules
│   │   │   │   ├───.bin
│   │   │   │   └───semver
│   │   │   │       └───bin
│   │   │   └───src
│   │   │       └───get-runtime-path
│   │   ├───plugin-transform-shorthand-properties
│   │   │   └───lib
│   │   ├───plugin-transform-spread
│   │   │   └───lib
│   │   ├───plugin-transform-sticky-regex
│   │   │   └───lib
│   │   ├───plugin-transform-template-literals
│   │   │   └───lib
│   │   ├───plugin-transform-typeof-symbol
│   │   │   └───lib
│   │   ├───plugin-transform-unicode-escapes
│   │   │   └───lib
│   │   ├───plugin-transform-unicode-regex
│   │   │   └───lib
│   │   ├───preset-env
│   │   │   ├───data
│   │   │   ├───lib
│   │   │   │   └───polyfills
│   │   │   └───node_modules
│   │   │       ├───.bin
│   │   │       └───semver
│   │   │           └───bin
│   │   ├───preset-flow
│   │   │   └───lib
│   │   ├───preset-modules
│   │   │   ├───lib
│   │   │   │   └───plugins
│   │   │   │       ├───transform-async-arrows-in-class
│   │   │   │       ├───transform-edge-default-parameters
│   │   │   │       ├───transform-edge-function-name
│   │   │   │       ├───transform-jsx-spread
│   │   │   │       ├───transform-safari-block-shadowing
│   │   │   │       ├───transform-safari-for-shadowing
│   │   │   │       └───transform-tagged-template-caching
│   │   │   └───src
│   │   │       └───plugins
│   │   │           ├───transform-async-arrows-in-class
│   │   │           ├───transform-edge-default-parameters
│   │   │           ├───transform-edge-function-name
│   │   │           ├───transform-jsx-spread
│   │   │           ├───transform-safari-block-shadowing
│   │   │           ├───transform-safari-for-shadowing
│   │   │           └───transform-tagged-template-caching
│   │   ├───preset-react
│   │   │   └───lib
│   │   ├───runtime
│   │   │   ├───helpers
│   │   │   │   └───esm
│   │   │   └───regenerator
│   │   ├───template
│   │   │   └───lib
│   │   ├───traverse
│   │   │   ├───lib
│   │   │   │   ├───path
│   │   │   │   │   ├───generated
│   │   │   │   │   ├───inference
│   │   │   │   │   └───lib
│   │   │   │   └───scope
│   │   │   │       └───lib
│   │   │   ├───node_modules
│   │   │   │   ├───debug
│   │   │   │   │   └───src
│   │   │   │   └───ms
│   │   │   └───scripts
│   │   │       └───generators
│   │   └───types
│   │       ├───lib
│   │       │   ├───asserts
│   │       │   │   └───generated
│   │       │   ├───ast-types
│   │       │   │   └───generated
│   │       │   ├───builders
│   │       │   │   ├───flow
│   │       │   │   ├───generated
│   │       │   │   ├───react
│   │       │   │   └───typescript
│   │       │   ├───clone
│   │       │   ├───comments
│   │       │   ├───constants
│   │       │   │   └───generated
│   │       │   ├───converters
│   │       │   ├───definitions
│   │       │   ├───modifications
│   │       │   │   ├───flow
│   │       │   │   └───typescript
│   │       │   ├───retrievers
│   │       │   ├───traverse
│   │       │   ├───utils
│   │       │   │   └───react
│   │       │   └───validators
│   │       │       ├───generated
│   │       │       └───react
│   │       └───scripts
│   │           ├───generators
│   │           └───utils
│   ├───@mrmlnc
│   │   └───readdir-enhanced
│   │       └───lib
│   │           ├───async
│   │           ├───stream
│   │           └───sync
│   ├───@nodelib
│   │   ├───fs.scandir
│   │   │   ├───node_modules
│   │   │   │   └───@nodelib
│   │   │   │       └───fs.stat
│   │   │   │           ├───out
│   │   │   │           │   ├───adapters
│   │   │   │           │   ├───providers
│   │   │   │           │   └───types
│   │   │   │           └───src
│   │   │   │               ├───adapters
│   │   │   │               ├───providers
│   │   │   │               └───types
│   │   │   ├───out
│   │   │   │   ├───adapters
│   │   │   │   ├───providers
│   │   │   │   ├───types
│   │   │   │   └───utils
│   │   │   └───src
│   │   │       ├───adapters
│   │   │       ├───providers
│   │   │       ├───types
│   │   │       └───utils
│   │   ├───fs.stat
│   │   │   └───out
│   │   │       ├───adapters
│   │   │       ├───managers
│   │   │       └───providers
│   │   └───fs.walk
│   │       ├───out
│   │       │   ├───providers
│   │       │   ├───readers
│   │       │   ├───tests
│   │       │   └───types
│   │       └───src
│   │           ├───providers
│   │           ├───readers
│   │           ├───tests
│   │           └───types
│   ├───@types
│   │   ├───error-stack-parser
│   │   ├───estree
│   │   ├───glob
│   │   ├───lodash
│   │   │   ├───common
│   │   │   └───fp
│   │   ├───minimatch
│   │   └───node
│   │       └───ts3.6
│   ├───@ungap
│   │   └───promise-all-settled
│   │       ├───cjs
│   │       └───esm
│   ├───accepts
│   ├───acorn-hammerhead
│   │   ├───lib
│   │   └───ts-defs
│   ├───aggregate-error
│   │   └───node_modules
│   │       └───indent-string
│   ├───amdefine
│   ├───ansi-colors
│   │   └───types
│   ├───ansi-escapes
│   ├───ansi-regex
│   ├───ansi-styles
│   ├───anymatch
│   ├───argparse
│   │   └───lib
│   ├───arr-diff
│   ├───arr-flatten
│   ├───arr-union
│   ├───array-find
│   ├───array-flatten
│   ├───array-union
│   ├───array-uniq
│   ├───array-unique
│   ├───asar
│   │   ├───.circleci
│   │   ├───bin
│   │   └───lib
│   ├───assertion-error
│   ├───assign-symbols
│   ├───async
│   │   ├───lib
│   │   └───support
│   ├───async-exit-hook
│   ├───async-limiter
│   ├───atob
│   │   └───bin
│   ├───babel-plugin-dynamic-import-node
│   │   └───lib
│   ├───babel-plugin-module-resolver
│   │   └───lib
│   │       └───transformers
│   ├───babel-plugin-polyfill-corejs2
│   │   ├───esm
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───babel-plugin-polyfill-corejs3
│   │   ├───core-js-compat
│   │   ├───esm
│   │   └───lib
│   ├───babel-plugin-polyfill-regenerator
│   │   ├───esm
│   │   └───lib
│   ├───babel-plugin-syntax-trailing-function-commas
│   │   └───lib
│   ├───balanced-match
│   ├───base
│   │   └───node_modules
│   │       ├───define-property
│   │       ├───is-accessor-descriptor
│   │       ├───is-data-descriptor
│   │       └───is-descriptor
│   ├───base64-js
│   ├───bignumber.js
│   │   └───doc
│   ├───bin-v8-flags-filter
│   │   └───test
│   ├───binary-extensions
│   ├───bluebird
│   │   └───js
│   │       ├───browser
│   │       └───release
│   ├───body-parser
│   │   └───lib
│   │       └───types
│   ├───bowser
│   │   └───src
│   ├───brace-expansion
│   ├───braces
│   │   └───lib
│   ├───brotli
│   │   ├───build
│   │   ├───dec
│   │   └───enc
│   ├───browser-stdout
│   ├───browserslist
│   ├───buffer-from
│   ├───bytes
│   ├───cache-base
│   ├───call-bind
│   │   ├───.github
│   │   └───test
│   ├───call-me-maybe
│   │   └───test
│   ├───callsite
│   ├───callsite-record
│   │   └───lib
│   │       └───renderers
│   ├───camelcase
│   ├───caniuse-lite
│   │   ├───data
│   │   │   ├───features
│   │   │   └───regions
│   │   └───dist
│   │       ├───lib
│   │       └───unpacker
│   ├───chai
│   │   └───lib
│   │       └───chai
│   │           ├───core
│   │           ├───interface
│   │           └───utils
│   ├───chalk
│   │   └───types
│   ├───check-error
│   ├───chokidar
│   │   ├───lib
│   │   └───types
│   ├───chrome-remote-interface
│   │   ├───bin
│   │   ├───lib
│   │   └───node_modules
│   │       └───commander
│   ├───chromium-pickle-js
│   │   └───lib
│   ├───ci-info
│   ├───class-utils
│   │   └───node_modules
│   │       └───define-property
│   ├───clean-stack
│   ├───cliui
│   │   ├───build
│   │   │   └───lib
│   │   └───node_modules
│   │       ├───ansi-regex
│   │       ├───is-fullwidth-code-point
│   │       ├───string-width
│   │       └───strip-ansi
│   ├───code-point-at
│   ├───coffeescript
│   │   ├───bin
│   │   └───lib
│   │       ├───coffeescript
│   │       ├───coffeescript-browser-compiler-legacy
│   │       └───coffeescript-browser-compiler-modern
│   ├───collection-visit
│   ├───color-convert
│   ├───color-name
│   ├───colorette
│   ├───commander
│   │   └───typings
│   ├───component-emitter
│   ├───concat-map
│   │   ├───example
│   │   └───test
│   ├───content-disposition
│   ├───content-type
│   ├───convert-source-map
│   ├───cookie
│   ├───cookie-signature
│   ├───copy-descriptor
│   ├───core-js-compat
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           ├───bin
│   │           ├───classes
│   │           ├───functions
│   │           ├───internal
│   │           └───ranges
│   ├───core-util-is
│   │   └───lib
│   ├───cross-spawn
│   │   └───lib
│   │       └───util
│   ├───crypto-md5
│   │   └───test
│   │       └───support
│   ├───css
│   │   ├───lib
│   │   │   ├───parse
│   │   │   └───stringify
│   │   └───node_modules
│   │       └───source-map
│   │           ├───build
│   │           ├───lib
│   │           │   └───source-map
│   │           └───test
│   │               └───source-map
│   ├───cuint
│   │   ├───build
│   │   ├───examples
│   │   ├───lib
│   │   └───test
│   ├───debug
│   │   └───src
│   ├───decamelize
│   ├───decode-uri-component
│   ├───dedent
│   │   └───dist
│   ├───deep-eql
│   ├───define-properties
│   │   └───test
│   ├───define-property
│   │   └───node_modules
│   │       ├───is-accessor-descriptor
│   │       ├───is-data-descriptor
│   │       └───is-descriptor
│   ├───del
│   │   └───node_modules
│   │       ├───globby
│   │       │   └───node_modules
│   │       │       └───pify
│   │       └───pify
│   ├───depd
│   │   └───lib
│   │       ├───browser
│   │       └───compat
│   ├───destroy
│   ├───device-specs
│   ├───diff
│   │   ├───dist
│   │   └───lib
│   │       ├───convert
│   │       ├───diff
│   │       ├───patch
│   │       └───util
│   ├───dir-glob
│   ├───ee-first
│   ├───ejs
│   │   ├───bin
│   │   └───lib
│   ├───electron-to-chromium
│   ├───elegant-spinner
│   ├───emittery
│   ├───emoji-regex
│   │   └───es2015
│   ├───encodeurl
│   ├───end-of-stream
│   ├───endpoint-utils
│   │   └───node_modules
│   │       ├───pinkie
│   │       └───pinkie-promise
│   ├───error-stack-parser
│   │   └───dist
│   ├───escalade
│   │   ├───dist
│   │   └───sync
│   ├───escape-html
│   ├───escape-string-regexp
│   ├───esotope-hammerhead
│   │   └───ts-defs
│   ├───esutils
│   │   └───lib
│   ├───etag
│   ├───execa
│   │   ├───lib
│   │   └───node_modules
│   │       └───is-stream
│   ├───expand-brackets
│   │   ├───lib
│   │   └───node_modules
│   │       ├───define-property
│   │       └───extend-shallow
│   ├───express
│   │   └───lib
│   │       ├───middleware
│   │       └───router
│   ├───extend-shallow
│   │   └───node_modules
│   │       └───is-extendable
│   ├───extglob
│   │   ├───lib
│   │   └───node_modules
│   │       ├───define-property
│   │       ├───extend-shallow
│   │       ├───is-accessor-descriptor
│   │       ├───is-data-descriptor
│   │       └───is-descriptor
│   ├───fast-glob
│   │   ├───node_modules
│   │   │   └───glob-parent
│   │   │       └───node_modules
│   │   │           └───is-glob
│   │   ├───out
│   │   │   ├───adapters
│   │   │   ├───managers
│   │   │   ├───providers
│   │   │   │   └───filters
│   │   │   ├───types
│   │   │   └───utils
│   │   └───package
│   │       └───out
│   │           ├───adapters
│   │           ├───managers
│   │           ├───providers
│   │           │   └───filters
│   │           ├───types
│   │           └───utils
│   ├───fastq
│   │   ├───.github
│   │   │   └───workflows
│   │   └───test
│   ├───filelist
│   ├───fill-range
│   ├───finalhandler
│   ├───find-babel-config
│   │   ├───.circleci
│   │   ├───lib
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───json5
│   │       │   └───lib
│   │       └───path-exists
│   ├───find-up
│   ├───flat
│   │   └───test
│   ├───for-in
│   ├───forwarded
│   ├───fragment-cache
│   ├───fresh
│   ├───fs.realpath
│   ├───function-bind
│   │   └───test
│   ├───gensync
│   │   └───test
│   ├───get-caller-file
│   ├───get-func-name
│   ├───get-intrinsic
│   │   ├───.github
│   │   └───test
│   ├───get-stdin
│   ├───get-stream
│   ├───get-value
│   ├───glob
│   ├───glob-parent
│   ├───glob-to-regexp
│   ├───globals
│   ├───globby
│   │   └───node_modules
│   │       └───pify
│   ├───graceful-fs
│   ├───graphlib
│   │   ├───dist
│   │   └───lib
│   │       ├───alg
│   │       └───data
│   ├───growl
│   │   └───lib
│   ├───has
│   │   ├───src
│   │   └───test
│   ├───has-flag
│   ├───has-symbols
│   │   ├───.github
│   │   └───test
│   │       └───shams
│   ├───has-value
│   ├───has-values
│   │   └───node_modules
│   │       ├───is-number
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       └───kind-of
│   ├───he
│   │   ├───bin
│   │   └───man
│   ├───highlight-es
│   │   └───node_modules
│   │       └───js-tokens
│   ├───http-cache-semantics
│   ├───http-errors
│   ├───human-signals
│   │   └───build
│   │       └───src
│   ├───humanize-duration
│   ├───iconv-lite
│   │   ├───encodings
│   │   │   └───tables
│   │   └───lib
│   ├───ignore
│   ├───import-lazy
│   ├───indent-string
│   ├───inflight
│   ├───inherits
│   ├───ip
│   │   ├───lib
│   │   └───test
│   ├───ipaddr.js
│   │   └───lib
│   ├───is-accessor-descriptor
│   │   └───node_modules
│   │       └───kind-of
│   ├───is-binary-path
│   ├───is-buffer
│   │   └───test
│   ├───is-ci
│   ├───is-core-module
│   │   └───test
│   ├───is-data-descriptor
│   │   └───node_modules
│   │       └───kind-of
│   ├───is-descriptor
│   │   └───node_modules
│   │       └───kind-of
│   ├───is-docker
│   ├───is-es2016-keyword
│   ├───is-extendable
│   ├───is-extglob
│   ├───is-finite
│   ├───is-fullwidth-code-point
│   ├───is-glob
│   ├───is-jquery-obj
│   ├───is-number
│   ├───is-path-cwd
│   ├───is-path-in-cwd
│   ├───is-path-inside
│   ├───is-plain-obj
│   ├───is-plain-object
│   ├───is-stream
│   ├───is-utf8
│   ├───is-windows
│   ├───isarray
│   ├───isexe
│   │   └───test
│   ├───isobject
│   ├───jake
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───task
│   │   │   └───utils
│   │   └───test
│   │       ├───integration
│   │       │   └───jakelib
│   │       └───unit
│   ├───js-tokens
│   ├───js-yaml
│   │   ├───bin
│   │   ├───dist
│   │   └───lib
│   │       ├───schema
│   │       └───type
│   ├───jsesc
│   │   ├───bin
│   │   └───man
│   ├───json5
│   │   ├───dist
│   │   └───lib
│   ├───kind-of
│   ├───linux-platform-info
│   ├───locate-path
│   ├───lodash
│   │   └───fp
│   ├───lodash.debounce
│   ├───log-symbols
│   │   └───node_modules
│   │       ├───ansi-styles
│   │       ├───chalk
│   │       │   └───source
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───has-flag
│   │       └───supports-color
│   ├───log-update-async-hook
│   │   ├───node_modules
│   │   │   ├───ansi-regex
│   │   │   ├───is-fullwidth-code-point
│   │   │   ├───mimic-fn
│   │   │   ├───onetime
│   │   │   ├───string-width
│   │   │   ├───strip-ansi
│   │   │   └───wrap-ansi
│   │   └───src
│   ├───lru-cache
│   │   ├───lib
│   │   └───test
│   ├───make-dir
│   │   └───node_modules
│   │       ├───.bin
│   │       └───semver
│   │           └───bin
│   ├───map-cache
│   ├───map-visit
│   ├───match-url-wildcard
│   │   └───ts-defs
│   ├───media-typer
│   ├───merge-descriptors
│   ├───merge-stream
│   ├───merge2
│   ├───methods
│   ├───micromatch
│   │   ├───lib
│   │   └───node_modules
│   │       ├───braces
│   │       │   ├───lib
│   │       │   └───node_modules
│   │       │       └───extend-shallow
│   │       ├───fill-range
│   │       │   └───node_modules
│   │       │       └───extend-shallow
│   │       ├───is-number
│   │       │   └───node_modules
│   │       │       └───kind-of
│   │       └───to-regex-range
│   ├───mime
│   │   └───src
│   ├───mime-db
│   ├───mime-types
│   ├───mimic-fn
│   ├───minimatch
│   ├───minimist
│   │   ├───example
│   │   └───test
│   ├───mixin-deep
│   │   └───node_modules
│   │       └───is-extendable
│   ├───mkdirp
│   │   └───bin
│   ├───mocha
│   │   ├───assets
│   │   │   └───growl
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───browser
│   │   │   ├───cli
│   │   │   ├───interfaces
│   │   │   ├───nodejs
│   │   │   │   └───reporters
│   │   │   └───reporters
│   │   └───node_modules
│   │       ├───debug
│   │       │   ├───node_modules
│   │       │   │   └───ms
│   │       │   └───src
│   │       ├───escape-string-regexp
│   │       ├───has-flag
│   │       ├───ms
│   │       └───supports-color
│   ├───moment
│   │   ├───dist
│   │   │   └───locale
│   │   ├───locale
│   │   ├───min
│   │   ├───src
│   │   │   ├───lib
│   │   │   │   ├───create
│   │   │   │   ├───duration
│   │   │   │   ├───format
│   │   │   │   ├───locale
│   │   │   │   ├───moment
│   │   │   │   ├───parse
│   │   │   │   ├───units
│   │   │   │   └───utils
│   │   │   └───locale
│   │   └───ts3.1-typings
│   ├───moment-duration-format-commonjs
│   │   ├───lib
│   │   └───test
│   │       └───vendor
│   ├───ms
│   ├───mustache
│   │   ├───bin
│   │   └───wrappers
│   │       ├───dojo
│   │       ├───jquery
│   │       ├───mootools
│   │       ├───qooxdoo
│   │       └───yui3
│   ├───mysql
│   │   └───lib
│   │       └───protocol
│   │           ├───constants
│   │           ├───packets
│   │           └───sequences
│   ├───nanoid
│   │   ├───async
│   │   ├───bin
│   │   ├───non-secure
│   │   └───url-alphabet
│   ├───nanomatch
│   │   └───lib
│   ├───negotiator
│   │   └───lib
│   ├───node-releases
│   │   ├───.github
│   │   │   └───workflows
│   │   └───data
│   │       ├───processed
│   │       ├───raw
│   │       └───release-schedule
│   ├───node-version
│   ├───normalize-path
│   ├───npm-run-path
│   ├───number-is-nan
│   ├───object-assign
│   ├───object-copy
│   │   └───node_modules
│   │       ├───define-property
│   │       └───kind-of
│   ├───object-keys
│   │   └───test
│   ├───object-visit
│   ├───object.assign
│   │   ├───.github
│   │   │   └───workflows
│   │   ├───dist
│   │   └───test
│   ├───object.pick
│   ├───on-finished
│   ├───once
│   ├───onetime
│   ├───os-family
│   ├───os-tmpdir
│   ├───p-finally
│   ├───p-limit
│   ├───p-locate
│   ├───p-map
│   ├───p-try
│   ├───parse5
│   │   ├───docs
│   │   │   └───build
│   │   └───lib
│   │       ├───common
│   │       ├───jsdom
│   │       ├───serialization
│   │       ├───simple_api
│   │       ├───tokenization
│   │       ├───tree_adapters
│   │       └───tree_construction
│   ├───parseurl
│   ├───pascalcase
│   ├───path-dirname
│   ├───path-exists
│   ├───path-is-absolute
│   ├───path-is-inside
│   │   └───lib
│   ├───path-key
│   ├───path-parse
│   ├───path-to-regexp
│   ├───path-type
│   │   └───node_modules
│   │       └───pify
│   ├───pathval
│   ├───picomatch
│   │   └───lib
│   ├───pify
│   ├───pinkie
│   ├───pinkie-promise
│   ├───pkg-up
│   │   └───node_modules
│   │       ├───find-up
│   │       ├───locate-path
│   │       ├───p-limit
│   │       ├───p-locate
│   │       └───path-exists
│   ├───pngjs
│   │   └───lib
│   ├───posix-character-classes
│   ├───pretty-hrtime
│   ├───process-nextick-args
│   ├───promisify-event
│   ├───proxy-addr
│   ├───pump
│   ├───punycode
│   ├───qrcode-terminal
│   │   ├───bin
│   │   ├───example
│   │   ├───lib
│   │   ├───test
│   │   └───vendor
│   │       └───QRCode
│   ├───qs
│   │   ├───dist
│   │   ├───lib
│   │   └───test
│   ├───queue-microtask
│   ├───randombytes
│   ├───range-parser
│   ├───raw-body
│   ├───read-file-relative
│   ├───readable-stream
│   │   ├───doc
│   │   │   └───wg-meetings
│   │   └───lib
│   │       └───internal
│   │           └───streams
│   ├───readdirp
│   ├───regenerate
│   ├───regenerate-unicode-properties
│   │   ├───Binary_Property
│   │   ├───General_Category
│   │   ├───Script
│   │   └───Script_Extensions
│   ├───regenerator-runtime
│   ├───regenerator-transform
│   │   ├───lib
│   │   └───src
│   ├───regex-not
│   ├───regexpu-core
│   │   └───data
│   ├───regjsgen
│   ├───regjsparser
│   │   ├───bin
│   │   └───node_modules
│   │       ├───.bin
│   │       └───jsesc
│   │           ├───bin
│   │           └───man
│   ├───repeat-element
│   ├───repeat-string
│   ├───repeating
│   ├───replicator
│   ├───require-directory
│   ├───reselect
│   │   ├───dist
│   │   ├───es
│   │   ├───lib
│   │   └───src
│   ├───resolve
│   │   ├───example
│   │   ├───lib
│   │   └───test
│   │       ├───dotdot
│   │       │   └───abc
│   │       ├───module_dir
│   │       │   ├───xmodules
│   │       │   │   └───aaa
│   │       │   ├───ymodules
│   │       │   │   └───aaa
│   │       │   └───zmodules
│   │       │       └───bbb
│   │       ├───node_path
│   │       │   ├───x
│   │       │   │   ├───aaa
│   │       │   │   └───ccc
│   │       │   └───y
│   │       │       ├───bbb
│   │       │       └───ccc
│   │       ├───pathfilter
│   │       │   └───deep_ref
│   │       ├───precedence
│   │       │   ├───aaa
│   │       │   └───bbb
│   │       ├───resolver
│   │       │   ├───baz
│   │       │   ├───browser_field
│   │       │   ├───dot_main
│   │       │   ├───dot_slash_main
│   │       │   ├───incorrect_main
│   │       │   ├───invalid_main
│   │       │   ├───multirepo
│   │       │   │   └───packages
│   │       │   │       ├───package-a
│   │       │   │       └───package-b
│   │       │   ├───nested_symlinks
│   │       │   │   └───mylib
│   │       │   ├───other_path
│   │       │   │   └───lib
│   │       │   ├───quux
│   │       │   │   └───foo
│   │       │   ├───same_names
│   │       │   │   └───foo
│   │       │   ├───symlinked
│   │       │   │   ├───package
│   │       │   │   └───_
│   │       │   │       ├───node_modules
│   │       │   │       └───symlink_target
│   │       │   └───without_basedir
│   │       └───shadowed_core
│   │           └───node_modules
│   │               └───util
│   ├───resolve-cwd
│   │   └───node_modules
│   │       └───resolve-from
│   ├───resolve-from
│   ├───resolve-url
│   │   └───test
│   ├───ret
│   │   └───lib
│   ├───reusify
│   │   └───benchmarks
│   ├───rimraf
│   ├───run-parallel
│   ├───safe-buffer
│   ├───safe-regex
│   │   ├───example
│   │   └───test
│   ├───safer-buffer
│   ├───sanitize-filename
│   ├───semver
│   │   └───bin
│   ├───send
│   │   └───node_modules
│   │       └───ms
│   ├───serialize-javascript
│   ├───serve-static
│   ├───set-value
│   │   └───node_modules
│   │       └───extend-shallow
│   ├───setprototypeof
│   │   └───test
│   ├───shebang-command
│   ├───shebang-regex
│   ├───signal-exit
│   ├───slash
│   ├───snapdragon
│   │   ├───lib
│   │   └───node_modules
│   │       ├───define-property
│   │       └───extend-shallow
│   ├───snapdragon-node
│   │   └───node_modules
│   │       ├───define-property
│   │       ├───is-accessor-descriptor
│   │       ├───is-data-descriptor
│   │       └───is-descriptor
│   ├───snapdragon-util
│   │   └───node_modules
│   │       └───kind-of
│   ├───source-map
│   │   ├───dist
│   │   └───lib
│   ├───source-map-resolve
│   │   └───lib
│   ├───source-map-support
│   │   └───node_modules
│   │       └───source-map
│   │           ├───dist
│   │           └───lib
│   ├───source-map-url
│   ├───split-string
│   ├───sqlstring
│   │   └───lib
│   ├───stackframe
│   │   └───dist
│   ├───static-extend
│   │   └───node_modules
│   │       └───define-property
│   ├───statuses
│   ├───string-width
│   ├───string_decoder
│   │   └───lib
│   ├───strip-ansi
│   ├───strip-bom
│   ├───strip-final-newline
│   ├───strip-json-comments
│   ├───supports-color
│   ├───testcafe
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───api
│   │   │   │   ├───exportable-lib
│   │   │   │   ├───request-hooks
│   │   │   │   ├───structure
│   │   │   │   └───test-controller
│   │   │   ├───assertions
│   │   │   ├───assets
│   │   │   ├───browser
│   │   │   │   ├───connection
│   │   │   │   └───provider
│   │   │   │       ├───built-in
│   │   │   │       │   └───dedicated
│   │   │   │       │       ├───chrome
│   │   │   │       │       ├───edge
│   │   │   │       │       └───firefox
│   │   │   │       │           └───marionette-client
│   │   │   │       └───utils
│   │   │   ├───cli
│   │   │   ├───client
│   │   │   │   ├───automation
│   │   │   │   ├───browser
│   │   │   │   │   └───idle-page
│   │   │   │   ├───core
│   │   │   │   ├───driver
│   │   │   │   ├───test-run
│   │   │   │   └───ui
│   │   │   ├───client-functions
│   │   │   │   └───selectors
│   │   │   ├───compiler
│   │   │   │   ├───babel
│   │   │   │   └───test-file
│   │   │   │       └───formats
│   │   │   │           ├───coffeescript
│   │   │   │           ├───es-next
│   │   │   │           └───typescript
│   │   │   ├───configuration
│   │   │   ├───custom-client-scripts
│   │   │   ├───errors
│   │   │   │   ├───runtime
│   │   │   │   └───test-run
│   │   │   ├───live
│   │   │   │   ├───file-watcher
│   │   │   │   └───logger
│   │   │   ├───notifications
│   │   │   ├───reporter
│   │   │   │   └───command
│   │   │   ├───role
│   │   │   ├───runner
│   │   │   │   └───task
│   │   │   ├───screenshots
│   │   │   ├───services
│   │   │   │   ├───compiler
│   │   │   │   ├───serialization
│   │   │   │   │   └───replicator
│   │   │   │   └───utils
│   │   │   │       └───ipc
│   │   │   ├───shared
│   │   │   │   └───errors
│   │   │   ├───test-run
│   │   │   │   └───commands
│   │   │   │       └───validations
│   │   │   ├───utils
│   │   │   │   ├───diff
│   │   │   │   ├───get-options
│   │   │   │   └───temp-directory
│   │   │   │       └───cleanup-process
│   │   │   └───video-recorder
│   │   ├───node_modules
│   │   │   ├───debug
│   │   │   │   └───src
│   │   │   ├───diff
│   │   │   │   ├───dist
│   │   │   │   └───lib
│   │   │   │       ├───convert
│   │   │   │       ├───diff
│   │   │   │       ├───patch
│   │   │   │       └───util
│   │   │   ├───is-extglob
│   │   │   ├───is-glob
│   │   │   ├───ms
│   │   │   └───nanoid
│   │   │       └───async
│   │   └───ts-defs
│   ├───testcafe-browser-tools
│   │   ├───bin
│   │   │   ├───linux
│   │   │   │   ├───glibc-32
│   │   │   │   ├───glibc-64
│   │   │   │   ├───musl-32
│   │   │   │   └───musl-64
│   │   │   ├───mac
│   │   │   │   └───TestCafe Browser Tools.app
│   │   │   │       └───Contents
│   │   │   │           ├───MacOS
│   │   │   │           └───Resources
│   │   │   └───win
│   │   ├───data
│   │   ├───lib
│   │   │   ├───api
│   │   │   ├───errors
│   │   │   └───utils
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───@nodelib
│   │       │   └───fs.stat
│   │       │       ├───out
│   │       │       │   ├───adapters
│   │       │       │   ├───providers
│   │       │       │   └───types
│   │       │       └───src
│   │       │           ├───adapters
│   │       │           ├───providers
│   │       │           └───types
│   │       ├───array-union
│   │       ├───dedent
│   │       │   └───dist
│   │       ├───del
│   │       ├───dir-glob
│   │       ├───execa
│   │       │   └───lib
│   │       ├───fast-glob
│   │       │   └───out
│   │       │       ├───managers
│   │       │       ├───providers
│   │       │       │   ├───filters
│   │       │       │   ├───matchers
│   │       │       │   └───transformers
│   │       │       ├───readers
│   │       │       ├───types
│   │       │       └───utils
│   │       ├───globby
│   │       ├───ignore
│   │       ├───is-path-cwd
│   │       ├───is-path-inside
│   │       ├───is-stream
│   │       ├───micromatch
│   │       ├───nanoid
│   │       │   ├───async
│   │       │   └───non-secure
│   │       ├───p-map
│   │       ├───path-type
│   │       ├───rimraf
│   │       └───slash
│   ├───testcafe-hammerhead
│   │   ├───lib
│   │   │   ├───client
│   │   │   ├───processing
│   │   │   │   ├───dom
│   │   │   │   ├───encoding
│   │   │   │   ├───resources
│   │   │   │   └───script
│   │   │   │       └───transformers
│   │   │   ├───proxy
│   │   │   ├───request-pipeline
│   │   │   │   ├───destination-request
│   │   │   │   ├───file-request
│   │   │   │   ├───header-transforms
│   │   │   │   └───request-hooks
│   │   │   │       ├───request-filter-rule
│   │   │   │       └───response-mock
│   │   │   ├───session
│   │   │   │   └───events
│   │   │   ├───shadow-ui
│   │   │   ├───typings
│   │   │   ├───upload
│   │   │   └───utils
│   │   ├───node_modules
│   │   │   ├───.bin
│   │   │   ├───bowser
│   │   │   │   ├───.idea
│   │   │   │   │   └───markdown-navigator
│   │   │   │   ├───src
│   │   │   │   └───test
│   │   │   ├───debug
│   │   │   │   └───src
│   │   │   ├───iconv-lite
│   │   │   │   ├───encodings
│   │   │   │   │   └───tables
│   │   │   │   └───lib
│   │   │   ├───merge-stream
│   │   │   ├───mime
│   │   │   │   └───build
│   │   │   ├───ms
│   │   │   ├───parse5
│   │   │   │   └───lib
│   │   │   │       ├───common
│   │   │   │       ├───location_info
│   │   │   │       ├───parser
│   │   │   │       ├───sax
│   │   │   │       ├───serializer
│   │   │   │       ├───tokenizer
│   │   │   │       └───tree_adapters
│   │   │   └───semver
│   │   │       └───bin
│   │   └───ts-defs
│   ├───testcafe-legacy-api
│   │   ├───lib
│   │   │   ├───client
│   │   │   │   └───test-run
│   │   │   ├───compiler
│   │   │   │   ├───legacy
│   │   │   │   │   └───analysis
│   │   │   │   └───tools
│   │   │   │       └───uglify-js
│   │   │   │           └───lib
│   │   │   ├───test-run
│   │   │   ├───test-run-error
│   │   │   │   └───assertion-diffs
│   │   │   └───utils
│   │   └───node_modules
│   │       ├───async
│   │       │   └───lib
│   │       ├───dedent
│   │       │   └───dist
│   │       └───parse5
│   │           └───lib
│   │               ├───common
│   │               ├───location_info
│   │               ├───parser
│   │               ├───sax
│   │               ├───serializer
│   │               ├───tokenizer
│   │               └───tree_adapters
│   ├───testcafe-reporter-json
│   │   └───lib
│   ├───testcafe-reporter-list
│   │   └───lib
│   ├───testcafe-reporter-minimal
│   │   └───lib
│   ├───testcafe-reporter-spec
│   │   └───lib
│   ├───testcafe-reporter-xunit
│   │   └───lib
│   ├───time-limit-promise
│   ├───tmp
│   │   ├───lib
│   │   └───test
│   │       └───symlinkme
│   ├───tmp-promise
│   │   └───node_modules
│   │       └───tmp
│   │           └───lib
│   ├───to-fast-properties
│   ├───to-object-path
│   │   └───node_modules
│   │       └───kind-of
│   ├───to-regex
│   ├───to-regex-range
│   ├───toidentifier
│   ├───tough-cookie
│   │   └───lib
│   ├───tree-kill
│   ├───truncate-utf8-bytes
│   │   └───lib
│   ├───tunnel-agent
│   ├───type-detect
│   ├───type-is
│   ├───typescript
│   │   ├───bin
│   │   ├───lib
│   │   │   ├───cs
│   │   │   ├───de
│   │   │   ├───es
│   │   │   ├───fr
│   │   │   ├───it
│   │   │   ├───ja
│   │   │   ├───ko
│   │   │   ├───pl
│   │   │   ├───pt-br
│   │   │   ├───ru
│   │   │   ├───tr
│   │   │   ├───zh-cn
│   │   │   └───zh-tw
│   │   └───loc
│   │       └───lcl
│   │           ├───CHS
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───CHT
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───CSY
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───DEU
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───ESN
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───FRA
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───ITA
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───JPN
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───KOR
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───PLK
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───PTB
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           ├───RUS
│   │           │   ├───Targets
│   │           │   ├───TypeScriptDebugEngine
│   │           │   ├───TypeScriptLanguageService
│   │           │   └───TypeScriptTasks
│   │           └───TRK
│   │               ├───Targets
│   │               ├───TypeScriptDebugEngine
│   │               ├───TypeScriptLanguageService
│   │               └───TypeScriptTasks
│   ├───ultron
│   ├───unicode-canonical-property-names-ecmascript
│   ├───unicode-match-property-ecmascript
│   ├───unicode-match-property-value-ecmascript
│   │   └───data
│   ├───unicode-property-aliases-ecmascript
│   ├───union-value
│   ├───unpipe
│   ├───unquote
│   ├───unset-value
│   │   └───node_modules
│   │       ├───has-value
│   │       │   └───node_modules
│   │       │       └───isobject
│   │       └───has-values
│   ├───urix
│   │   └───test
│   ├───use
│   ├───utf8-byte-length
│   ├───util-deprecate
│   ├───utils-merge
│   ├───vary
│   ├───webauth
│   │   └───lib
│   ├───which
│   │   └───bin
│   ├───which-promise
│   │   └───node_modules
│   │       ├───.bin
│   │       ├───pinkie
│   │       ├───pinkie-promise
│   │       └───which
│   │           └───bin
│   ├───wide-align
│   ├───workerpool
│   │   ├───dist
│   │   └───src
│   │       └───generated
│   ├───wrap-ansi
│   │   └───node_modules
│   │       ├───ansi-regex
│   │       ├───ansi-styles
│   │       ├───color-convert
│   │       ├───color-name
│   │       ├───is-fullwidth-code-point
│   │       ├───string-width
│   │       └───strip-ansi
│   ├───wrappy
│   ├───ws
│   │   └───lib
│   ├───y18n
│   │   └───build
│   │       └───lib
│   │           └───platform-shims
│   ├───yargs
│   │   ├───build
│   │   │   └───lib
│   │   │       ├───typings
│   │   │       └───utils
│   │   ├───helpers
│   │   ├───lib
│   │   │   └───platform-shims
│   │   ├───locales
│   │   └───node_modules
│   │       ├───ansi-regex
│   │       ├───is-fullwidth-code-point
│   │       ├───string-width
│   │       └───strip-ansi
│   ├───yargs-parser
│   │   └───build
│   │       └───lib
│   ├───yargs-unparser
│   └───yocto-queue
├───static
├───test
└───views
    └───templates

C:\Users\masud\OneDrive\Documents\GitHub\libraryfinder>


```


## Software Architecture - Abdi
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

The software architectural styles we used were; software, hardware, databases and people. These architectural styles compose of a web app, web server and the database. The web app will rely on the web server to quickly extract information from the database so that the web server can meet the demands of the web app. These provide the user with information from the database which can be effective for the user. It can also save the user alot of time by using built-in systems that can modify and signal problems. A simple set up going from one to the other also creates a chain of information, so it does not cause any problems. This allows the web app to operate smoothly and efficiently with minimal setbacks. 

![Insert your component Diagram here](images/component.png)
