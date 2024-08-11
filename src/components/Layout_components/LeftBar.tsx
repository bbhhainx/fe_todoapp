'use client'

import Image from 'next/image'

function LeftBar() {
  return (
    <section className='flex flex-col justify-between items-center py-3 p-2 bg-blue-100 h-full w-fit'>
      <Image
        className='rounded-md'
        src="/image/image.png"
        alt="avatar"
        width={36}
        height={36}
      ></Image>
      <Image
        className='cursor-pointer'
        src="/icons/setting.svg"
        alt="setting"
        width={20}
        height={20}
      ></Image>
    </section>
  )
}

export default LeftBar
