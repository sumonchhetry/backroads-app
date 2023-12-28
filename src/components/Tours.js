import Title from './Title';
import { tourDetails } from '../data';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='Featured' subTitle='Tours' />

      <div className='section-center featured-center'>
        {tourDetails.map((details) => {
          const { id, img, date, title, text, loation, duration, price } =
            details;
          return (
            <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={img} className='tour-img' alt={title} />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'>{loation}</i>
                    </span>{' '}
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
