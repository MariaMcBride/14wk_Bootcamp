# 1. Countdown - Create a function that accepts a number as an input. Return a new list that counts down by one, from the number (as the 0th element) down to 0 (as the last element).
#   - Example: countdown(5) should return [5,4,3,2,1,0]
print("1 - Countdown")

def countdown(num):
    li = []
    for i in range(num, -1, -1):
        li.append(i)
    return li
  
print(countdown(5))

# 2. Print and Return - Create a function that will receive a list with two numbers. Print the first value and return the second.
#   - Example: print_and_return([1,2]) should print 1 and return 2
print("2 - Print and Return")

def print_and_return(li):
    print(li[0])
    return li[1]

print(print_and_return([1,2]))

# 3. First Plus Length - Create a function that accepts a list and returns the sum of the first value in the list plus the list's length.
#   - Example: first_plus_length([1,2,3,4,5]) should return 6 (first value: 1 + length: 5)
print("3 - First Plus Length")

def first_plus_length(li):
    sum = li[0] + len(li)
    return sum

print(first_plus_length([1,2,3,4,5]))

# 4. Values Greater than Second - Write a function that accepts a list and creates a new list containing only the values from the original list that are greater than its 2nd value. Print how many values this is and then return the new list. If the list has less than 2 elements, have the function return False
#   - Example: values_greater_than_second([5,2,3,2,1,4]) should print 3 and return [5,3,4]
#   - Example: values_greater_than_second([3]) should return False
print("4 - Values Greater than Second")

def values_greater_than_second(li):
    new_li = []
    if len(li) < 2: # place stricter conditions on top
        # print("False")
        return False
    for i in li:
        if i > li[1]:
            new_li.append(i)
    print(len(new_li))
    # print(new_li)
    return new_li

values_greater_than_second([5,2,3,2,1,4])
values_greater_than_second([3])    

# 5. This Length, That Value - Write a function that accepts two integers as parameters: size and value. The function should create and return a list whose length is equal to the given size, and whose values are all the given value.
#   - Example: length_and_value(4,7) should return [7,7,7,7]
#   - Example: length_and_value(6,2) should return [2,2,2,2,2,2]
print("5 - This Length, That Value")

def length_and_value(size, value):
    li = []
    for i in range(size):
        li.append(value)
    # print(li)
    return li

length_and_value(4,7)
length_and_value(6,2)