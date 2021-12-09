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

@app.route('/user/create', methods=['POST', 'GET'])
def create_new():
    if request.method == 'POST':
        print(request.form)
        User.add(request.form)
        return redirect('/users')

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

@app.route('/user/update', methods=['POST'])
def update():
    User.update(request.form)
    return redirect('/users')

@app.route('/user/delete/<int:id>')
def delete(id):
    data = {
        "id":id
    }
    User.delete(data)
    return redirect('/users')

@app.errorhandler(404)
def page_not_found(error):
    return f"Page Not Found", 404