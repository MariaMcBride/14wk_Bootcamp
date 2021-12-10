from flask_app import app
from flask import render_template, redirect, request
from flask_app.models import dojo, ninja

@app.route('/ninjas') # create new
def add_ninja():
    return render_template("add_ninja.html", dojos = dojo.Dojo.get_all())

@app.post('/ninjas/create') # create post 
def create():    
    ninja.Ninja.save(request.form)
    return redirect(f'/dojos/{request.form["dojo_id"]}')