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
]

const AvailableProducts = () => {
  const ProductsList = DUMMY_AvailableProducts.map((prod) => (
    <ProductItem
      key={prod.id}
      //escreva product depois de props no elemento filho
      //desta maneira, ñ é necessário passar parâmetro um por um
      product={prod}
    />
  ))

  return (
    <section classeName={classes.products}>
      <Card>
        <ul>{ProductsList}</ul>
      </Card>
    </section>
  )
}
export default AvailableProducts
