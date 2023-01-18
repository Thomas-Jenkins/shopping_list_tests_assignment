import {
  render,
  screen,
} from '@testing-library/react';
import ShoppingList from './ShoppingList';

describe('ShoppingList', () => {
  
  it('displays the shopping list component', () => {
    const newShoppingList = {
      id: 1,
      name: 'temp',
      shoppingItems: [],
    };
    render(
      <ShoppingList 
        shoppingList={newShoppingList}
      />
    );
    const list = screen.queryByTestId('shopping-list-name-1');
    expect(list).not.toBe(null);
  });

});


