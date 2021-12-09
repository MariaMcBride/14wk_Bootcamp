from flask_app import app
from flask import render_template, redirect, request
from flask_app.models.user import User

@app.route('/')          
def index():
    return redirect('/users')

@app.route('/users')
def users():
    return render_template("all_users.html", users = User.get_all())

@app.route('/user/new')
def new_user():
    return render_template("create_new_user.html")

@app.post('/user/create')
def create_new():
    user_id = User.add(request.form)
    return redirect(f'/user/show/{user_id}')

@app.route('/user/show/<int:id>')
def show(id):
    data = {
        "id":id
    }
    return render_template("show_user.html", user = User.get_id(data))

@app.route('/user/edit/<int:id>')
def edit(id):
    data = {
        "id":id
    }
    return render_template("edit_user.html", user = User.get_id(data))

@app.post('/user/update/<int:id>')
def update(id):
    data = {
        **request.form,
        "id":id
    }
    User.update(data)
    return redirect(f'/user/show/{id}')

@app.route('/user/delete/<int:id>')
def delete(id):
    User.delete(id = id) 
    return redirect('/users')

@app.errorhandler(404)
def page_not_found(error):
    return f"Page Not Found", 404