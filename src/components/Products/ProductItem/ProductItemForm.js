import Input from '../../UI/Input/Input'
import classes from './ProductItemForm.module.css'

const ProductItemForm = (props) => {
  return (
    <form className={classes.form}>
      {/* <Input /> */}
      <button>+ adicionar</button>
    </form>
  )
}
export default ProductItemForm
