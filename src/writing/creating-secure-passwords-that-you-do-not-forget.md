---
title: Creating secure passwords that you do not forget
date: '2021-02-10'
tags: ['Tools', 'Software', 'Security']
---

This story was first released in the [**feynmatt media publication on medium**](https://medium.com/feynmatt/creating-secure-passwords-that-do-not-slip-your-mind-f474d34133ad?sk=1008a167834851b8d195cea09dd90efb).

Passwords are made to protect. Whether it is your personal photo collection, access to your corporate email address, or your bank data. To secure access to all these, your password should be **as strong as possible**.

![Secure Passwords. Man in black zip hoodie typing on notebook keyboard.](/images/writing/creating-secure-passwords-that-you-do-not-forget/medium-feynmatt-secure-passwords.jpg)

## Why do I need a strong password?

The majority of passwords, used in a personal context, are **extremely weak**. Nordpass publishes data on the **most used passwords** every year. 2020 was no exception for **exceptionally weak** passwords on [that list](https://nordpass.com/most-common-passwords-list/).

![List of most used passwords 2020. Showing the top 10 passwords, and the number of users.](/images/writing/creating-secure-passwords-that-you-do-not-forget/nordpass-common-passwords.png)

So what is bad about those, you might think. When for example 2.5 million users use `123456` as their password for Facebook, it would be **incredibly easy**, to just go through your contact list, enter email addresses and said password, and **get into the account** of one of your friends.

But let's assume, the people, having your **email address** in their contact list, are good people, and they would not do such a thing. Instead, there is a **program on a computer**, doing exactly this, for every email address, they could get their 'hands' on.

The website [How Secure Is My Password?](https://howsecureismypassword.com) lets you enter a **string of characters** to see, how long such a computer would take to guess it. Let's go with a classic, and see, how long it would take, to guess `password`.

![GIF of entering 'password' into the form field on the website 'How Secure Is My Password?'. The result is: "Your password would be cracked instantly."](/images/writing/creating-secure-passwords-that-you-do-not-forget/hsimp-easy.gif)

## What is a strong password?

[Security.org](https://security.org), the company that maintains the above-mentioned website for checking your password, [says on their website](https://security.org/how-secure-is-my-password/), **a password should**

> be **16 characters or more** &
> include a **combination of letters, numbers, and characters**.

And it **should not**

> **be shared** with any other account,
> **include** any of the user's **personal information**,
> **contain** any **consecutive** letters or numbers &
> be the word "password" or the same letter or number repeated.

But there is another side of this coin. Simply creating a **random combination** of a lot of special characters, letters, and numbers **does not always equal high security**. Sometimes, complexity only makes it hard to remember, but not hard to guess for a computer.

![XKCD comic about password strength.](/images/writing/creating-secure-passwords-that-you-do-not-forget/xkcd-password-strength.png)

## How do I create a strong password?

All this in mind, there are **many ways**, to **create strong passwords**. I will show two manual ways first and teaser one automatic way later.

**The first way** uses a similar approach to the first way in the comic above. But instead of using a single word and do some substitutions and other randomness to it, we will logically build such a password, **starting with any sentence**, you can **always remember**. Those can be **nursery rhymes** (with exceptions), the **lyrics** of a **favorite song** of yours, a **poem**, or something different. The only thing is: You must choose something, you won't forget.

Let's start with the first verse of **Twinkle, twinkle, little star**.

> Twinkle, twinkle, little star  
> How I wonder what you are  
> Up above the world so high  
> Like a diamond in the sky  
> Twinkle, twinkle little star  
> How I wonder what you are

1. Now we will shape our password by taking the **starting letter of each word**  `ttlshiwwyauatwshladitsttlshiwwya`
2. We will include uppercase letters, too, by **following a rule**. This rule can be any rule you want, but must always be the same, so you can reconstruct the password afterward. One possible rule would be, to **capitalize the first word of each row**. Another rule would be, to **capitalize all nouns**. You can even **combine those rules** but always stick with the same rule set for each and every password you create. In this example, we will capitalize both the first word of each row and all nouns  `TtlSHIwwyaUatWshLaDitSTtlSHIwwya`
3. The next rule is an easy **substitution rule**, based on [Leetspeak](https://en.wikipedia.org/wiki/leet), where *letters are substituted by numbers* that *look similar*. The rule set is `a/A = 4, e/E = 3, i/I = 1, o/O = 0`. Following this ruleset, we will get  
`TtlSH1wwy4U4tWshL4D1tSTtlSHIwwy4`
4. To enter the sphere of special characters, we will re-introduce the commas of the original and add periods/question marks/etc. to the end of sentences or in this case to the end of each row  
`T,t,lS.H1wwy4.U4tWsh.L4D1tS.T,t,lS.HIwwy4.`

This simple ruleset (Starting letter > Uppercase first words and nouns > Vowel-Number-Substitution > Special characters) will always lead to the same outcome. Trying this newly created password, we will get

![GIF of entering our complex password into the form field on the website 'How Secure Is My Password?'. The result is: "Your password would be cracked in about 1 Hundred Novemdecillion years."](/images/writing/creating-secure-passwords-that-you-do-not-forget/hsimp-complex-1.gif)

Wow. **1 HUNDRED NOVEMDECILLION YEARS.** Do you even know this number? I think we are secure with this kind of password! (*Be careful, the exact password is now exposed online, so it is easy for a computer, to add this to a list and crack it quite easily!*)

**The second way** uses the second approach of the XKCD comic. You will take *random words* and simply put them together.

1. **Four or five words** is a good rule of thumb.  
`flesh commutation before parenthood transport`
2. We will add capitalization, by choosing one of those words to write in all-caps.  
`flesh commutation before PARENTHOOD transport`
3. Then we will add special characters by simply substituting spaces with a special character of our liking. I tend to use periods in these cases because most password forms will allow them.  
`flesh.commutation.before.PARENTHOOD.transport`

![GIF of entering our word-based password into the form field on the website 'How Secure Is My Password?'. The result is: "Your password would be cracked in about 1 hundred vigintillion years."](/images/writing/creating-secure-passwords-that-you-do-not-forget/hsimp-complex-2.gif)

**1 HUNDRED VIGINTILLION YEARS.** Safe to say, this will work nicely, to secure our **private meme collection!**

The key to security here is the **randomness of the chosen words**. Simply using the first four that come to mind, can easily result in words, that can be associated with another. **We should avoid this, whenever possible**.

**The third way** is the automatic one. We can use **password managers** to **generate** passwords. Those can be memorable as the ones in the **second way** or a completely random bunch of characters. The **latter passwords cannot easily be remembered**, thus ruling them 'out of bounds' for this article. (There will be an article about password managers, including recommendations and ways to use, in the near future)

## What do I do now?

The two ways, I introduced above, are vastly different. Using a poem, song lyrics, or a bible phrase, combined with a simple ruleset, lets you **recreate** passwords over and over, **without the possibility to forget**. Given the input text (Twinkle, twinkle, little star) and **following the rules** we discussed earlier, you will always get the **same result**  
`T,t,lS.H1wwy4.U4tWsh.L4D1tS.T,t,lS.HIwwy4.`

For the second way, it could be **more difficult, to remember** the words, included in the passphrase.  
`flesh.commutation.before.PARENTHOOD.transport`  
You can try to **build a short story** with the words, so the only thing, you have to **remember**, is **which word was capitalized**. If you always use five words and always capitalize the fourth, it can help, remembering.

But you don't have to change all your passwords to incredibly strong ones right away.

**A good start** is, to use either of the above-mentioned ways, to create **two really strong passwords**. Those should be used for your **devices** (laptop, computer, tablet, phone, …) and for your **email accounts**. (But not the same password for both!)

Using one of your devices and your email account, you could **reset** nearly all of your online accounts' passwords. **Therefore, the passwords for your devices themselves and your email accounts should be the strongest.**

## The next step(s)

**Password managers** can help you, generating incredibly hard (and even impossible) to guess passwords and **secure them all in one place**.

Next to passwords, there are a few **rules** you can follow to make your **digital life more secure**. These could include '**fake identities**' for online accounts, or the help of technologies like **Two Factor Authentication** (2FA).

**Keep an eye out** for the **coming articles** on those topics!

## In the meantime

While you patiently wait and we eagerly create, you can test your newly created password on [How Secure Is My Password?](https://howsecureismypassword.com) and tell us [via Twitter](https://twitter.com/feynmatt), how you are doing 🤗

![feynmatt media](/images/writing/creating-secure-passwords-that-you-do-not-forget/feynmatt-media.png)

