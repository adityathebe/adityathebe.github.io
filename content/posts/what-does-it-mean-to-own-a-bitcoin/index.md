---
title: What does it mean to own bitcoins
date: '2020-01-27 22:00'
modified-date: '2020-01-27 22:00'
categories:
  - Bitcoin
slug: /what-does-it-mean-to-own-bitcoins
featuredImage: ./bitcoin.jpg
description: Learn several ways to install softwares in your linux system from using the package manager to managing the binaries.
---

The notion of owning a bitcoin can be difficult to grasp to anyone who has dealt with cash all their life.

When Bob says he has $5 we can understand that he either has a $5 bill or \$5 in his bank account.

But what does it mean when Alice says she owns 5 BTC ? Well, that's what we are gonna figure out ...

Most of the things that I've written in this blog post, I've learned it from the book **"Mastering Bitcoin" by Andreas Antonopolous**. It's [open sourced](https://github.com/bitcoinbook/bitcoinbook) !! 

I am writing this blog post to put down in words the things that I've learned from the book and in hopes to help at least a single person who wants to learn about Bitcoin.

> Disclaimer: This post only deals with the techinal aspects of owning a bitcoin; not political, not economical, not legal or any other \*-cal imaginable but just the technical aspects.

## Private Keys

Think of it this way - a person does not own bitcoins but instead a number does. Anyone with that number has access to that bitcoin. That number is called the "private key". So when Alice says she has 5 BTC, what she really means is that she has the private key that owns that 5 BTC. If Bob gets access to that key then he has just as equal ownership over that bitcoin. 

Now it's important to realize that there may be various chunks of bitcoin that amounts to Alice's 5 BTC. For example: When Bob says he has $5 he could have five $1 bill or a single $5 bill or may be 500 cents. In a similar manner, Alice might have 1 BTC and 4 BTC making a total of 5 BTC. It could be that both 1 BTC and 4 BTC might be owned by a single private key or two private keys. *In practice you could create any number of private keys you would want.*

## The Blockchain

Now imagine a pool of bitcoins. One place that's filled with every single bitcoin in existence. That one place is called the blockchain. As of today there are more than [18 million](https://www.buybitcoinworldwide.com/how-many-bitcoins-are-there/) bitcoins in existence.

A block chain is a database of all the bitcoin transactions that has ever happened. And I mean literally every single bitcoin transactions !

A question naturally follows - in what form do bitcoins exist in the blockchain ? Are there 18 million individual bitcoins each one of them tied to a unique private key ? Well no, because you might heard some people say they own 0.1 BTC or 0.000123 BTC. A single bitcoin can be broken down into 100 million parts called Satoshi. Just like $1 = 100 cents, 1 BTC = 100,000,000 Satoshis. 1 Satoshi is as low as you can go; You can't have 0.5 Satoshis.

Back to our question - in what form do the bitcoins exist in the blockchain ? The answer is - in chunks. Those individual chunks of bitcoin are called UTXO (Unspent transaction).

## Unspent transaction (UTXO)

Understanding transactions is the key to understanding Bitcoin. You could say that everything in the bitcoin system is designed to ensure that transactions can be created, propagated on the network, validated, and finally added to the blockchain. A bitcoin transaction, as the name suggests, is just transfer of bitcoins. But it's important to underestand how the transfers happen.

A transaction comprises of two important things - an input and output. Everyting that I have said about transaction may seem trivial until now.