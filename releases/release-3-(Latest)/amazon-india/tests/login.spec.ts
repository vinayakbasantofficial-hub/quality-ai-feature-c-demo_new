import { test, expect } from '@playwright/test'

test('Amazon India user can open sign-in page', async ({ page }) => {
  await page.goto('https://www.amazon.in/')
  await page.getByText('Hello, sign in').first().click()
  await expect(page).toHaveURL(/ap\/signin/)
})
