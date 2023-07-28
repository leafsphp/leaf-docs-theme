# Introduction

Hello, this is a simple introduction to the framework.

```php
<?php

require __DIR__ . '/vendor/autoload.php';

app()->get('/', function () {
  echo 'something'; // [!code --]
  echo 'something'; // [!code ++]
});

app()->run();
```

## Installation

You can get this tool up and running on your system using composer:

```bash
composer global require leafs/cli
```

## Creating a leaf app

To start a new project, simply open up your console or terminal and move into the directory you want to generate your project. From there, you can use the `create` command:

```bash
leaf create <project-name>
```

with leaf 3:

```bash
leaf create <project-name> --v3
```

or with leaf 2:

```bash
leaf create <project-name> --v2
```

This will now prompt you to select a preset

```bash
Creating a new Leaf app "<project-name>" in ./projects-directory.

Please select which preset you would like to use:
 > minimal (Bare essentials)
   full (Full Leaf app with auth, database, etc)
   custom (Customize your Leaf app)
```

You can select any of the presets you want. The `minimal` preset is the default preset. You can also create your own preset by running:

```bash
leaf create <project-name> --custom
```

This will prompt you to select the features you want in your app:

```bash
Creating a new Leaf app "<project-name>" in ./projects-directory.

Please select which features you would like to include in your app:
 > auth (Authentication)
   database (Database)
   cors (CORS)
   csrf (CSRF)
   mail (Mail)
   session (Session)
   validation (Validation)
   views (Views)
```

You can select any of the features you want. The `auth` feature is the default feature. You can also create your own preset by running:

```bash
leaf create <project-name> --custom
```

This will prompt you to select the features you want in your app:

```bash
Creating a new Leaf app "<project-name>" in ./projects-directory.

Please select which features you would like to include in your app:
 > auth (Authentication)
   database (Database)
   cors (CORS)
   csrf (CSRF)
   mail (Mail)
   session (Session)
   validation (Validation)
   views (Views)
```

## Selecting

You can select any of the features you want. The `auth` feature is the default feature. You can also create your own preset by running:

```bash
leaf create <project-name> --custom
```

This will prompt you to select the features you want in your app:

```bash
ijifjnkfenwf
```

### Sub Heading

Hello, this is a simple introduction to the framework.

```php
<?php

require __DIR__ . '/vendor/autoload.php';

app()->get('/', function () {
  echo 'something'; // [!code --]
  echo 'something'; // [!code ++]
});

app()->run();
```

