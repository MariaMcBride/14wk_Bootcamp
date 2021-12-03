from flask import Flask
app = Flask(__name__)    

@app.route('/')          
def hello_world():
    return "Hello World!"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<name>')
def say_name(name):
    return f"Hi {name.capitalize()}!"

@app.route('/repeat/<int:number>/<string:word>')
def repeat_word(number, word):
    return f"{number * word}"

@app.errorhandler(404)
def error_msg(error):
    return f"Sorry! No response. Try again."

if __name__=="__main__":    
    app.run(debug=True)