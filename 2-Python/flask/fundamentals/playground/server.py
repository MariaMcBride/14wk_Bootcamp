from logging import debug
from flask import Flask, app, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/play/')
@app.route('/play/<int:num>/')
@app.route('/play/<int:num>/<string:color>/')
def playbox(num = 3, color = "lightblue"):
    return render_template("index.html", num = num, color = color)
  

if __name__=="__main__":
    app.run(debug=True)