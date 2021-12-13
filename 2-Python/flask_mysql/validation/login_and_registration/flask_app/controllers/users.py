from flask_app import app, session
from flask import render_template, redirect, request, flash
from flask_app.models.user import User


@app.route('/')
def index():
    return render_template("index.html")

@app.post('/register')
def create_user():
    if not User.validate_user(request.form):
        return redirect('/')
    user_id = User.create_user(request.form)
    session['user_id'] = user_id  
    return redirect('/dashboard')

@app.post('/login')
def login():
    user_status = User.validate_login(request.form)
    if not user_status:
        return redirect('/')
    session['user_id'] = user_status.id
    return redirect('/dashboard')

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect('/logout')
    data ={
        'id': session['user_id']
    }
    return render_template("dashboard.html", user = User.get_one(data))

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')