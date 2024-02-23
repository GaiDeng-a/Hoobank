


// eslint-disable-next-line react/prop-types
const Button = ({styles}) => {
  return (
    <button type="button" className={` rounded-[10px] py-4 px-6 bg-blue-gradient text-[18px] text-primary outline-none ${styles}  `}>
      Get started
    </button>
  )
}

export default Button