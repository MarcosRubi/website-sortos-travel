export const IconArrowToRight = () => {
  return (
    <svg
      className='w-3.5 h-3.5 ml-2'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 14 10'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1 5h12m0 0L9 1m4 4L9 9'
      />
    </svg>
  )
}
function CardTabItem ({ idTab, imgUrlMd, imgUrlSm, title, description, url, activeTab }) {
  return (
    <section
      className={`tabs__item shadow ${idTab === activeTab ? 'active' : ''}`}
      id={`tab-${idTab}`}
    >
      <div className='flex flex-col-sm'>
        <div className='tabs__img w-full'>
          <picture>
            <source srcSet={imgUrlMd} media='(min-width:530px)' />
            <img src={imgUrlSm} alt='' className='w-full' />
          </picture>
        </div>
        <div className='tabs__content'>
          <h4>{title}</h4>
          <p>{description}</p>
          <a
            href={url}
            className='btn btn-primary inline-flex items-center inline-block'
          >
            <span>Más información</span>
            <IconArrowToRight />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CardTabItem
