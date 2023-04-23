import { test, expect } from '@playwright/test'
import { BANK_NAMES, BUTTON_NAMES, PAD_LABELS } from '../constants/names'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Drum Machine/)
})

test('has 9 drum pads', async ({ page }) => {
  await expect(page.locator('.drum-pad')).toHaveCount(9)
})

test('has 9 drum pads with correct text', async ({ page }) => {
  const padLabels = Object.values(PAD_LABELS)

  for (const label of padLabels) {
    await expect(
      page.getByRole('button', { name: label, exact: true })
    ).toBeVisible()
  }
})

test('has 3 bank buttons', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Bank' })).toHaveCount(3)
})

test('has 2 volume buttons', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Vol' })).toHaveCount(2)
})

test('has 1 power buttons', async ({ page }) => {
  await expect(
    page.getByRole('button', { name: BUTTON_NAMES.POWER })
  ).toHaveCount(1)
})

test('should start with the bank set to synthwave', async ({ page }) => {
  const pattern = `^Bank: ${BANK_NAMES.BANK1}$`
  const regex = new RegExp(pattern)
  await expect(page.getByText(regex)).toBeVisible()
})

test('should start with no sample displayed', async ({ page }) => {
  await expect(page.getByText(/^Sample: $/)).toBeVisible()
})

test('should start with volume set to 1', async ({ page }) => {
  await expect(page.getByText(/^Volume: 1$/)).toBeVisible()
})
