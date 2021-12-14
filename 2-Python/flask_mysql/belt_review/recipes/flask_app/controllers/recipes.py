from flask_app import app, session
from flask import render_template, redirect, request
from flask_app.models.recipe import Recipe
from flask_app.models.user import User

@app.route('/recipes/new')
def new_recipe():
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":session['user_id']
    }
    return render_template('new_recipe.html', user = User.get_by_id(data))

@app.post('/recipes/create')
def create_recipe():
    if 'user_id' not in session:
        return redirect('/logout')
    if not Recipe.validate_recipe(request.form):
        return redirect('/recipe/new')
    data = {
        **request.form,
        "user_id": session['user_id']
    }
    Recipe.add_recipe(data)
    return redirect('/dashboard')

@app.route('/recipes/<int:id>')
def view_recipe(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":session['user_id']
    }
    return render_template("view_recipe.html", user = User.get_by_id(data), recipe = Recipe.get_one(id=id))

@app.route('/recipes/edit/<int:id>')
def edit_recipe(id):
    if 'user_id' not in session:
        return redirect('/logout')
    data = {
        "id":session['user_id']
    }
    return render_template("edit_recipe.html", user = User.get_by_id(data), recipe = Recipe.get_one(id=id))

@app.post('/recipes/update/<int:id>')
def update_recipe(id):
    if 'user_id' not in session:
        return redirect('/logout')
    if not Recipe.validate_recipe(request.form):
        return redirect(f'/recipes/edit/{id}')
    Recipe.update_recipe(**request.form, id=id)
    return redirect('/dashboard')

@app.route('/recipes/delete/<int:id>')
def delete_recipe(id):
    if 'user_id' not in session:
        return redirect('/logout')
    Recipe.delete_recipe(id=id)
    return redirect('/dashboard')
