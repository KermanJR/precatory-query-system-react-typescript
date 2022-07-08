import styles from './Subtitle.module.scss'

interface Props{
    subtitle: string | null;
}

const Subtitle = (props: Props) => {
    const { subtitle } = props;
    return (
        <h4 className={styles.subtitle}>{subtitle}</h4>
    )
}

export default Subtitle;
