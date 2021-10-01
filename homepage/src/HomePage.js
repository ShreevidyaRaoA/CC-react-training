import styles from './HomePage.module.css';
//import styles from './Form.css';
function HomePage(component) {
    return (
        <div>
        <div className={styles.sidebar}>
          
            <nav>
          <a className="active" href="#home" target="_blank"> Home</a>
          <a href="#services" target="_blank"> Services</a>
          <a href="#contact" target="_blank"> Contact</a>
          <a href="#about" target="_blank"> About</a>
        </nav>
        </div>
        
        <div className={styles.main}>
            <h1>Sidebar with Icons</h1>
              
            <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        </div>
        <header>
          <h2>Heading by using header tag</h2>
          
          <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        </header>
        
        <footer>
            <p>Author: Shree vidya</p>
            <p><a href="shree@example.com">shreevidya@example.com</a></p>
          </footer>
          </div>
   );
    
}
export default HomePage;