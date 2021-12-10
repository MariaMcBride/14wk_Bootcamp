from flask_app.config.mysqlconnection import connectToMySQL
from .ninja import Ninja

DB = 'dojos_and_ninjas_schema'

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = []

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL(DB).query_db(query)
        dojos = []
        for dojo in results:
            dojos.append(cls(dojo))
        return dojos
    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO dojos ( name ) VALUES ( %(name)s );"
        result = connectToMySQL(DB).query_db(query, data)
        return result

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas on dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        result = connectToMySQL(DB).query_db(query, data)
        dojo = cls(result[0])
        for db_row in result:
            ninja_data = {
                "id": db_row['ninjas.id'],
                "first_name": db_row['ninjas.first_name'],
                "last_name": db_row['ninjas.last_name'],
                "age": db_row['ninjas.age'],
                "created_at": db_row['ninjas.created_at'],
                "updated_at": db_row['ninjas.updated_at'],
            }
            dojo.ninjas.append(Ninja(ninja_data))
        return dojo