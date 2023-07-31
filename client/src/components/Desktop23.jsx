import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "./Desktop23.module.css";

const Desktop23 = () => {
  return (
    <div className={styles.desktop23}>
      <div className={styles.ourSponsors}>
        <span>{`Our `}</span>
        <span className={styles.sponsors}>Sponsors</span>
      </div>

      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000} // Slide interval in milliseconds
        className={styles.carouselWrapper}
      >
        <div className={styles.platinum1Icon}>
          <div className={styles.platinum}>
            <img alt="" src="/platinum-1@2x.png" />
            <img alt="" src="/civo-1@2x.png" />
            <img alt="" src="/unknown-1@2x.png" />
          </div>
          <div className={styles.platinum}>
            <img alt="" src="/images-3@2x.png" />
            <img alt="" src="/unknown-2@2x.png" />

            
          </div>
          <div className={styles.platinum}>
            <img alt="" src="/civo-1@2x.png" />
            <img alt="" src="/unknown-4@2x.png" />

          </div>
          

        </div>

        <div className={styles.platinum1Icon}>
          <div className={styles.platinum}>
            <img alt="" src="/platinum-1@2x.png" />
            <img alt="" src="/civo-1@2x.png" />
            <img alt="" src="/unknown-1@2x.png" />
          </div>
          <div className={styles.platinum}>
            <img alt="" src="/images-3@2x.png" />
            <img alt="" src="/unknown-2@2x.png" />

            
          </div>
          <div className={styles.platinum}>
            <img alt="" src="/civo-1@2x.png" />
            <img alt="" src="/unknown-4@2x.png" />

          </div>
          

        </div>

        <div className={styles.platinum1Icon}>
          <div className={styles.platinum}>
            <img alt="" src="/platinum-1@2x.png" />
            <img alt="" src="/civo-1@2x.png" />
            <img alt="" src="/unknown-1@2x.png" />
          </div>
          <div className={styles.platinum}>
            <img alt="" src="/images-3@2x.png" />
            <img alt="" src="/unknown-2@2x.png" />

            
          </div>
          <div className={styles.platinum}>
            <img alt="" src="/civo-1@2x.png" />
            <img alt="" src="/unknown-4@2x.png" />

          </div>
          

        </div>


        
        
        
      
          
        
        
        <div>
        
          <img alt="" src="/unknown-2@2x.png" />
        </div>
        
      </Carousel>

      
      <div className={styles.thanksYouToContainer}>
        <p className={styles.thanksYouTo}>
          Thanks to our sponsors for their invaluable support and commitment
          to the community.
        </p>
        <p className={styles.thanksYouTo}>
          If you are interested in becoming a sponsor, contact us at
          contact@kcdpune.in
        </p>
      </div>
    </div>
  );
};

export default Desktop23;
