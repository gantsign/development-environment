var store = [{
        "title": "Getting started",
        "excerpt":"The following instructions will guide you through the process of provisioning your local development environment using GantSign EnV. Install dependencies Clone the project Configuration Proxy configuration Host proxy config Client VM proxy config Advanced configuration Run Vagrant Troubleshooting HTTP errors Issues with VirtualBox GuestAdditions versions Change your password Stopping the...","categories": [],
        "tags": [],
        "url": "/development-environment/docs/getting-started/",
        "teaser": null
      },{
        "title": "Documentation",
        "excerpt":"   Requirements   Features   Getting started   Configuration   User guide   Upgrade  ","categories": [],
        "tags": [],
        "url": "/development-environment/docs/",
        "teaser": null
      },{
        "title": "Requirements",
        "excerpt":"Vagrant   Website: https://www.vagrantup.com   Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.   VirtualBox   Website: https://www.virtualbox.org   Multi-platform virtualization provider with excellent integration with Vagrant.  ","categories": [],
        "tags": [],
        "url": "/development-environment/docs/requirements/",
        "teaser": null
      },{
        "title": "User guide",
        "excerpt":"Using Vagrant All the following commands must be run from the project root directory. To start the development environment vagrant up To stop the development environment vagrant halt To remove the development environment Use with caution this will delete all the files in your development environment. vagrant destroy Rebuilding the...","categories": [],
        "tags": [],
        "url": "/development-environment/docs/user-guide/",
        "teaser": null
      },{
        "title": "Configuration",
        "excerpt":"The goal of this project is to make it easy to build your development environment in a reliable and reproducible way. To achieve this any essential configuration has to be version controlled. This still leaves room for a certain amount of user specific configuration on a users local machine. User...","categories": [],
        "tags": [],
        "url": "/development-environment/docs/configuration/",
        "teaser": null
      },{
        "title": "Features",
        "excerpt":"There are a lot of well known projects, and hidden gems, which aid in your productivity; this project aims to install the best of them to make life a little easier. For everybody Dynamically allocated swap space Compressed swap File backup &amp; restore between rebuilds For command line users Terminator...","categories": [],
        "tags": [],
        "url": "/development-environment/docs/features/",
        "teaser": null
      },{
        "title": "Upgrade",
        "excerpt":"The following instructions will guide you through the process of upgrading your local GantSign EnV development environment to the latest release. Backup any essential files Halt the development environment Pull the changes for the latest release Re-provision the development environment Troubleshooting HTTP errors Out of disk space Issues with VirtualBox...","categories": [],
        "tags": [],
        "url": "/development-environment/docs/upgrade/",
        "teaser": null
      },{
        "title": "Welcome to the new website!",
        "excerpt":"   The documentation was getting a bit long for the README.md so here is the shiny new website; it’s built using Jekyll and hosted using GitHub pages.  ","categories": [],
        "tags": ["documentation"],
        "url": "/development-environment/new-website/",
        "teaser": null
      },{
        "title": "Default desktop is now Ubuntu Unity",
        "excerpt":"To make the development environment as robust as possible, the Ubuntu Unity desktop is now installed by default. As Unity is the default desktop on Ubuntu it tends to have better support from third party apps. Left: Ubuntu Unity desktop, right: Xfce desktop. For those of you who prefer the...","categories": [],
        "tags": ["documentation"],
        "url": "/development-environment/unity/",
        "teaser": null
      },{
        "title": "Improved and documented proxy support",
        "excerpt":"While it was always possible to use the development environment behind a proxy, you had to know about the vagrant proxyconf plugin; the process wasn’t part of the documentation and some post install manual setup was still required to get Google Chrome to use the proxy. This has now been...","categories": [],
        "tags": ["proxy"],
        "url": "/development-environment/proxy/",
        "teaser": null
      },{
        "title": "Improved storage of persisted files",
        "excerpt":"When using a virtual development environment it’s important to be able to rebuild it with the minimum of effort so you can perform software updates or just repair your environment. When rebuilding your environment you want to keep your workspace and certain other user specific files; this enables you to...","categories": [],
        "tags": ["storage"],
        "url": "/development-environment/persistence/",
        "teaser": null
      },{
        "title": "Upgraded to Ubuntu 16.04 LTS",
        "excerpt":"Since Ubuntu 15.10 (Wily Werewolf) is out of support this project has moved to Ubuntu 16.04 LTS (Xenial Xerus). You can find out the highlights of the Ubuntu 16.04 by reviewing the release notes. The biggest change to be aware of is Ubuntu 16.04 has moved to Python 3; if...","categories": [],
        "tags": ["ubuntu"],
        "url": "/development-environment/xenial/",
        "teaser": null
      },{
        "title": "Version 1.0 released",
        "excerpt":"After more than seven months of development, GantSign EnV has matured enough for its first production quality release. From this point it’s recommended users GantSign EnV use tagged releases of this project rather than following development on the master branch. New users can follow the getting started guide to use...","categories": [],
        "tags": ["release"],
        "url": "/development-environment/1.0-release/",
        "teaser": null
      },{
        "title": "Version 1.1 released",
        "excerpt":"Release highlights:      #129: Added support for the Go programming language   #132: Added Kubernetes support   #126: Performance improvements   Fore more details see the features documentation.   For a full list of changes view the release notes.  ","categories": [],
        "tags": ["release"],
        "url": "/development-environment/1.1-release/",
        "teaser": null
      },{
        "title": "Version 1.2 released",
        "excerpt":"Release highlights:      #139: Added Postman HTTP tool   #137: Performance improvements   Fore more details see the features documentation.   For a full list of changes view the release notes.  ","categories": [],
        "tags": ["release"],
        "url": "/development-environment/1.2-release/",
        "teaser": null
      },{
        "title": "Version 1.2.1 released",
        "excerpt":"This is a maintenance release.   Release highlights:      #142: Fixed IntelliJ Ultimate regression   #143: Fixed default audio settings for macOS   For a full list of changes view the release notes.  ","categories": [],
        "tags": ["release"],
        "url": "/development-environment/1.2.1-release/",
        "teaser": null
      },{
        "title": "Version 1.3 released",
        "excerpt":"Release highlights:      #146: Updated Go to 1.7.4   #155: Updated Molecule to 1.16   #156: Added troubleshooting instructions            View Troubleshooting section of Getting Started guide           For a full list of changes view the release notes.  ","categories": [],
        "tags": ["release"],
        "url": "/development-environment/1.3-release/",
        "teaser": null
      },{
        "title": "Node.js support",
        "excerpt":"While Node.js has been bundled with this development environment for the last few months, it hasn’t been a document feature. After successfully using the Node.js support on a couple of projects it’s time to promote it as a documented feature. For details of the Node.js support view the features page....","categories": [],
        "tags": ["nodejs"],
        "url": "/development-environment/nodejs/",
        "teaser": null
      },{
        "title": "Switched to Git-GUI git client",
        "excerpt":"Since GitKraken is no longer free for commercial use](https://www.gitkraken.com/pricing) it’s been replaced in the GantSign development environment. Installed in place of GitKraken are Git-GUI and Gitk; while they’re a lot less pretty, they are more stable, feature complete and are open source. For more details of Git-GUI and Gitk support...","categories": [],
        "tags": ["nodejs"],
        "url": "/development-environment/git-gui/",
        "teaser": null
      },{
        "title": "Version 1.4 released",
        "excerpt":"Release highlights:      #166: Updated Java to 8u121   #172: Made Node.js a documented feature            view features guide           #174: Replaced GitKraken with Git-GUI and Gitk            view features guide           For a full list of changes view the release notes.  ","categories": [],
        "tags": ["release"],
        "url": "/development-environment/1.4-release/",
        "teaser": null
      },{
        "title": "Version 1.5 released",
        "excerpt":"Important: this release contains critical bug fixes and a Go lang version update. Bug fixes The following fixes resolve two bugs that prevented provisioning from completing: #178: Fixed broken Postman download Postman changed their download URL #184: Temporarily disabled EditorConfig extension install for Visual Studio Code The latest version (0.4.0)...","categories": [],
        "tags": ["release"],
        "url": "/development-environment/1.5-release/",
        "teaser": null
      },{
        "title": "Version 1.5.1 released",
        "excerpt":"Release highlights      #186: Restored EditorConfig extension for Visual Studio Code            Version 0.6.0 of the extension installs successfully           Full change list   For a full list of changes view the release notes.  ","categories": [],
        "tags": ["release"],
        "url": "/development-environment/1.5.1-release/",
        "teaser": null
      },{
        "title": "Version 1.5.2 released",
        "excerpt":"Release highlights      #188: Fixed plugin install for IntelliJ 2017.1            Changes in IntelliJ IDEA 2017.1 broke the plugin install script           Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.5.2-release/",
        "teaser": null
      },{
        "title": "Version 1.6.0 released",
        "excerpt":"Release highlights      #190: Added support for JetBrains Go plugin (requires IntelliJ IDEA Ultimate Edition)   #191: Upgraded to Molecule 1.22   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.6.0-release/",
        "teaser": null
      },{
        "title": "Version 1.7.0 released",
        "excerpt":"Release highlights #199: Added git lt alias for showing a tree view of git commits in the console #201: Added git cane alias for amending the current commit without changing the commit message #202: Added npm-check-updates node module to help with keeping NPM dependencies up to date Full change list...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.7.0-release/",
        "teaser": null
      },{
        "title": "Version 1.8.0 released",
        "excerpt":"Release highlights      #204: Added support for installing IntelliJ IDEA license key (see .vagrantuser.example for configuration)   #206: Updated Go lang to 1.8.1   #207: Updated Maven to 3.5.0   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.8.0-release/",
        "teaser": null
      },{
        "title": "Version 1.9.0 released",
        "excerpt":"Release highlights #217: Updated Molecule to 1.24 #214: Critical bug fixes for IntelliJ IDEA plugin support gantsign/ansible-role-intellij-plugins#26: Fixed plugin downloads JetBrains moved the plugins to Amazon S3, which had broken the gantsign.intellij-plugins role gantsign/ansible-role-intellij-plugins#25: Fixed support for plugins distributed as JARs gantsign/ansible-role-intellij-plugins#24: Fixed support for non-JetBrains plugins Full change list...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.9.0-release/",
        "teaser": null
      },{
        "title": "Version 1.10.0 released",
        "excerpt":"Release highlights      #222: Fixed JAR packaged IntelliJ plugins install            See gantsign/ansible-role-intellij-plugins#30   for details.           #224: Updated Java to 8u131   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.10.0-release/",
        "teaser": null
      },{
        "title": "Version 1.11.0 released",
        "excerpt":"Release highlights           #226: Updated Java to 8u141            #233: Updated Go lang to 1.8.3       Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.11.0-release/",
        "teaser": null
      },{
        "title": "Version 1.12.0 released",
        "excerpt":"Release highlights      #237: Updated Java to 8u144   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.12.0-release/",
        "teaser": null
      },{
        "title": "Version 1.13.0 released",
        "excerpt":"Release highlights      #239: Install JDK 9 in addition to JDK 8   #246: Updated Java to 8u151 &amp; 9.0.1   #255: Updated Go lang to 1.9.2   #256: Updated Node.js to version 8   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.13.0-release/",
        "teaser": null
      },{
        "title": "Version 1.13.1 released",
        "excerpt":"Release highlights      #258: Fixed VS Code Python extension install   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.13.1-release/",
        "teaser": null
      },{
        "title": "Version 1.14.0 released",
        "excerpt":"Release highlights      #264: Updated Java to 8u161 &amp; 9.0.4   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.14.0-release/",
        "teaser": null
      },{
        "title": "Version 1.15.0 released",
        "excerpt":"Release highlights   Bug fix     #267: Updated Kubernetes apt key   Enhancements     #268: Replaced Java 9 with Java 10   #271: Added HTTPie HTTP client   #272: Updated Go lang to 1.10.1   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.15.0-release/",
        "teaser": null
      },{
        "title": "Version 1.16.0 released",
        "excerpt":"Release highlights      #286: Updated Maven to 3.5.3   #287: Updated Maven Notifier to 1.10.1   #288: Updated Molecule to 2.12.1            Also contains a workaround for an installation issue under pip 10           Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.16.0-release/",
        "teaser": null
      },{
        "title": "Version 1.17.0 released",
        "excerpt":"Release highlights      #297: Upgraded Java 8 to 8u171   #298: Upgraded Java 10 to 10.0.1   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.17.0-release/",
        "teaser": null
      },{
        "title": "Version 1.18.0 released",
        "excerpt":"Release highlights      #300: Updated ID for VS Code Go extension   #301: Updated Go lang to 1.10.2   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.18.0-release/",
        "teaser": null
      },{
        "title": "Version 1.19.0 released",
        "excerpt":"Release highlights      #307: Fixed locales role install   #308: Updated Go lang to 1.10.3   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.19.0-release/",
        "teaser": null
      },{
        "title": "Version 1.20.0 released",
        "excerpt":"Release highlights      #311: Upgraded Java 8 to 8u181   #312: Upgraded Java 10 to 10.0.2   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.20.0-release/",
        "teaser": null
      },{
        "title": "Version 1.21.0 released",
        "excerpt":"Release highlights      #314: Updated Maven to 3.5.4   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.21.0-release/",
        "teaser": null
      },{
        "title": "Version 1.21.1 released",
        "excerpt":"Release highlights      #350: Fixed gantsign.zram_config role name   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.21.1-release/",
        "teaser": null
      },{
        "title": "Version 1.22.0 released",
        "excerpt":"Release highlights      #358: Updated Molecule to 2.17.0   #355: Fixed Postman icon (the location had changed)   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.22.0-release/",
        "teaser": null
      },{
        "title": "Version 1.23.0 released",
        "excerpt":"Release highlights      #368: Updated Go lang to 1.11   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.23.0-release/",
        "teaser": null
      },{
        "title": "Version 1.24.0 released",
        "excerpt":"Release highlights      #377: Fixed franklinkim.environment role not found (it has moved to weareinteractive.environment)   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.24.0-release/",
        "teaser": null
      },{
        "title": "Version 1.25.0 released",
        "excerpt":"Release highlights      #440: Fixed timezone customization   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.25.0-release/",
        "teaser": null
      },{
        "title": "Version 1.26.0 released",
        "excerpt":"Release highlights      #451: Replaced Java 10 with Java 11   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.26.0-release/",
        "teaser": null
      },{
        "title": "Version 1.27.0 released",
        "excerpt":"Release highlights      #463: Updated Go lang to 1.11.1   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.27.0-release/",
        "teaser": null
      },{
        "title": "Version 2.0.0 released",
        "excerpt":"Release highlights Upgraded to Ubuntu Bionic Beaver Ubuntu Bionic Beaver is the latest LTS release of Ubuntu. The first thing you’ll likely notice is the Gnome desktop has replaced Unity as the standard Ubuntu desktop. We’ve also dropped the option of using the Xfce desktop for your development environment. While...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.0.0-release/",
        "teaser": null
      },{
        "title": "Version 1.28.0 released",
        "excerpt":"Release highlights      #493: Upgraded Java 8 to 8u192   Full change list   For a full list of changes view the release notes.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/1.28.0-release/",
        "teaser": null
      },{
        "title": "Version 2.1.0 released",
        "excerpt":"Release highlights      #493: Upgraded Java 8 to 8u192   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.1.0-release/",
        "teaser": null
      },{
        "title": "Version 2.1.1 released",
        "excerpt":"Release highlights      #496: Fixed Visual Studio Code favourite   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.1.1-release/",
        "teaser": null
      },{
        "title": "Version 2.2.0 released",
        "excerpt":"Release highlights      #500: Updated Maven to 3.6.0   #501: Updated Go lang to 1.11.2   #502: Updated Java 11 to 11.0.1   #509: Added task to upgrade apt packages   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.2.0-release/",
        "teaser": null
      },{
        "title": "Version 2.3.0 released",
        "excerpt":"Release highlights #511: Updated bat to 0.9.0 #512: Updated fd to 7.2.0 #513: Updated Helm to 2.12.0 #514: Updated Hub to 2.6.0 #515: Updated Kompose to 1.17.0 #516: Updated SDKMAN to 1.1.1 #517: Updated Minikube to 0.31.0 #519: Updated Go lang to 1.11.4 #520: Updated weareinteractive.git role to 1.3.0 Full...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.3.0-release/",
        "teaser": null
      },{
        "title": "Version 2.4.0 released",
        "excerpt":"Release highlights      #522: Updated Java 8 to 8u202   #526: Updated Helm to 2.12.2   #527: Updated Hub to 2.7.1   #528: Updated kops to 1.11.0   #529: Updated Minikube to 0.33.1   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.4.0-release/",
        "teaser": null
      },{
        "title": "Version 2.5.0 released",
        "excerpt":"Release highlights #537: Updated gantsign.visual-studio-code role to 6.2.1 (fixes extension install) #538: Updated gantsign.visual-studio-code-extensions role to 2.1.1 (fixes extension install) #531: Updated Java 11 to 11.0.2 #535: Updated Go lang to 1.11.5 Full change list For a full list of changes view the release notes. Upgrade procedure To upgrade follow...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.5.0-release/",
        "teaser": null
      },{
        "title": "Version 2.6.0 released",
        "excerpt":"Release highlights #543: Updated Node.js to version 10 #544: Updated Go lang to 1.12.1 #545: Updated Helm to 2.13.0 #546: Updated Hub to 2.10.0 #547: Updated Kompose to 1.18.0 #548: Updated kops to 1.11.1 #549: Updated Minikube to 0.35.0 Full change list For a full list of changes view the...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.6.0-release/",
        "teaser": null
      },{
        "title": "Version 2.7.0 released",
        "excerpt":"Release highlights #551: Moved to AdoptOpenJDK for Java 8 #552: Updated Java 8 to 8u212 #553: Updated Java 11 to 11.0.3 #555: Updated Go lang to 1.12.2 #556: Updated Helm to 2.13.1 #557: Updated Hub to 2.11.2 #558: Updated Maven to 3.6.1 Full change list For a full list of...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.7.0-release/",
        "teaser": null
      },{
        "title": "Version 2.8.0 released",
        "excerpt":"Release highlights      #560: Updated Go lang to 1.12.4   #561: Updated Minikube to 1.0.1   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.8.0-release/",
        "teaser": null
      },{
        "title": "Version 2.9.0 released",
        "excerpt":"Release highlights      #563: Updated bat to 0.11.0   #565: Updated Go lang to 1.12.5   #566: Updated Helm to 2.14.0   #567: Updated kops to 1.12.1   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.9.0-release/",
        "teaser": null
      },{
        "title": "Version 2.10.0 released",
        "excerpt":"Release highlights      #569: Fixed provisioning error for new users   #570: Updated Minikube to 1.1.0   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.10.0-release/",
        "teaser": null
      },{
        "title": "Version 2.11.0 released",
        "excerpt":"Release highlights      #576: Updated Helm to 2.14.1   #577: Updated Minikube to 1.1.1   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.11.0-release/",
        "teaser": null
      },{
        "title": "Version 2.12.0 released",
        "excerpt":"Release highlights #579: Made persistent storage location configurable #584: Updated Go lang to 1.12.7 #586: Updated Hub to 2.12.3 #589: Updated Maven Notifier to 2.1.0 #590: Updated Minikube to 1.2.0 #591: Added tag for skipping Maven Notifier install #592: Updated ctop to 0.7.2 #593: Updated Helm to 2.14.3 #596: Updated...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.12.0-release/",
        "teaser": null
      },{
        "title": "Version 2.13.0 released",
        "excerpt":"Release highlights      #599: Updated Minikube to 1.3.0   #600: Fixed compatibility with vagrant-proxyconf   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.13.0-release/",
        "teaser": null
      },{
        "title": "Version 2.14.0 released",
        "excerpt":"Release highlights #603: Unpinned bat version #604: Unpinned ctop version #605: Unpinned fd version #606: Unpinned Git credential manager version #607: Unpinned Helm version #608: Unpinned hub version #609: Unpinned kompose version #610: Unpinned kops version #611: Unpinned Minikube version #613: Updated Go lang to 1.12.9 Full change list For...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.14.0-release/",
        "teaser": null
      },{
        "title": "Version 2.15.0 released",
        "excerpt":"Release highlights #623: Added Swapspace dynamic swap manager #624: Replaced zram with Zswap This fixes the issue of the VM freezing when low on RAM. #625: Updated Go lang to 1.13.1 #626: Updated Java 8 to 8u222 #627: Updated Java 11 to 11.0.4 #628: Updated Maven to 3.6.2 #631: Added...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.15.0-release/",
        "teaser": null
      },{
        "title": "Version 2.16.0 released",
        "excerpt":"Release highlights #636: Added lazygit a simple terminal UI for Git commands #637: Updated Go lang to 1.13.5 #638: Updated Java 8 to 8u232 #639: Updated Java 11 to 11.0.5 #640: Updated Maven to 3.6.3 Full change list For a full list of changes view the release notes. Upgrade procedure...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.16.0-release/",
        "teaser": null
      },{
        "title": "Version 2.17.0 released",
        "excerpt":"Release highlights      #643: Updated Node.js to version 12   #645: Added Grazi grammar checker for IntelliJ   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.17.0-release/",
        "teaser": null
      },{
        "title": "Version 2.17.1 released",
        "excerpt":"Release highlights      #648: Fixed install of IntelliJ plugins   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.17.1-release/",
        "teaser": null
      },{
        "title": "Version 2.18.0 released",
        "excerpt":"Release highlights #650: Added colored-man-pages Zsh plugin #651: Added dive tool for Docker #652: Added Save Actions plugin to feature documentation #653: Added Grazie plugin to feature documentation #654: Added Maven Helper plugin for IntelliJ #655: Updated geerlingguy.nodejs role to 5.1.0 #656: Updated Go lang to 1.13.6 #657: Updated Java...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.18.0-release/",
        "teaser": null
      },{
        "title": "Version 2.19.0 released",
        "excerpt":"Release highlights      #667: Added Concise AssertJ Optimizing Nitpicker plugin for IntelliJ   #668: Added PlantUML plugin for IntelliJ   #669: Updated Go lang to 1.14   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.19.0-release/",
        "teaser": null
      },{
        "title": "Version 2.19.1 released",
        "excerpt":"Release highlights      Fix for IntelliJ IDEA 2020.1 (directory layout has changed)            #671: Updated gantsign.intellij_jdks role to 2.0.0       #672: Updated gantsign.intellij-plugins role to 3.0.0           Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.19.1-release/",
        "teaser": null
      },{
        "title": "Version 2.20.0 released",
        "excerpt":"Release highlights #677: Updated Go lang to 1.14.2 #678: Updated Java 8 to 8u252 #679: Updated Java 11 to 11.0.7 #682: Add git lb alias to view recent branches Full change list For a full list of changes view the release notes. Upgrade procedure To upgrade follow the upgrade documentation....","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.20.0-release/",
        "teaser": null
      },{
        "title": "Version 2.21.0 released",
        "excerpt":"Release highlights      #689: Updated Java 8 to 8u262   #690: Updated Java 11 to 11.0.8   #691: Updated SDKMAN to 5.8.5   #692: Updated Go lang to 1.14.6   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.21.0-release/",
        "teaser": null
      },{
        "title": "Version 2.22.0 released",
        "excerpt":"Release highlights #709: Updated Go lang to 1.16.3 #712: Updated Java 8 to 8.0.282 #713: Updated Java 11 to 11.0.10 #714: Updated Maven to 3.8.1 #715: Updated Node.js to version 14 #717: Added neofetch #718: Added emoji font Full change list For a full list of changes view the release...","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.22.0-release/",
        "teaser": null
      },{
        "title": "Version 2.23.0 released",
        "excerpt":"Release highlights      #727: Updated Java 8 to 8.0.292   #728: Updated Java 11 to 11.0.11   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.23.0-release/",
        "teaser": null
      },{
        "title": "Version 2.24.0 released",
        "excerpt":"Release highlights      #759: Updated Go lang to 1.17.3   #760: Updated Java 8 to 8u312   #761: Updated Java 11 to 11.0.13   #762: Updated Maven to 3.8.4   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.24.0-release/",
        "teaser": null
      },{
        "title": "Version 2.25.0 released",
        "excerpt":"Release highlights      #767: Updated Go lang to 1.17.5   #769: Migrated to the new .NET based Git Credential Manager   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.25.0-release/",
        "teaser": null
      },{
        "title": "Version 2.26.0 released",
        "excerpt":"Release highlights      #772: Replaced zdharma/fast-syntax-highlighting   #776: Updated Go lang to 1.17.6   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.26.0-release/",
        "teaser": null
      },{
        "title": "Version 2.27.0 released",
        "excerpt":"Release highlights      #795: Upgraded to Ubuntu Focal   #798: Added JetBrainsMono Nerd Font   #799: Updated Node.js to version 16   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.27.0-release/",
        "teaser": null
      },{
        "title": "Version 2.28.0 released",
        "excerpt":"Release highlights      #807: Updated Java 8 to 8u322   #808: Updated Java 11 to 11.0.14   #813: Updated Go lang to 1.18.1   Full change list   For a full list of changes view the release notes.   Upgrade procedure   To upgrade follow the upgrade documentation.  ","categories": ["news"],
        "tags": ["release"],
        "url": "/development-environment/news/2.28.0-release/",
        "teaser": null
      },]
