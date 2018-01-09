# WordPress Heroku

This project is a template for installing and running [WordPress](http://wordpress.org/) on [Heroku](http://www.heroku.com/). The repository comes bundled with:
* [PostgreSQL for WordPress](http://wordpress.org/extend/plugins/postgresql-for-wordpress/) - only works with WP4.1.1 branch and PHP 7.0.x and 5.x versions
* [Cloudinary for non ephemeral Image and Video Storage](http://cloudinary.com/)
* [WP Sendgrid](https://wordpress.org/plugins/wp-sendgrid/)
* [Disqus Commenting System](https://disqus.com/)
* [Wordpress HTTPS](https://wordpress.org/plugins/wordpress-https/)

## Development Environment

Development environment dependencies:

* [Git](https://git-scm.com/)
* [Php](http://www.php.net/)
* [Visual Studio Code IDE](https://code.visualstudio.com/)

### Windows

#### Git installation

1. Download git from [git downloads](https://git-scm.com/downloads]).
2. Install with the following options:

![Editor](https://rhildred.github.io/wordpress-heroku/READMEImages/giteditor.PNG "Editor")

![Path](https://rhildred.github.io/wordpress-heroku/READMEImages/UseGitAndOptions.PNG "Path")

![Line Endings](https://rhildred.github.io/wordpress-heroku/READMEImages/LineEnds.PNG "Line Endings")

#### PHP Installation

1) Download php from [php for windows downloads](http://windows.php.net/download)

2) Select this version for maximum compatibility

![7.0.x](https://rhildred.github.io/wordpress-heroku/READMEImages/phpdownloads64bitThreadsafe.PNG "7.0.x")

![extract all](https://rhildred.github.io/wordpress-heroku/READMEImages/phpExtract.PNG "extract all")

3) Unzip to `C:\Program Files\php7.0.27`

![Unzip to]( https://rhildred.github.io/wordpress-heroku/READMEImages/clickbeside.PNG "Unzip to")

#### Visual Studio Code Installation

1. Download Visual studio code from [vscode downloads.](https://code.visualstudio.com/)
2. Install with default settings

#### Post Installation

1) Start Visual Studio Code in administrator mode

![Administrator](https://rhildred.github.io/wordpress-heroku/READMEImages/vscodeAdministrator.PNG "Administrator")

2) Needed to add this to settings for vscode.

![Settings](https://rhildred.github.io/wordpress-heroku/READMEImages/VsCodeSettings.PNG "Settings")
```

{
    "window.zoomLevel": 0,
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "terminal.integrated.shellArgs.windows": ["-l"]
}

```
3) This to bottom of profile

![](https://rhildred.github.io/wordpress-heroku/READMEImages/profile.PNG)

```

PATH="${PATH}:/c/Program Files/php7.0.27/"
export PATH

```

4) Open php.ini.develoment

![Unzip to]( https://rhildred.github.io/wordpress-heroku/READMEImages/clickbeside.PNG "Unzip to")

5) Save as php.ini (On windows 10 you will get an error if you didn't open vscode as administrator)

6) Make the following changes

![extension_dir]( https://rhildred.github.io/wordpress-heroku/READMEImages/extension_dir.PNG "extension_dir")

![extensions]( https://rhildred.github.io/wordpress-heroku/READMEImages/extensions.PNG "Extensions")

![timeout]( https://rhildred.github.io/wordpress-heroku/READMEImages/timeout.PNG "timeout")

If everything works you should be able to do 

![ctrl backtick]( https://rhildred.github.io/wordpress-heroku/READMEImages/keypress.PNG "ctrl backtick")

With the resulting bash shell you should type in `php --version` and see the following results.

![php version]( https://rhildred.github.io/wordpress-heroku/READMEImages/phpversion.PNG "php version")

### Mac OSX

Installation on Mac is a lot simpler. 

#### Git/Vscode

Download both of these and install accepting the default prompts.

#### PHP

1) Once you have VsCode installed use the following technique to enter a shell in vscode:

![ctrl backtick]( https://rhildred.github.io/wordpress-heroku/READMEImages/keypress.PNG "ctrl backtick")

2) Install php using the curl command:

```
curl -s https://php-osx.liip.ch/install.sh | bash -s 7.0
```

With the resulting bash shell you should type in `php --version` and see the following results.

![php version]( https://rhildred.github.io/wordpress-heroku/READMEImages/phpversion.PNG "php version")

## Local Installation

Note: This repository is set up to deploy in a local environment using sqlite.

If you just want to use wordpress-heroku in your own development environment for experimenting/learning with Wordpress custom themes and plugins. You can download a zip of this repository.

![download zip]( https://rhildred.github.io/wordpress-heroku/READMEImages/downloadzip.PNG "Download Zip")

To run Wordpress:

1) Open the unzipped folder (you should rename it to something more meaningful than wordpress-heroku-master)

![open folder]( https://rhildred.github.io/wordpress-heroku/READMEImages/openfolder.PNG "open folder")

2) Use the keypress technique to start a bash shell

![ctrl backtick]( https://rhildred.github.io/wordpress-heroku/READMEImages/keypress.PNG "ctrl backtick")

3) Type `php -S localhost:8000` in the shell

4) go to [http://localhost:8000](http://localhost:8000) in a new browser tab.

![language selection]( https://rhildred.github.io/wordpress-heroku/READMEImages/language.PNG "language selection")

5) enter a username and lab password on the next screen

![Lab password]( https://rhildred.github.io/wordpress-heroku/READMEImages/LabPassword.PNG "lab password")

When you are really done you should be able to log in with your username and password from the previous step and see this:

![True success]( https://rhildred.github.io/wordpress-heroku/READMEImages/TrueSuccess.PNG "lab True success")

## Heroku Installation

Note: This repository is set up to deploy in a local environment using sqlite. The WP4.1.1 version only works with php 7.0.x.

1. Fork [the repository](https://github.com/rhildred/wordpress-heroku) to your own github
2. Clone the repository and open the resulting folder in VsCode
3. Run `git checkout WP4.1.1` if you are using postgresql on heroku
1. Add any plugins and themes you need and test
1. Create a new php app on on [Heroku](http://www.heroku.com/).
1. Add a heroku (postgres is free without a credit card) database to your app
1. Deploy to Heroku from github. If you are using postgres you will need to use the WP4.1.1 branch
1. After deployment WordPress has a few more steps to setup the installation by visiting your app and thats it!
2. Be sure that you use an internet worthy password.

## Usage

Because a file cannot be written to Heroku's file system, updating and installing plugins or themes should be done locally and then pushed to Heroku.

Multimedia can also not be stored there for the same reasons. You will need to activate the cloudinary plugin and get your multimedia from cloudinary.

## Updating

Updating with Heroku postgres and the WP4.1.1 branch is pretty much guaranteed to fail. The postgres database connection won't survive the update. I have tried at various times to fix this and failed. You can see what I have tried on the master branch of this repository. There is definitely some security risk to using this. Only you can decide whether demonstrating your work for free is worth the risk of using outdated software.

Because this can't be updated to newer versions of wordpress newer plugins and themes may also refuse to run. So far this seems to be more of a problem for plugins than themes.

## Deployment optimisation

If you have files that you want tracked in your repo, but do not need deploying (for example, *.md, *.pdf, *.zip). Then add path or linux file match to the `.slugignore` file & these will not be deployed.

Examples:
```
path/to/ignore/
bin/
*.md
*.pdf
*.zip
```

## Wiki (These are links to mhoofman's wiki)

* [Custom Domains](https://github.com/mhoofman/wordpress-heroku/wiki/Custom-Domains)
* [Media Uploads](https://github.com/mhoofman/wordpress-heroku/wiki/Media-Uploads)
* [Postgres Database Syncing](https://github.com/mhoofman/wordpress-heroku/wiki/Postgres-Database-Syncing)
* [Setting Up a Local Environment on Linux (Apache)](https://github.com/mhoofman/wordpress-heroku/wiki/Setting-Up-a-Local-Environment-on-Linux-\(Apache\))
* [Setting Up a Local Environment on Mac OS X](https://github.com/mhoofman/wordpress-heroku/wiki/Setting-Up-a-Local-Environment-on-Mac-OS-X)
* [More...](https://github.com/mhoofman/wordpress-heroku/wiki)
