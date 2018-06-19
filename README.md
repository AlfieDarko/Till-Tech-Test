# Till-Tech-Test

> We want to sell tills to a local hipster coffee shop who are finally embracing the 21st century. We need a new till to replace their vintage machines - unfortunately, hipster staff are too cool to learn a new system, so we need you to build something that they will understand.

## Specification

---

This is what a sample receipt looks like:

![a receipt](https://raw.githubusercontent.com/makersacademy/course/master/images/receipt.jpg?token=AQUBdVoGOUpoaKH9m76_plcxpJZLLtRYks5bGFvFwA%3D%3D)

## Version 1

Implement a system that contains the business logic to produce receipts similar to this, based on a `json` price list and test orders. A sample `.json` [file](hipstercoffee.json) has been provided with the list of products sold at this particular coffee shop.

Here are some sample orders you can try - whether you use this information is up to you:

> **Jane**  
> 2 x Cafe Latte  
> 1 x Blueberry Muffin  
> 1 x Choc Mudcake
>
> **John**  
> 4 x Americano  
> 2 x Tiramisu  
> 5 x Blueberry Muffin

Your receipt must calculate and show the correct amount of tax (in this shop's case, 8.64%), as well as correct line totals and total amount. Do not worry about calculating discounts or change yet. Consider what output formats may be suitable.

## Version 2

- Add functionality to take payment and calculate correct change.
- Add functionality to handle discounts - in this example, a 5% discount on orders over $50, and a 10% muffin discount.

## Version 3

Implement a user interface that can actually be used as a till.

You may use whatever technologies you see fit.

## User Stories

MVP

> As a shopkeeper,<Br>
> I want a receipt list of items by price and quantity,<br>
> So that my customers know what they have purchased.

> As a shopkeeper,<br>
> I want my customers name printed on the receipt,<br>
> So that I know who the purchases belong to.<br>

> As a shopkeeper,<br>
> I want the correct amount of tax (8.64%) on the receipt,<br>
> So that my customers can pay the right amount of taxation.

Version 2

> As a shopkeeper,<br>
> So that I can accept purchases,<br>
> I want to be able to take payments from the till

> As a shopkeeper,<br>
> So that I can give customers the correct amount of money back,<br>
> I want to be able to calculate the correct change from the till

> As a shopkeeper,<br>
> So that I can quickly calculate discounts,<br>
> I want to be able to handle discounts and coupons from the till.

Version 3

> As a shopkeeper,<br>
> So that I can see things on the screen,<br>
> I want to have a user interface that I can interact with.

Extras

> As a shopkeeper, <br>
> So I can know when a purchase was made,
> I want to have the date and time of transaction on the receipt.

> As a shopkeeper, <br>
> So my customers know can know where my shop is,
> I want all the shop business details on the top of the receipt.

> As a shopkeeper, <br>
> So I can build my brand, <br>
> I want a swanky ascii art logo on the top of my receipt.

## Models

<b>1st Proposal Class Diagram<b>
<br>

1st Proposal Class Diagram

![1st Proposal Class Diagram](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/ClassDiagram.jpg)

Actual Class Diagram <br>
![Final Diagram](https://github.com/AlfieDarko/Till-Tech-Test/blob/master/finaldiagram.jpg?raw=true)

## Technology Used

Javascript, JQuery <br>
Testing: Mocha, Chai, Sinon<br>
Linting: ESLint, Prettier<br>
CSS: Bulma CSS

## Installation

Git clone the repo into your documents and from the root folder, open index.html in your favourite browser

## Usage Example

Till interface:

![Hipster Till](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.32.13.png)

<br>
1. Enter the customers name<br>

![Enter customer name](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.32.22.png)

2.  Select items in the item list and then add to cart when complete!<br>

![add to cart](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.32.27.png)<br>

3.  When the items are added, they will show up on the cart list. You can clear the cart and start again if you make a mistake.<br>

![add to cart2](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.32.44.png)<br>

4.  After adding items to the cart, the total amount is displayed on the till display screen. We can now take cash payments to pay for the customers purchase. Press the Pay Now button<br>

![till display](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.33.09.png)
<br>

5.  We can now enter the amount the customer wants to pay.<br>

![pay by cash](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.33.23.png)<br>

6.  If you have paid enough, a printout of the customers items, with the line totals, pre and post tax totals, along with any discounts they may have received depending on their spending or items. You will also see the amount given and a calculation of the exact change.<br>

![receipt](https://raw.githubusercontent.com/AlfieDarko/Till-Tech-Test/master/readme_imgs/Screen%20Shot%202018-06-08%20at%2017.33.32.png)<br>

## Development Setup

To run the test runner, open `TestRunner.html` in the main folder.

## Approach

I wanted to make this a single page site to try and keep this as functional as possible. I thought about using node and express but opted against that as there was no need for a server for this type of application. Normal JS and JQuery for the front end was sufficient and it was good to practice javascript after a small break.

I initially planned only a few classes but as I was developing the application, I found that I needed to extract more things in order to adhere to DRY and single responsibility principles.

Using TDD helped me stay on this modular Approach.

I also used IIFE classes as a way of encapsulating functions so that it would be hard to manipulate things using the web console. I used the prototype pattern at first to gain a deeper understanding of how ES6 classes really work under the hood and then converted the codebase to ES6 classes afterwards.

## TODO

What I would have liked to implement if I had more time.

- Function that adds an extra zero to float numbers like '6.4' so it can represent '6.40'

- ASCII Art on the top of the receipts!

- Including the date and time of transaction

- Shop details

If I had more time, I would have planned and developed the interface a bit more thoroughly. I found out that the design aspect changed as I developed it along to the spec, but some small things were unanticipated.

I also would have liked to do a bit more behavioural driven development but opted not to as I wanted to keep the interface simple and because of time restraints. It would have been good practice to use cucumber on this project.

I am happy with the testing but maybe I think I could have had more edge case testing but for the amount of time I done this in, I think the specs are sufficient.

I tried not to leave comments to explain the obvious parts of the code but I feel on a few occasions I had to leave a line explaining a private function. Perhaps that meant that that piece of code wasn't as readable as I thought?

I would have liked to go through the code more thoroughly to DRY the codebase .

I would have also set up my linting tools at the very beginning.

## Meta

Alfie Darko – me@alfiedarko.co.uk

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/AlfieDarko/Till-Tech-Test](https://github.com/AlfieDarko/Till-Tech-Test)

## Contributing

1.  Fork it (<https://github.com/AlfieDarko/Till-Tech-Test/fork>)
2.  Create your feature branch (`git checkout -b feature/fooBar`)
3.  Commit your changes (`git commit -am 'Add some fooBar'`)
4.  Push to the branch (`git push origin feature/fooBar`)
5.  Create a new Pull Request
