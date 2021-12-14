from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DB, bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @property
    def full_name(self):
        return f'{self.first_name} {self.last_name}'

# ---------- CRUD ----------

    @classmethod # CREATE
    def create_user(cls, data):
        query = """INSERT into register ( first_name, last_name, email, password ) 
        VALUES ( %(first_name)s, %(last_name)s, %(email)s, %(password)s );"""
        data = {
            **data,
            'password': bcrypt.generate_password_hash(data['password'])
        }
        user_id = connectToMySQL(DB).query_db(query, data)
        return user_id

    @classmethod # READ ONE
    def get_by_id(cls, **data):
        query = "SELECT * FROM register WHERE id = %(id)s;"
        result = connectToMySQL(DB).query_db(query, data)
        return cls( result[0] )

# ---------- VALIDATATIONS ----------

    @staticmethod # REGISTRATION
    def validate_user(data):
        is_valid = True
        if len(data['first_name']) < 2:
            flash('First name must be at least 2 characters.', 'register')
            is_valid = False
        elif not data['first_name'].isalpha():
            flash('First name must contain only letters.', 'register')
            is_valid = False
        if len(data['last_name']) < 2:
            flash('Last name must be at least 2 characters.', 'register')
            is_valid = False
        elif not data['last_name'].isalpha():
            flash('Last name must contain only letters.', 'register')
            is_valid = False
        query = "SELECT * FROM register WHERE email = %(email)s;"
        result = connectToMySQL(DB).query_db(query, data)
        if result:
            flash('Email is already in use. Please log in.', 'register')
            is_valid = False
        if not EMAIL_REGEX.match(data['email']):
            flash('Invalid email address.', 'register')
            is_valid = False
        if len(data['password']) < 8:
            flash('Password must be at least 8 characters.', 'register')
            is_valid = False
        if data['password'] != data['confirm_password']:
            flash('Passwords do not match.', 'register')
            is_valid = False        
        return is_valid

    @staticmethod # LOGIN
    def validate_login(data):
        if not EMAIL_REGEX.match(data['email']):
            flash('Invalid Email/Password', 'login')
            return False
        if len(data['password']) < 8:
            flash('Invalid Email/Password', 'login')
            return False
        query = "SELECT * FROM register WHERE email = %(email)s;"
        result = connectToMySQL(DB).query_db(query, data)
        if not result:
            flash('Invalid Email/Password', 'login')
            return False        
        user_in_db = User( result[0] )
        if not bcrypt.check_password_hash(user_in_db.password, data['password']):
            flash('Invalid Email/Password', 'login')
            return False
        return user_in_db
