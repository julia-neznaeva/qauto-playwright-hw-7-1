import { test, expect } from '@playwright/test';

test('guest can add an Audi TT to Garage', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Guest log in', exact: true }).click();
  await page.getByRole('button', { name: 'Add car', exact: true }).click();

  const addCarDialog = page.getByRole('dialog');
  await addCarDialog.getByLabel('Brand', { exact: true }).selectOption({ label: 'Audi' });
  await addCarDialog.getByLabel('Model', { exact: true }).selectOption({ label: 'TT' });
  await addCarDialog.getByRole('spinbutton', { name: 'Mileage', exact: true }).fill('12000');
  await addCarDialog.getByRole('button', { name: 'Add', exact: true }).click();

  await expect(page).toHaveURL(/\/panel\/garage$/);
  await expect(page.getByText('Audi TT', { exact: true })).toBeVisible();
});
