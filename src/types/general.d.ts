import { Howl } from 'howler'

export type Sample = {
  trigger: string
  key: string
  pad: string
  name: string
  audio: Howl
}

export type BankName = string
export type Display = string
export type Name = string
export type Power = boolean
export type Samples = Sample[]
export type Volume = number
