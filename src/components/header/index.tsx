import styles from './Header.module.scss'
import LogoDandrade from '../../assets/icons/logo-dandrade.png'
import Button from '../button/Button';

const Header = () => {
  return (
        <header className={styles.header}>
            <img src={LogoDandrade} alt="Logo" className={styles.header__logo}/>
            <nav>
                <ul className={styles.header__list}>
                    <li><a href="">Início</a></li>
                    <li><a href="">Cenário dos Precatórios</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Notícias</a></li>
                </ul>
            </nav>
            <Button
                type='submit'
                width='168px'
                marginTop=''
            >
                Fale conosco
            </Button>
        </header>
    
  )
}

export default Header;
