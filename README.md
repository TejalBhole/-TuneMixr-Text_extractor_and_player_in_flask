# Text_extractor_and_player

First we need to install the voice For Indian Language 

This is a built-in feature in Windows that offers a range of Indian language voice packages, including Hindi, Bengali, Tamil, Telugu, and more. To use it, you can go to Settings > Time & Language > Speech > Manage voices, and then download the language pack you need.

After that: we need to change the registary settings:

1. Press the Windows key + R to open the Run dialog box.

2. Type "regedit" in the Run dialog box and press Enter to open the Registry Editor.

3. In the Registry Editor, navigate to the following key:
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech_OneCore\Voices\Tokens\TTS_MS_EN-IN_KALPANA_11.0

4. Right-click on the TTS_MS_EN-IN_KALPANA_11.0 key and select "Export".

5. Choose a location to save the exported file and give it a name.

6. Open the exported file in a text editor like Notepad.

7. Find the line that reads "VoicePath" and change the value from "MSTTS_V110_enIN_KalpanaM" to "MSTTS_V110_enIN_SamiraM".

8. Save the file and close the text editor.

9. Double-click on the exported file to import the changes to the registry.

10. Close the Registry Editor.

Check out the following link for more detail: https://puneet166.medium.com/how-to-added-more-speakers-and-voices-in-pyttsx3-offline-text-to-speech-812c83d14c13

How to add voice to the registary: https://youtu.be/KMtLqPi2wiU 

Modules required are:
1. pip install pyttsx3
2. pip install flask 

run app.py 
