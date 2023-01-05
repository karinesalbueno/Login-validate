import Input from '../../UI/Input/Input'
import classes from './ProductItemForm.module.css'

const ProductItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label={'qntd'+ props.id}
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ adicionar</button>
    </form>
  )
}
export default ProductItemForm
