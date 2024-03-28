import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function NavBar() {
    return (
        <>
            {/* <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/stock">Stock</Link></li>
                            <li><Link href="/quotation">Quotation</Link></li>
                            <li><Link href="/invoice">Invoice</Link></li>
                            <li><Link href="/customer">Customer Details</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost normal-case text-xl">SaftyBrothers</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/stock">Stock</Link></li>
                        <li><Link href="/quotation">Quotation</Link></li>
                        <li><Link href="/invoice">Invoice</Link></li>
                        <li><Link href="/customer">Customer Details</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Logout</a>
                </div>
            </div> */}

            <div className=" navbar bg-primary -100 text-primary-content w-full rounded  ">
                <Link className="btn btn-ghost normal-case text-xl" href='/'>Safety Brother</Link>
                <Link className="btn btn-ghost  navbar-center" href='/'>Home</Link>
                <Link className="btn btn-ghost  navbar-center " href="/stock">Stock</Link>
                <Link className="btn btn-ghost  navbar-center" href='/quotation'>Quotation</Link>
                <Link className="btn btn-ghost  navbar-center" href='/invoice'>Invoice</Link>
                <Link className="btn btn-ghost  navbar-center" href='/customer'>Customer Details</Link>
                <div className="avatar  navbar-end">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <Image width={1000} height={1000} src="/images/1.jpg" alt="Profile Picture" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar