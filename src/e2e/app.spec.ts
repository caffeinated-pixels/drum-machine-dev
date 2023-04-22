import { test, expect } from '@playwright/test'
import { BANK_NAMES } from '../constants/names'

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
  await expect(
    page.getByRole('button', { name: 'q', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'w', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'e', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'a', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('button', { name: 's', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'd', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'z', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'x', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'c', exact: true })
  ).toBeVisible()
})

test('has 3 bank buttons', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'bank' })).toHaveCount(3)
})

test('has 2 volume buttons', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'Vol' })).toHaveCount(2)
})

test('has 1 power buttons', async ({ page }) => {
  await expect(page.getByRole('button', { name: 'On | Off' })).toHaveCount(1)
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
