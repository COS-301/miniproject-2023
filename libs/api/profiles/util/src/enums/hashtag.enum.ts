export enum Hashtag {
  NATURE = '#nature',
  FUNNY = '#funny',
  OPINION = '#opinion',
  MUSIC = '#music',
  SPORTS = '#sports',
  FOOD = '#food',
  OTHER = '#other'
}

export function stringToHashtag(value: string | null | undefined): Hashtag | null | undefined {
  if (value == null) return Hashtag.OTHER;

  if (Object.values(Hashtag).includes(value as Hashtag)) {
    return value as Hashtag;
  } else {
    return Hashtag.OTHER;
  }
}
