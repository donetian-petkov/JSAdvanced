import styles from './Footer.module.css'


export default function Footer() {

    return (
        <div className={styles.footer} >

            <a href="https://donetian-petkov.github.io/" target="_blank">this.website</a>
            <a href="https://donetianpetkov.com/website"  target="_blank">this.movies</a>
            <a href="https://donetianpetkov.com/new_website" target="_blank">this.games</a>

        </div>
    )
}