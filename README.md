# Till-Tech-Test

Till tech test
==============

We want to sell tills to a local hipster coffee shop who are finally embracing the 21st century. We need a new till to replace their vintage machines - unfortunately, hipster staff are too cool to learn a new system, so we need you to build something that they will understand.

## Specification
-------------

This is what a sample receipt looks like:

![a receipt](../images/receipt.jpg)


Version 1
---------

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

Version 2
---------

- Add functionality to take payment and calculate correct change.  
- Add functionality to handle discounts - in this example, a 5% discount on orders over $50, and a 10% muffin discount.

Version 3
---------

Implement a user interface that can actually be used as a till.

You may use whatever technologies you see fit.

##User Stories

## Models

## Technology Used

## Installation

## Usage Example

## Development Setup

## Release History

## TODO

## Meta

Alfie Darko – me@alfiedarko.co.uk

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/AlfieDarko/job-slink](https://github.com/AlfieDarko/Till-Tech-Test)

## Contributing

1. Fork it (<https://github.com/AlfieDarko/Till-Tech-Test/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
