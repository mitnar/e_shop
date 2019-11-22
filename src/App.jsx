import React from 'react';

import styles from './App.module.css'
import data from './testData/data';
import names from './testData/names';
import Group from './components/Group/Group';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';

function App() {
  const groups = Object.keys(names).filter(id =>
      data.Value.Goods.find(g => g.G.toString() === id.toString())
  );

  const groupsContent = groups.map(id => (
        <Group
            key={id}
            name={names[id].G}
            goodsNames={names[id].B}
            goodsData={data}
        />
      )
  );

  return (
      <CartContextProvider>
          <div className={styles.groups}>
              {groupsContent}
          </div>
          <div className={styles.cart}>
              <Cart/>
          </div>
      </CartContextProvider>
  )
}

export default App;
