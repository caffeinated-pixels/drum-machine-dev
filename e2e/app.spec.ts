import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Drum Machine/)
})

test('has 9 pads', async ({ page }) => {
  const pads = await page.$$('.drum-pad')
  expect(pads.length).toBe(9)
})

test('has 9 pads with text', async ({ page }) => {
  const pads = await page.$$('.drum-pad')
  for (const pad of pads) {
    const text = await pad.innerText()
    expect(text).not.toBe('')
  }
})
