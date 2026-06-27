import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

function App() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        }
        return response.json()
      }).then((data) => {
        setProducts(data)
      }).catch(() => {
        setError("Failed to load products. Please try again later.")
      }).finally(() => {
        setIsLoading(false)
      })
  }, [])

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading products...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500"> {error} </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <section className="mx-auto max-w-7xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold"> Product Gallery </h1>

          <p className="text-muted-foreground"> Browse products from Fake Store API </p>
        </div>

        <Input placeholder="Search product..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="max-w-md" />

        {filteredProducts.length === 0 && ( <p>No products found.</p> )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="flex h-64 items-center justify-center bg-slate-100 p-4">
                <img src={product.image} alt={product.title} className="h-full object-contain" />
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-2">

                  <CardTitle className="line-clamp-2"> {product.title} </CardTitle>

                  <Badge className={ product.price > 100 ? "bg-blue-500" : "bg-green-500" }>
                    {product.price > 100 ? "Premium" : "Best Seller"}
                  </Badge>

                </div>
              </CardHeader>

              <CardContent>
                <p className="text-xl font-bold">  ${product.price} </p>

                <p className="mt-2 capitalize text-muted-foreground"> {product.category} </p>
              </CardContent>
            </Card>
          ))}

        </div>
      </section>
    </main>
  )
}

export default App