from flask import Flask, render_template, url_for

app = Flask(__name__)    

@app.route('/')
def home():
    return render_template("index.html", x = 8, y = 8)

@app.route('/<int:x>/')
def rows(x):
    return render_template("index.html", x = x, y = 8)

@app.route('/<int:x>/<int:y>/')
def columns(x, y):
    return render_template("index.html", x = x, y = y)

@app.errorhandler(404)
def error_msg(error):
    return f"Page not found."

if __name__=="__main__":    
    app.run(debug=True)