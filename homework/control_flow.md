# Exercise Set 2: Control Flow

These exercises are to deepen you understanding of the `if` statement,
but the previous knowledge is still very relevant and will be used here as well.

## Exercise 3

### The Greatest

### 3.1

Ask the user for two numbers, return the greater one.

### 3.2

Ask the user for three numbers. Return the greatest.

## Exercise 4

### Beachwalk Hotel 🏖 <br />

Let's calculate how much a hotel stay costs at the fantastic Beachwalk Hotel

### 4.1

The price for night is `90€`<br />
Ask the user for how many nights he would like to stay and print the total cost.

### 4.2

Breakfast is an extra `10€`<br />
Continue from the last exercise and ask the user if he would like to include breakfast.<br />
Print the total cost.

#### Hints

1. The decision should end up in a boolean variable, such that you can use it in an if statement.
2. You could use a comparison operator called `==` which also works for strings. For example `let answer = "yes"; answer=="yes"`.
3. (lazy approach) you can also use a readline-sync method called `keyInYN`

### 4.3

Discount<br />
Let's discount guests who stay for longer periods.<br />
Continue from the last exercise and calculate a discount.<br />

> 5 nights or more, 10%<br />
> 10 nights or more, 15%<br />
> 15 nights or more, 20%<br />

```
Only the room is affected by the discount. Breakfast price stays the same.
```

#### Hints

1. Start with a variable called `discount_percent` and set it to 0 for the base scenario of less than 5 days.
2. Gradually update the `discount_percent` with different if statements.

### 4.4

Extra guest <br />
Continue from the last exercise.<br />
Ask the user how many guests will stay in the room (1 or 2)<br />

> Add 10€ per night for an extra guest (Before discount)

```
Don't forget the extra breakfast 🥐
```

## Exercise 5

### Currency converter V2

Take the program from today, that asks the user for an amount in USD and prints out the value in EURO.<br />
Use the rate 1 USD = 0.910463 EUR. Extend the converter to use a precision of 2 decimal points in the output.<br />
For example the output for 100 USD should be 94.04 EUR (the bank will cut the extra 0.0063 EUR and make profit from that).

Also you can now extend the program with a little menu to let the user choose, whether they want to
convert from EUR to USD or the other way around and then do it accordingly.
This will require `if/else` as well.

#### Hints

This rounding to two digits is a very common scenario where you will find lots of different methods online. Challenge might be to find the "best" one.

## Exercise 6

### Calculate grade.

As you might now, in the USA basic school grades are from A (best) to F (failed), while in Germany they are from 1 (best) to 6 (failed). Decide for one system.

Then write a program that asks for a score between 0 and 100 and converts that to a grade:
| from | to | grade US | grade DE |
| ---- | -- | -------- | -------- |
| 0 | 24 | F | 6 |
| 25 | 64 | doesn't really exist, but you can put E | 5 |
| 65 | 69 | D | 4 |
| 70 | 79 | C | 3 |
| 80 | 89 | B | 2 |
| 90 | 100 | A | 1 |

Stretch goal: Include some intermediate grades, e.g. B+, D- as well.

## Exercise 7

### Multilingual Greeting

When the program starts, ask the user which language they want to select, then greet the user. It should default to English if the user input doesn't match to a language.

Hint: This is similar to Exercise 6, but you have more freedom (for example which languages do you want?), so it's a bit more tricky.

Stretch Goal: Combine Exercise 6 and 7. First ask for country system to grade in, then ask for a score. Output should be according to the table in that country.

## Exercise 8

### In a dungeon find the spaghetti monster

This is an open ended creative exercise that shows you that you could already program a little game with conditions only. I put an example [here](08_dungeon.js), and you can use that however you want to create your own little text adventure game.

Here are some steps how you could start:

1. Try and run the code without reading it first, to have the "gaming experience".
2. Probably you need to run it multiple times to play through the game :D
3. Now read the code and try to understand how it's connected to the gameplay.
4. Modify the code a little bit and see if it had the desired effect
5. Add some rooms and options to the dungeon and have fun! :)
