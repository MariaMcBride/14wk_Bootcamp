from flask import Flask, render_template, redirect, session

app = Flask(__name__)    
app.secret_key = "full_counter"

@app.route('/')          
def index():
    if 'visits' not in session:
        session['visits'] = 0
    else:
        session['visits'] += 1
    return render_template("index.html")

@app.route('/add_two/')
def plus_two():
    session['visits'] += 2
    return render_template("index.html")

@app.route('/destroy_session/')
def clear_session():
    session.clear()
    return redirect('/')

if __name__=="__main__":    
    app.run(debug=True)
    