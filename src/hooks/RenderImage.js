import { useEffect, useState} from "react"

const RenderImage = (element) =>{
    const [show, setShow] = useState(false)
    useEffect(function () {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      }, [element])
  
      return show
}

export default RenderImage