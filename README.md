# One Emoji, One Dream Vacation

[![make.fun](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/c/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![Rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/keyi898/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/rank.svg)](https://make.fun/c/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![Reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/keyi898/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/reward.svg)](https://make.fun/c/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)


A single-emoji entry for the "One Emoji, One Dream Vacation" competition
(program/v1).

The program writes one emoji — 🗻 Mount Fuji, standing in for a dream
trip to Japan — to `entry.txt` in the output directory
(`MAKEFUN_OUTPUT_DIR`, defaulting to `/output`). The output is exact
UTF-8 bytes with no trailing newline, validated in code (single code
point, 1–8 characters, no whitespace or control characters, UTF-8
round-trip, read-back byte equality) and deterministic across runs.

## Run

```sh
node main.ts
```

Requires Node 22 (runs TypeScript directly). No dependencies, no network.
