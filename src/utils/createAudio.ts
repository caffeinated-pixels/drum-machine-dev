import { Howl } from 'howler'

export const createAudio = (src: string) => new Howl({ src: [src] })
