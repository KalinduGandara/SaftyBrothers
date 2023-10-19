import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className = "flex flex-row h-screen justify-center items-center" >

<Link href = '/stock'>
  <div className='mx-3' >
  <img className=" h-250 w-250 object-center rounded-3xl shadow-2xl" src="/images/stocksicon.jpg" />
    <h1 className="text-center pt-4  font-black text-2xl">Stock</h1>
  </div>
  </Link>
    
  <Link href = '/quotation'>
 <div className='mx-3'>
 <img className=" h-250 w-400 object-center rounded-3xl shadow-2xl" src="/images/quoteicon.jpg"  />
 <h1 className="text-center pt-4  font-black text-2xl">Quotation</h1>
 </div >
 </Link>  
 <Link href = '/invoice'>
<div className='mx-3'>
<img className="h-250 w-400 object-center rounded-3xl shadow-2xl" src="/images/invoiceicon.jpg" />
<h1 className="text-center pt-4  font-black text-2xl">Invoice</h1>

</div>
</Link>
<Link href = '/customer'>
<div className='mx-3' >
<img className="h-250 w-400 object-center rounded-3xl shadow-2xl" src="/images/custom.jpg" />
<h1 className="text-center pt-4  font-black text-2xl">Customer Details</h1>

</div>
</Link>

 
 


 
 
</div>
    </main>
  )
}
