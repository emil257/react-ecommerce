import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../store/actions/products'
import { ProductCard } from './ProductCard'


export const ProductCardDeck = () => {

  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className="row row-cols-1 row-cols-md-3">

      {
        products.map(product => {
          return (
            <ProductCard key={product._id} product={product} />
          )
        })
      }
    </div>
  )
}
