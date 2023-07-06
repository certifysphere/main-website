---
sidebar_position: 1
id: install-java-development-tools
title: Install Java Development Tools
tags:
  - development tools
  - Maven
  - Java
  - Git
  - VS Code
---

## Setting up the Development Environment
To set up your development environment for the workshop, you will need to install several tools. The following instructions provide details on how to install these tools on different operating systems.

### Java 11 (JDK) Installation
1. **Windows and Linux**:
   - Follow the instructions to download Java 11 from the Oracle website: [Java SE 11 Archive Downloads](https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html)
   - Select the appropriate installer for your operating system and architecture.
   - Run the installer and follow the on-screen instructions to complete the installation.

2. **macOS**:
   - Install Java 11 using Homebrew by opening a terminal and running the following command:
     ```
     brew install openjdk@11
     ```

### Visual Studio Code (VS Code) Installation
1. **Windows**:
   - Download the Visual Studio Code installer for Windows from the official website: [Download Visual Studio Code](https://code.visualstudio.com/Download)
   - Run the installer and follow the on-screen instructions to complete the installation.

2. **Linux**:
   - Download the Visual Studio Code package for Linux from the official website: [Download Visual Studio Code](https://code.visualstudio.com/Download)
   - Follow the instructions specific to your Linux distribution to install the package.

3. **macOS**:
   - Download the Visual Studio Code for macOS from the official website: [Download Visual Studio Code](https://code.visualstudio.com/Download)
   - Open the downloaded DMG file and drag the Visual Studio Code application to the Applications folder to install it.

### IntelliJ IDEA Community Edition Installation
1. **Windows**:
   - Download the IntelliJ IDEA Community Edition installer for Windows from the official website: [Download IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/download)
   - Run the installer and follow the on-screen instructions to complete the installation.

2. **Linux**:
   - Download the IntelliJ IDEA Community Edition package for Linux from the official website: [Download IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/download)
   - Follow the instructions specific to your Linux distribution to install the package.

3. **macOS**:
   - Download the IntelliJ IDEA Community Edition for macOS from the official website: [Download IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/download)
   - Open the downloaded DMG file and drag the IntelliJ IDEA application to the Applications folder to install it.

### Apache Maven Installation
1. **Windows**:
   - Download the latest Apache Maven binary zip archive from the official website: [Download Apache Maven](https://maven.apache.org/download.cgi)
   - Extract the contents of the zip archive to a directory of your choice.
   - Add the bin directory of the extracted Maven folder to your system's PATH environment variable.

2. **Linux**:
   - Follow the instructions provided by your Linux distribution to install Apache Maven using the package manager.

3. **macOS**:
   - Install Apache Maven using Homebrew by opening a terminal and running the following command:
     ```
     brew install maven
     ```

### Git Installation
1. **Windows**:
   - Download the Git installer for Windows from the official website: [Download Git](https://git-scm.com/download/win)
   - Run the installer and follow the on-screen instructions to complete the installation.

2. **Linux**:
   - Follow the instructions specific to your Linux distribution to install Git using the package manager.

3. **macOS**:
   - Install Git using Homebrew by opening a terminal and running the following command:
     ```
     brew install git
     ```

## Validation
Once you have installed Git, Java, and Maven, you can validate the installation by following these steps:

### Git Validation:
1. Open a command prompt or terminal window.
2. Run the following command to check if Git is installed:
   ```
   git --version
   ```
   It should display the installed version of Git if it is installed correctly.

### Java Validation:
1. Open a command prompt or terminal window.
2. Run the following command to check if Java is installed:
   ```
   java -version
   ```
   It should display the installed version of Java if it is installed correctly.

### Maven Validation:
1. Open a command prompt or terminal window.
2. Run the following command to check if Maven is installed:
   ```
   mvn --version
   ```
   It should display the installed version of Maven if it is installed correctly.

By following these steps, you can verify that Git, Java, and Maven are installed and configured properly on your system. If any of the tools are not recognized or the versions are not displayed, you may need to revisit the installation steps and ensure that they are correctly set up and added to your system's PATH environment variable.