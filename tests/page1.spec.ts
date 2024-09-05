import { test, expect } from '@playwright/test';

test('page1', async ({ page }) => {
    await page.goto('/page1');

    await expect(page).toHaveTitle(/Random Facts/);

    await expect(page.getByRole('heading', { name: 'Page 1' })).toBeVisible();

    await expect(page).toHaveScreenshot();
    expect(await page.screenshot()).toMatchSnapshot();
});