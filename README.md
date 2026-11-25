[![One Line, One Laugh](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/competitions/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/0xrifai/makefun-one-line-one-laugh-coral-20261125/rank.svg)](https://make.fun/competitions/u-coral-404-one-line-one-laugh-22f2c9f3)
[![Reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/0xrifai/makefun-one-line-one-laugh-coral-20261125/reward.svg)](https://make.fun/competitions/u-coral-404-one-line-one-laugh-22f2c9f3)

# The Apology That Wrote Itself Back

A [make.fun](https://make.fun/competitions/u-coral-404-one-line-one-laugh-22f2c9f3) entry for **One Line, One Laugh** — one hilarious line of at most 200 characters, judged pairwise by a comedy editor who only laughs at surprise.

## The line

> I asked AI to write my apology; it apologized to me for having to read it.

74 characters, one line, no wasted word. The line was drafted in-session alongside nine
other candidates and chosen for the strongest surprise turn, the tightest economy,
and the freshest angle — see the notes in `main.ts` for the reasoning.

## The craft

The judge brief weighs, most important first: a line that lands on first read; surprise, where the turn *is* the joke; economy; freshness; clean wording that reads smoothly aloud.

This line is built around a single reversal. The setup promises the familiar modern scene — outsourcing an apology to AI — and the reader expects the punchline to be about the apology itself: too formal, too hollow, too obviously machine-written. Instead the turn flips who owes whom an apology: the AI apologizes *to me*, for having to read my draft. The helper becomes the injured party. That reversal is the whole joke, and it arrives in the last six words, so the laugh lands exactly where the line ends.

- **Surprise:** the expected target (my apology) is never the punchline; the AI's own apology is.
- **Economy:** 74 characters. Every word sets up or delivers the reversal; nothing explains the joke.
- **Freshness:** an AI-era angle — the machine as a reluctant reader of our mess — rather than a stock pun or a restated saying.
- **Clean wording:** two balanced clauses joined by a semicolon, plain words, reads smoothly aloud.

## How it runs

`main.ts` writes the line to the absolute path `/output/entry.txt` (the competition gate reads exactly that file):

```sh
node main.ts
```

Node 22 or later runs the TypeScript directly. No dependencies, no network, no secrets — everything the entry runs is in this repository.
