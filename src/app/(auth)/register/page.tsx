import React from 'react'
import Image from 'next/image'

export default function Register() {
  return (
    <main className="overflow-y max-h-screen">
      <div className="w-full h-screen flex">
        <div className="w-1/2 flex flex-col items-center justify-center my-auto">
          {/* ------- title -------- */}
          <div className='flex items-center justify-center my-8'>
            <div className='relative cursor-pointer '>
              <Image src="/images/logo.png" alt="logo" layout="responsive" width={73} height={50} objectFit='contain' />
            </div>
            <a href="/" className='ml-2 font-primary text-2xl font-bold'>DECORA</a>
          </div>

          {/* ------- form ----------- */}
          <form action="" className='flex flex-col w-3/4 mx-auto border-emascoklat border-2 py-12 p-2 rounded-lg items-center mb-8'>
            <h2 className="text-xl font-bold mb-6 text-center font-primary">Buat Akun</h2>
            {/* -- */}
            <input type="text" placeholder='Nama' className='font-secondary max-w-sm' />
            <input type="email" placeholder='Email' className='font-secondary max-w-sm' />
            <input type="password" placeholder='Kata Sandi' className='font-secondary max-w-sm' />
            {/* -- */}
            <span className="text-gray-500 max-w-sm mt-10 text-center">
              Dengan mendaftar, berarti anda setuju dengan
              <a href="#" className="text-black"> Ketentuan</a>,
              <a href="#" className="text-black"> Kebijakan Privasi</a> dan
              <a href="#" className="text-black"> Kebijakan Cookie</a> kami
            </span>
            {/* -- */}
            <button type="submit" className='mt-10 font-secondary max-w-sm'>Daftar</button>
            <span className="horizontalLines text-gray-500 my-8 font-secondary">ATAU</span>
            <span className='font-secondary text-center'>Punya akun? <a href="/login" className="text-blue-500">Masuk</a></span>
          </form>
        </div>

        {/* -------- image ----------*/}
        <div className="w-1/2 h-screen fixed right-0">
          <Image src="/images/register.png" alt='register' layout='fill' />
        </div>
      </div>
    </main>
  );
}