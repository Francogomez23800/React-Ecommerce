import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"


function Home() {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
            if(context.filteredProducts?.length > 0){
                return (
                    context.filteredProducts?.map(item =>
                        (<Card key={item.id} data={item} />))
                )
            }else{
                return(
                    <div className="flex justify-center items-center relative w-80 mt-4 mb-10">
                    <h1 className="font-medium text-xl">Sorry, we don't have none of that :(</h1>
                </div>
                )
            }
    }

    return (
        <>
            <Layout>
            <div className="flex justify-center items-center relative w-80 mt-4 mb-10">
                    <h1 className="font-medium text-xl">Exclusive Products</h1>
                </div>
                <input
                 type="text" placeholder="Search product..."
                 className="rounded-lg border p-4 w-80 mb-10"
                 onChange={(event)=>{context.setSearchProduct(event.target.value)}}
                 />
                <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                    {
                        renderView()
                    }
                </div>
            </Layout>
            <ProductDetail />
        </>
    )
}

export { Home }