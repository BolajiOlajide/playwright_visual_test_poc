import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
    await page.goto('/');

    // await page.screenshot({ path: 'screenshots/homepage.png' });

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Random Facts/);

    await expect(page.getByRole('heading', { name: 'Random Fact - Home Page' })).toBeVisible();

    // await expect(page).toHaveScreenshot();
});

test('button to show text shows text', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Show' }).click();
    await expect(page.getByTestId('hidden-text')).toBeVisible();
    // await page.screenshot({ path: 'screenshots/homepage_with.png' });
    await expect(page).toHaveScreenshot();
});