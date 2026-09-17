import {test, expect} from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Buy Groceries');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Go For Walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('play');
  await page.getByTestId('text-input').press('Enter');
  await page.getByText('Buy Groceries').click();
  await page.getByText('Rest').click();
  await page.getByRole('listitem').filter({ hasText: 'Buy Groceries' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Rest' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'play' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'play' }).getByTestId('todo-item-toggle').uncheck();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('play')).toBeHidden();
  await expect(page.getByTestId('todo-list')).toContainText('Go For Walk');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();

})