import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useRef, useEffect } from 'react'
import gsap from 'gsap-trial'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.to(bgRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power1.out"
    })
    gsap.to(solidLogoRef.current, {
      opacity: 1,
      duration: 3,
      delay: 0.5,
      ease: "power1.out"
    })
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        ref={solidLogoRef}
        className="solid-logo"
        src={LogoS}
        alt="A"
      />
    </div>
  )
}

export default Logo
