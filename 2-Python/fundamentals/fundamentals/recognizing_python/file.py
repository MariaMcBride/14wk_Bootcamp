num1 = 42 # variable declaration, primitive data type number initialized 
num2 = 2.3 # variable declaration, primitive data type float number initialized
boolean = True # variable declaration, primitive data type boolean initialized
string = 'Hello World' # variable declaration, primitive data type string initialized

pizza_toppings = ['Pepperoni', 'Sausage', 'Jalapenos', 'Cheese', 'Olives'] 
# variable declaration, composite data type list initialized

person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} 
# variable declaration, composite data type dictionary initialized

fruit = ('blueberry', 'strawberry', 'banana') 
# variable declaration, composite data type tuple initialized

print(type(fruit)) # print, check type

print(pizza_toppings[1]) # print, list: access value
pizza_toppings.append('Mushrooms') # add value to list

print(person['name']) # print, dictionary: access value
person['name'] = 'George' # dictionary: change value
person['eye_color'] = 'blue' # dictionary: change value

print(fruit[2]) # print, tuple: access value

if num1 > 45:
    print("It's greater")
else:
    print("It's lower")
# conditional: if, print if true, else, print

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")
# conditional: if, else if, else, print

for x in range(5):
    print(x)
# for loop: start at 0, stop at 5
for x in range(2,5):
    print(x)
# for loop: start at 2, stop at 5
for x in range(2,10,3):
    print(x)
# for loop: start at 2, stop at 10, increment by 3

x = 0 # variable declaration (within the while loop)
while(x < 5):
    print(x)
    x += 1
# while loop: print, x increments by 1

pizza_toppings.pop() # list: delete value (last item)
pizza_toppings.pop(1) # list: delete value (index 1)

print(person) # print dictionary variable
person.pop('eye_color') # dictionary: delete value 'eye_color'
print(person) # print updated dictionary variable

for topping in pizza_toppings: # for loop: goes through list of 'pizza_toppings'
    if topping == 'Pepperoni': # conditional: if
        continue # continue
    print('After 1st if statement') # print
    if topping == 'Olives': # conditional: if
        break # break - ends the loop

def print_hello_ten_times(): # create function
    for num in range(10): # for loop: start at 0, stop at 10
        print('Hello') # print

print_hello_ten_times() # call function

def print_hello_x_times(x): # create function with parameter 'x'
    for num in range(x): # for loop: start at 0, stop at whatever 'x' is 
        print('Hello') # print

print_hello_x_times(4) # call function with 'x' set to '4'

def print_hello_x_or_ten_times(x = 10): # create function with parameter 'x = 10'
    for num in range(x): # for loop: start at 0, stop at whatever 'x' is
        print('Hello') # print

print_hello_x_or_ten_times() # call function with given default parameter 'x = 10'
print_hello_x_or_ten_times(4) # call function with 'x' set to '4'


"""
Bonus section
"""

# print(num3) - NameError: name <variable name> is not defined
# num3 = 72
# fruit[0] = 'cranberry' - TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) - KeyError: 'favorite_team'
# print(pizza_toppings[7]) - IndexError: list index out of range
#   print(boolean) - IndentationError: unexpected indent
# fruit.append('raspberry') - AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) - AttributeError: 'tuple' object has no attribute 'pop'