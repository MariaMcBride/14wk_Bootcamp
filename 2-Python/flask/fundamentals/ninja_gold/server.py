from flask import Flask, render_template, redirect, session, request
from random import randint

app = Flask(__name__)
app.secret_key = "peppermintbutler"

buildings = {
    "Farm" : (10,20), 
    "Cave" : (5,10), 
    "House" : (2,5), 
    "Casino" : (-50,50)
    }

@app.route('/')
def index():
    if 'gold_count' not in session:
        session['gold_count'] = 0
        session['activities'] = []
    return render_template("index.html", buildings=buildings)

@app.route('/process_money', methods=['POST'])
def process_gold():    
    if 'total_gold' not in session:
        session['total_gold'] =0
    earned = randint(*buildings[request.form["building"]])
    session["gold_count"] += earned
    session['activities'].append(f'Earned { earned } golds from the { request.form["building"] }!')
    
    # if request.form['building'] == "farm":
    #     session['gold_count'] += randint(10, 20)
    #     session['total_gold'] += 'gold_count'
    # elif request.form['building'] == "cave":
    #     session['gold_count'] += randint(5, 10)
    #     print(f'Earned {"gold_count"} golds from the Cave!')
    #     session['total_gold'] += 'gold_count'
    # elif request.form['building'] == "house":
    #     session['gold_count'] += randint(2, 5)
    #     print(f'Earned {"gold_count"} golds from the House!')
    #     session['total_gold'] += 'gold_count'
    # elif request.form['building'] == "casino":
    #     session['gold_count'] += randint(-50, 50)
    #     if 'gold_count' == (0,50)
    #         print(f'Entered a casino and won {"gold_count"} golds... Yay.')
    #         session['total_gold'] += 'gold_count'
    #     if 'gold_count' == (-50,0)
    #         print(f'Entered a casino and lost {"gold_count"} golds... Ouch.')
    #         session['total_gold'] -= 'gold_count'
    return redirect("/")


if __name__=="__main__":
    app.run(debug=True)