import { test, expect } from '@playwright/test'
import {
  BANK_NAMES,
  BUTTON_NAMES,
  PAD_LABELS,
  SCREEN_LABELS,
} from '../constants/names'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Initial state', () => {
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
})

test.describe('Left panel button actions', () => {
  test('should display correct bank name when bank button is clicked', async ({
    page,
  }) => {
    const bank1Button = page.getByRole('button', { name: BUTTON_NAMES.BANK1 })
    const bank2Button = page.getByRole('button', { name: BUTTON_NAMES.BANK2 })
    const bank3Button = page.getByRole('button', { name: BUTTON_NAMES.BANK3 })

    await bank2Button.click()
    await expect(page.getByText(`Bank: ${BANK_NAMES.BANK2}`)).toBeVisible()
    await bank3Button.click()
    await expect(page.getByText(`Bank: ${BANK_NAMES.BANK3}`)).toBeVisible()
    await bank1Button.click()
    await expect(page.getByText(`Bank: ${BANK_NAMES.BANK1}`)).toBeVisible()
  })

  test('volume display value should update correctly when vol buttons clicked', async ({
    page,
  }) => {
    const volDownButton = page.getByRole('button', {
      name: BUTTON_NAMES.VOL_DOWN,
    })
    const volUpButton = page.getByRole('button', { name: BUTTON_NAMES.VOL_UP })

    for (let i = 9; i > 0; i--) {
      await volDownButton.click()
      await expect(
        page.getByText(`${SCREEN_LABELS.VOLUME}: 0.${i}`)
      ).toBeVisible()
    }

    // test that volume does not go below 0
    await volDownButton.click()
    await expect(page.getByText(`${SCREEN_LABELS.VOLUME}: 0`)).toBeVisible()
    await volDownButton.click()
    await expect(page.getByText(`${SCREEN_LABELS.VOLUME}: 0`)).toBeVisible()

    for (let i = 1; i < 10; i++) {
      await volUpButton.click()
      await expect(
        page.getByText(`${SCREEN_LABELS.VOLUME}: 0.${i}`)
      ).toBeVisible()
    }

    // test that volume does not go above 1
    await volUpButton.click()
    await expect(page.getByText(`${SCREEN_LABELS.VOLUME}: 1`)).toBeVisible()
    await volUpButton.click()
    await expect(page.getByText(`${SCREEN_LABELS.VOLUME}: 1`)).toBeVisible()
  })
})
