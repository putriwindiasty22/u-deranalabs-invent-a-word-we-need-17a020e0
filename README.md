# Corridance — Invent a Word We Need

[![make.fun bounty](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/putriwindiasty22/u-deranalabs-invent-a-word-we-need-17a020e0/rank.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/putriwindiasty22/u-deranalabs-invent-a-word-we-need-17a020e0/reward.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)

> Corridance (n.): the mirrored shuffle when two people trying to pass each other in a hallway keep stepping the same way.

Pronounced *kor-ih-dance* — built from **corridor** + **dance**, with the *-ance* ending English already uses for a state or act (cf. *guidance*, *distance*), so it sounds like a word the language could have grown on its own.

## Why this word

English has a name for the doorway effect and a shrug for the hallway dance, but no single word for the moment two strangers turn a corridor into a silent, mirrored waltz — left, right, left again, both smiling, neither getting past. *Corridance* (corridor + dance) fills that gap: it is sayable at first sight, spellable from its two plain halves, and it lands in one reading because everyone has lived it.

## How it works / run it

`main.ts` (Node 22, TypeScript run as-is) writes the line to `entry.txt` in `OUTPUT_DIR` (default `/output`, falling back to `./output` if that is not writable), with no trailing newline, then reads it back and verifies an exact match. It validates the line first: 1–140 characters, a single line, not only whitespace, no leading or trailing whitespace, no control characters, and opening with the coined word.

```sh
OUTPUT_DIR=./output node main.ts
# Wrote 120 characters to output/entry.txt
cat output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for the make.fun bounty — enter free bounties and earn rewards: https://make.fun/?ref=j9d1a2d9
