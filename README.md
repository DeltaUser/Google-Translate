# Google-Translate
A way to edit google translate using javascript.

# Table Of Sections
[Information](https://github.com/DeltaUser/Google-Translate/blob/master/README.md#information)

[1. Adding](https://github.com/DeltaUser/Google-Translate/blob/master/README.md#1-adding)
 * [1.2 *Chrome Console*](https://github.com/DeltaUser/Google-Translate/blob/master/README.md#12-chrome-console)
 * [1.3 *Chrome Extension*](https://github.com/DeltaUser/Google-Translate/blob/master/README.md#13-chrome-extension)
 
[2. Using](https://github.com/DeltaUser/Google-Translate/blob/master/README.md#2-using)
 
[3. Audio Buttons](https://github.com/DeltaUser/Google-Translate/blob/master/README.md#3-audio-buttons)


# Information
The [built in menu](https://github.com/DeltaUser/Google-Translate/blob/master/README.md#2-using) has a timeout, for default the ms is 300, this is to wait untill a google part of the page loads, the menu uses the *Feedback* button to have something to build off, this means the script uses the feedback menu to change everything to fit in the translate menu, but the feedback menu takes some milliseconds to load all the elements, that is where the timeout plays, if the timeout ms is to short, it'll cause errors since some of the elements are loaded, and some of the elements are needed to create the translate menu, you can change the milliseconds in your console by pressing *Ctrl + Shift + I* and clicking on the *Console* tab, then type in ``settings.ms = milliseconds``, once done it'll change it and use it next time you press the *Edit Translate* button.

(Short Summary)

The *Edit Translate* button has to wait some milliseconds to wait for the elements to be loaded.

The translate menu is made/built out of the *Feedback* menu.

You can change the milliseconds by doing this in the console tab.
```js
settings.ms = milliseconds;
```
 
## 1. Adding

Pick one of these ways to add this.

## 1.2 Chrome Console
To use this, **search up translate on google**, once done press **CTRL + SHIFT + I**, there will be a section opened, click on the console tab and paste in [this code without any other text](*https://raw.githubusercontent.com/DeltaUser/Google-Translate/master/index.js).

#### To know that you have added it, a little window will say something of the lines of 'You can now press Shift = to start the translate!', make sure you have added it.

## 1.3 Chrome Extension
*NOTE: This is for windows, may differ if you have a different operating system.  

First you need to install the extension folder, [click here](https://github.com/DeltaUser/Google-Translate/archive/master.zip) or just click on the download button at the [repo](https://github.com/DeltaUser/Google-Translate).

Unzip this file, grab the extension folder and drag it somewhere you'll remember.

Now back to chrome, click on the three dots button, click on *More Tools* then onto the *Extensions* button.

Click on *Load unpacked* and find the folder *extension* that you saved, after clicking on it, press *Select Folder*, once done you have added it!

After click on the extensions button and on the *Google Translate Menu*, by then you'll be loading into the translate page and the script will be already loaded!

### I don't have five dollars laying around so I can't publish it, sorry.

## 2. Using
To access the menu click on *Edit Translate* right under the translate bar.
This should pop up.
![](https://raw.githubusercontent.com/DeltaUser/Google-Translate/master/images/builtinmenu.png)
### Once done you can change values and save it for the next time you press *Shift + =*!

## 3. Audio Buttons
You can easily change the audio buttons by opening the [menu](https://github.com/DeltaUser/Google-Translate/blob/master/README.md#2-using).
The buttons will look like this.
![](https://raw.githubusercontent.com/DeltaUser/Google-Translate/master/images/audiobuttons.png)


Just click on one of the sections you want to change the audio to show this menu.
![](https://raw.githubusercontent.com/DeltaUser/Google-Translate/master/images/audioeditor.png)


Now just click on one of the buttons or fields, click the *Save* button to save your audio settings.