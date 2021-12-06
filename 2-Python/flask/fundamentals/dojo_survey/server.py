from flask import Flask, render_template, request, redirect, session
from datetime import timedelta

app = Flask(__name__)    
app.secret_key = "dojo_survey_52137"
app.permanent_session_lifetime = timedelta(minutes=10)

@app.route('/')          
def index():
    return render_template("index.html")

@app.route('/process', methods=['GET', 'POST'])
def submit_form():
    if request.method == 'POST':
        session.permanent = True   
        name = request.form['name']    
        session['name'] = name
        location = request.form['location']
        session['location'] = location
        language = request.form['language']
        session['language'] = language
        comment = request.form['textarea']
        session['comment'] = comment
        
        # session['location'] = request.form['location']
        # session['language'] = request.form['language']
        # session['comment'] = request.form['textarea'] 
    return redirect('/result')

@app.route('/result')
def result():    
    return render_template("result.html")

@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404

if __name__=="__main__":    
    app.run(debug=True)