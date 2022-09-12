
function Product({ products }) {
  return (
    <>
      <section>
        <div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch"> */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3  md:gap-12 md:py-12">
              {products.map((product) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={product.attributes.short_links?.data[0]?.attributes?.short_link}
                  className="block border border-gray-100"
                  key={product.id}
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      loading="lazy"
                      alt="Simple Watch"
                      className="object-cover rounded"
                      src={`http://localhost:1337`+product.attributes.thumbnail?.data?.attributes?.url}
                    />
                  </div>
                  <div className="my-2 mx-4">
                    <h5 className="font-medium">
                      {product.attributes.title}
                    </h5>

                    <p className="mt-1 text-sm text-gray-700">
                      $150
                    </p>
                  </div>
                </a>
              ))}
            </div>
          {/* </div> */}
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/products?populate[0]=short_links&populate=thumbnail', { method: 'GET', headers: { authorization: `bearer 0be33019f6070b0c222c50d9b384a7d8099d6b98a929e1c7ea9c0b0a5d7d07088275320188755d265221302b16489098a4dadca4549562bbd9f510ee03c3cd1393ce288c6eb0a4a9f7303a52c30031fd2dbe84637af03556d39973a78b1891284e279090dbb25b643f0dfb24002fc3a419747e47ece6322ae4ebb82bf345aa7b` } })
  const jsonResult = await res.json()
  console.log(jsonResult)

  return {
    props: {
      products: jsonResult.data ?? [],
    },
  }
}

export default Product