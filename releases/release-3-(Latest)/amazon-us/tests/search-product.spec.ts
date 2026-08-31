import { test, expect } from '@playwright/test'

test('Amazon US search returns product results', async ({ page }) => {
  await page.goto('https://www.amazon.com/')
  await page.getByPlaceholder('Search Amazon').fill('wireless keyboard')
  await page.getByPlaceholder('Search Amazon').press('Enter')
  await expect(page.locator('[data-component-type="s-search-result"]').first()).toBeVisible()
})
