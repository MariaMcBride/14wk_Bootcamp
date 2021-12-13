from flask import Flask, session
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.secret_key = "worcestershire"

bcrypt = Bcrypt(app)

DB = "login_registration_schema"