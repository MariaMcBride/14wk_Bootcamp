from flask import Flask, render_template, request, redirect
from user import User

app = Flask(__name__)    
app.secret_key = "worcesterschire"

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
    User.delete(id = id) # if you pass in this variable with the value, instead of having a dictionary called data, you can use ** in front of the data parameter in classmethod
    return redirect('/users')

@app.errorhandler(404)
def page_not_found(error):
    return f"Page Not Found", 404

if __name__=="__main__":    
    app.run(debug=True)