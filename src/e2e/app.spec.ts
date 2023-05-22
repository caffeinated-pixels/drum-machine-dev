import { test, expect } from '@playwright/test'
import {
  BANK_NAMES,
  BUTTON_NAMES,
  LINKS,
  PAD_LABELS,
  SCREEN_LABELS,
  TOPBAR,
} from '../constants/names'

import { acoustic, chaosEngine, synthwave } from '../fixtures'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Initial state', () => {
  test('should match snapshot', async ({ page }) => {
    const screenshot = await page.screenshot()
    expect(screenshot).toMatchSnapshot()
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

  test.describe('Power button', () => {
    test('should toggle appearance when clicked', async ({ page }) => {
      const powerButton = page.getByRole('button', {
        name: BUTTON_NAMES.POWER,
      })

      await powerButton.click()
      await expect(powerButton).toHaveClass('powbtn-off')
      await powerButton.click()
      await expect(powerButton).toHaveClass('powbtn-on')
    })

    test('should toggle display on and off', async ({ page }) => {
      const powerButton = page.getByRole('button', {
        name: BUTTON_NAMES.POWER,
      })

      const display = page.getByTestId('display')

      await powerButton.click()
      await expect(display).toBeEmpty()
      await powerButton.click()
      await expect(display).not.toBeEmpty()
    })

    test('should not reset bank and volume display', async ({ page }) => {
      const powerButton = page.getByRole('button', {
        name: BUTTON_NAMES.POWER,
      })

      const volDownButton = page.getByRole('button', {
        name: BUTTON_NAMES.VOL_DOWN,
      })
      const bank3Button = page.getByRole('button', { name: BUTTON_NAMES.BANK3 })

      await volDownButton.click()
      await bank3Button.click()
      await powerButton.click()
      await powerButton.click()

      await expect(page.getByText(`Bank: ${BANK_NAMES.BANK3}`)).toBeVisible()
      page.getByText(`${SCREEN_LABELS.VOLUME}: 0.9`)
    })
  })

  test.describe('top bar', () => {
    test('should display correct text', async ({ page }) => {
      const topBar = page.locator('.top-bar').filter({
        hasText: `${TOPBAR.COMPANY_FIRST_WORD} ${TOPBAR.COMPANY_SECOND_WORD} ${TOPBAR.MODEL}`,
      })
      await expect(topBar).toBeVisible()
    })

    test('should display correct image', async ({ page }) => {
      const topBar = page.locator('.top-bar')
      const image = topBar.getByRole('img', {
        name: TOPBAR.IMG_ALT,
      })
      await expect(image).toBeVisible()
      await expect(image).toHaveAttribute('src', TOPBAR.IMG_SRC)
    })
  })

  test.describe('bottom bar', () => {
    test('should display correct text', async ({ page }) => {
      const bottomBar = page.locator('.bottom-bar').filter({
        hasText: 'Coded by Stevie Gill; repo',
      })
      await expect(bottomBar).toBeVisible()
    })

    test('should correctly link to my portfolio site', async ({ page }) => {
      const link = page.getByRole('link', { name: 'Stevie Gill' })
      await expect(link).toHaveAttribute('href', LINKS.PORTFOLIO)
      await link.click()
      await expect(page).toHaveURL(LINKS.PORTFOLIO)
    })

    test('should correctly link to my Github page', async ({ page }) => {
      const link = page.getByRole('link', { name: 'repo' })
      await expect(link).toHaveAttribute('href', LINKS.GITHUB)
      await link.click()
      await expect(page).toHaveURL(LINKS.GITHUB)
    })
  })

  test.describe('drum pads', () => {
    test('should trigger each of the samples from bank 1', async ({ page }) => {
      for (const sample of synthwave) {
        const { key, name } = sample
        const pad = page.getByRole('button', { name: key, exact: true })
        await pad.click()
        await expect(page.getByText(`Sample: ${name}`)).toBeVisible()
      }
    })

    test('should trigger each of the samples from bank 2', async ({ page }) => {
      const bank2Button = page.getByRole('button', {
        name: BUTTON_NAMES.BANK2,
      })

      await bank2Button.click()

      for (const sample of acoustic) {
        const { key, name } = sample
        const pad = page.getByRole('button', { name: key, exact: true })
        await pad.click()
        await expect(page.getByText(`Sample: ${name}`)).toBeVisible()
      }
    })

    test('should trigger each of the samples from bank 3', async ({ page }) => {
      const bank3Button = page.getByRole('button', {
        name: BUTTON_NAMES.BANK3,
      })

      await bank3Button.click()

      for (const sample of chaosEngine) {
        const { key, name } = sample
        const pad = page.getByRole('button', { name: key, exact: true })
        await pad.click()
        await expect(page.getByText(`Sample: ${name}`)).toBeVisible()
      }
    })

    test('should be triggered by keyboard', async ({ page }) => {
      for (const sample of synthwave) {
        const { key, name } = sample
        await page.keyboard.press(key)
        await expect(page.getByText(`Sample: ${name}`)).toBeVisible()
      }
    })
  })
})
