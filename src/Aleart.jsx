import style from "./Aleart.module.css"
export const Aleart = ({ children, type = "sucess" }) => {
      return (
            <>
                  <div className={`${style.aleart} ${style[type]}`}>
                        {children}
                  </div>
            </>
      )
}     