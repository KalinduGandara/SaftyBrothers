import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <main>
      <div className="flex flex-row h-screen justify-center items-center" >

        <Link href='/stock'>
          <div className='mx-3'>
            <Image className="h-250 w-250 object-center rounded-3xl shadow-2xl tablet:640px laptop:1024px desktop:1280px" src="/images/stocksicon.jpg" alt="Stock Image" />
            <h1 className="text-center pt-4 font-black text-2xl">Stock</h1>
          </div>
        </Link>

        <Link href='/quotation'>
          <div className='mx-3'>
            <Image className=" h-250 w-400 object-center rounded-3xl shadow-2xl" src="/images/quoteicon.jpg" alt="Quotation Image" />
            <h1 className="text-center pt-4  font-black text-2xl">Quotation</h1>
          </div >
        </Link>
        <Link href='/invoice'>
          <div className='mx-3'>
            <Image className="h-250 w-400 object-center rounded-3xl shadow-2xl" src="/images/invoiceicon.jpg" alt="Invoice Image" />
            <h1 className="text-center pt-4  font-black text-2xl">Invoice</h1>

          </div>
        </Link>
        <Link href='/customer'>
          <div className='mx-3' >
            <Image className="h-250 w-400 object-center rounded-3xl shadow-2xl" src="/images/custom.jpg" alt="Customer Details Image" />
            <h1 className="text-center pt-4  font-black text-2xl">Customer Details</h1>

          </div>
        </Link>
      </div>
    </main>
  )
}
