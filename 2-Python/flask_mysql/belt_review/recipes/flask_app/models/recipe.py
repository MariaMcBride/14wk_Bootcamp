import flask_app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DB
from flask_app.models.user import User

class Recipe:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.description = data['description']
        self.instructions = data['instructions']
        self.date_made = data['date_made']
        self._under_30 = data['under_30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.users = []

    @property
    def under_30(self):
        return "Yes" if self._under_30 else "No"
    
    @property
    def creator(self):
        return User.get_by_id(id=self.user_id)

# ---------- CRUD ----------

    @classmethod # CREATE
    def add_recipe(cls, data):
        query = """INSERT INTO recipes 
        ( name, description, instructions, date_made, under_30, user_id ) 
        VALUES ( %(name)s, %(description)s, %(instructions)s, %(date_made)s, %(under_30)s, %(user_id)s );"""
        return connectToMySQL(DB).query_db(query, data)

    @classmethod # READ ALL
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results =  connectToMySQL(DB).query_db(query)
        all_recipes = []
        for recipe in results:
            all_recipes.append( cls(recipe) )
        return all_recipes
        # return [cls(recipe) for recipe in results] - shorter way but won't work with associations
    
    @classmethod # READ ONE
    def get_one(cls, **data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        result = connectToMySQL(DB).query_db(query, data)
        return cls( result[0] )

    @classmethod # UPDATE
    def update_recipe(cls, **data):
        query = "UPDATE recipes SET name = %(name)s, description = %(description)s, instructions = %(instructions)s, date_made = %(date_made)s, under_30 = %(under_30)s, updated_at = NOW() WHERE id = %(id)s;"
        result = connectToMySQL(DB).query_db(query, data)
        return result
    
    @classmethod # DELETE
    def delete_recipe(cls, **data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"
        result = connectToMySQL(DB).query_db(query, data)
        return result

# ---------- VALIDATION ----------

    @staticmethod
    def validate_recipe(data):
        is_valid = True
        if len(data['name']) < 3:
            flash('Name must be at least 3 characters long', 'recipe')
            is_valid = False
        if len(data['instructions']) < 3:
            flash('Instructions must be at least 3 characters long', 'recipe')
            is_valid = False
        if len(data['description']) < 3:
            flash('Description must be at least 3 characters long', 'recipe')
            is_valid = False
        if data['date_made'] == ' ':
            flash('Please enter a date', 'recipe')
            is_valid = False
        return is_valid