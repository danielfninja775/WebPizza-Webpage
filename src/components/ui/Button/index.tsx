import { ReactNode, ButtonHTMLAttributes } from 'react';
import sytles from './styles.module.scss';
import { FaSpinner} from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading? : bollean,
    children: ReactNode,
}


export function Button({loading, children, ...rest } : ButtonProps){
    return(

        <button
         className={sytles.button}
         disabled={loading}
         {...rest}
         >
  { loading? (
    <FaSpinner color= "#FFF" size={16} />
  ) : (
    <a className={sytles.buttonText}>
       {children}
 </a>
  )}
        </button>
    )
}