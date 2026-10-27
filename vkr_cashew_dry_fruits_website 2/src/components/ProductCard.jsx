import { Link } from 'react-router-dom'

export default function ProductCard({ product, onGetPrice }) {
  const isCashew = product.categorySlug === 'cashews'

  return (
    <div
      className="product-card bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
      data-category={product.categorySlug}
    >
      <div className="relative">
        <div className="h-52 w-full overflow-hidden bg-surface-container">
          <img
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            src={product.image}
            loading="lazy"
          />
        </div>
        <div
          className={`absolute top-2.5 left-2.5 font-label-md text-label-md px-2.5 py-0.5 rounded shadow ${
            isCashew
              ? 'bg-primary-container text-on-primary'
              : 'bg-secondary text-on-secondary'
          }`}
        >
          {product.grade}
        </div>
        <div className="absolute top-2.5 right-2.5 bg-surface/90 text-secondary font-label-md text-label-md px-2 py-0.5 rounded backdrop-blur-sm shadow-sm">
          {product.badge}
        </div>
      </div>

      <div className="p-space-md flex flex-col flex-1 justify-between space-y-space-sm">
        <div className="space-y-1">
          <h3 className="font-title-lg text-title-lg text-primary font-bold">
            {product.name}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
            {product.description}
          </p>
          <div className="pt-1 flex items-center gap-2">
            <span className="font-label-md text-label-md text-secondary">
              {product.count}
            </span>
          </div>
        </div>

        <div className="pt-space-xs space-y-2">
          <div className="flex items-center justify-between text-on-surface-variant">
            <span className="font-body-sm text-body-sm font-medium">Pricing</span>
            <span className="font-title-md text-title-md text-primary font-bold">
              Price on Enquiry
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/products/${product.slug}`}
              className="w-full py-2 text-center bg-surface-container rounded font-label-md text-label-md text-primary hover:bg-surface-container-high transition-colors"
            >
              Details
            </Link>
            <button
              className="w-full py-2 bg-primary-container text-on-primary rounded font-label-md text-label-md hover:bg-primary transition-colors flex items-center justify-center gap-1 shadow-sm"
              onClick={() => onGetPrice(product)}
              type="button"
            >
              <span>Get Price</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
