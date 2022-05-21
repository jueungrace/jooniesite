import Navigation from './Navigation'
import ThemeButton from './ThemeButton'
// import { m } from 'framer-motion'
import * as styles from './styles'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <ThemeButton />
      <Navigation />
      {children}
    </main>
  )
}

export default MainLayout
