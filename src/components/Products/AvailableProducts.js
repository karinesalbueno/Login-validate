import Card from '../UI/Card/Card'
import ProductItem from './ProductItem/ProductItem'

import classes from './AvailableProducts.module.css'

const DUMMY_AvailableProducts = [
  {
    id: 'm1',
    name: 'Gel de limpeza',
    description: 'Para peles oleosas',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Máscara de carvao ativado',
    description: 'limpeza',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'vitamina c',
    description: 'hidratação da pele',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Protetor Solar',
    description: '4h de proteção',
    price: 18.99,
  },
];

const AvailableProducts = () => {
  const productsList = DUMMY_AvailableProducts.map((prod) => (
    <ProductItem
      product={prod}
      key={prod.id}
      id={prod.id}
      name={prod.name}
      description={prod.description}
      price={prod.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  )
}
export default AvailableProducts
