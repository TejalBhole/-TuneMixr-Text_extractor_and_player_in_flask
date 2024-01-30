from flask import Flask, render_template, request
import pyttsx3

app = Flask(__name__)
engine = pyttsx3.init()
voice = engine.getProperty('voices') 
engine.setProperty('voice', voice[2].id)
rate = engine.getProperty('rate')
engine.setProperty('rate', 150)



@app.route("/")
def home():
    return render_template("index.html")
    

@app.route("/play")
def play():
    text = request.args.get("text")
    if text:
        
        engine.say(text)
        engine.startLoop(False)
        engine.iterate()
        engine.endLoop()
        return "Played successfully!"
    else:
        return "No text input found."

if __name__ == "__main__":
    app.run(debug=True)
