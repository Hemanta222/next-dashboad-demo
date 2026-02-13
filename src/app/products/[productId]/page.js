
export default async function ProductDetail({ params }) {
    console.log('params', params)
    const {productId} = await params
  return (
    <div>Product Detail Page for Product ID: {productId}</div>
  )
}

