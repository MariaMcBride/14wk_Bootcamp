from flask import Flask, render_template
app = Flask(__name__)    

@app.route('/')
def render_list():
    users = [
        {'first_name' : 'Princess', 'last_name' : 'Bubblegum'},
        {'first_name' : 'Peppermint', 'last_name' : 'Butler'},
        {'first_name' : 'Lumpy', 'last_name' : 'Space Princess'},
        {'first_name' : 'Huntress', 'last_name' : 'Wizard'}
]
    return render_template("lists.html", users = users)

@app.errorhandler(404)
def error_msg(error):
    return f"Page not found."

if __name__=="__main__":    
    app.run(debug=True)