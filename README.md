[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/signature15/onepage-worldnews/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/signature15/onepage-worldnews/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

## What it does

This entry generates a deterministic copy of a front-page news poster image for Tuesday, 17 November 2026. The image captures a snapshot of global headlines in a single visual frame.

## The image

The poster features a traditional newspaper front-page layout with:
- A masthead identifying the publication
- A six-continent map band showing geographic coverage
- Three columns of 30 regional headline cards, each summarizing the day's most significant stories by region

## How to run

```bash
node main.ts
```

This copies `entry.png` to `/output/entry.png`.

To specify a different output directory, set the environment variable:

```bash
MAKEFUN_OUTPUT_DIR=/custom/path node main.ts
```

## Determinism

Two consecutive runs of this program produce byte-for-byte identical output. The image is pre-rendered and immutable — no computation, randomization, or external state affects the result.

## License

MIT — see LICENSE file in this repository.
