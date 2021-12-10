from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.dojo import Dojo


@app.route('/') # base route          
def index():
    return redirect('/dojos')

@app.route('/dojos') # main page - show all
def dojos():
    return render_template("dojos.html", dojos = Dojo.get_all())

@app.post('/dojos/add') # add dojo
def new_dojo():
    Dojo.save(request.form)
    return redirect('/dojos')

@app.route('/dojos/<int:id>') # show selected dojo
def show_dojo(id):
    data = {
        "id":id
    }
    return render_template("show_dojo.html", dojo = Dojo.get_one(data))